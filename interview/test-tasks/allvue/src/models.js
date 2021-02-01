import { of } from 'rxjs';
import { db } from './db';

export class Lot{
   constructor(amount, pricePerShare){
    this.amount = amount;
    this.pricePerShare = pricePerShare;
  }
}

export class SharesLots{
    constructor(lotsArray = []){
    this.lots = lotsArray;
    this.sharesLeft = 0;
    this.sharesSold = 0;
    this.costBasisPerSoldShare = 0;
    this.costBasisPerRemainShare= 0;
    this.totalProfit = 0;
  }

  buy(lot){
    this.lots.push(lot);
    this.costBasisPerRemainShare = (this.costBasisPerRemainShare * this.sharesLeft + lot.amount * lot.pricePerShare) /
      (this.sharesLeft + lot.amount);
    this.sharesLeft += lot.amount;
    return this;
  }



  sellFIFO(amountToSell, pricePerShare){
    if(this.sharesLeft >= amountToSell){
      while(this.lots[0].amount < amountToSell){
        amountToSell -= this.lots[0].amount;
        this.sellAllLot(this.lots.splice(-1), pricePerShare)
      }
      this.sellFromLot(this.lots[this.lots.length-1], amountToSell, pricePerShare);
      return true;
    } else {
      return false;
    }
  }

  sellFILO(amountToSell, pricePerShare){
    if(this.sharesLeft >= amountToSell){
      while(this.lots[0].amount < amountToSell){
        amountToSell -= this.lots[0].amount;
        this.sellAllLot(this.lots.splice(0,1), pricePerShare)
      }
      this.sellFromLot(this.lots[0], amountToSell, pricePerShare);
      return true;
    } else {
      return false;
    }
  }

  sellAllLot(lot, pricePerShare){
    this.costBasisPerSoldShare = (this.costBasisPerSoldShare * this.sharesSold + lot.pricePerShare * lot.amount) /
      (this.sharesSold + lot.amount);
    this.costBasisPerRemainShare = (this.costBasisPerRemainShare * this.sharesLeft - lot.amount * lot.pricePerShare) /
      (this.sharesLeft - lot.amount);
    this.sharesSold += lot.amount;
    this.totalProfit += lot.amount * pricePerShare - lot.amount * lot.pricePerShare;
    this.sharesLeft -= lot.amount;
  }

  sellFromLot(lot, amount, pricePerShare){
    this.costBasisPerSoldShare = (this.costBasisPerSoldShare * this.sharesSold + lot.pricePerShare * amount) /
      (this.sharesSold + amount);
    this.costBasisPerRemainShare = (this.costBasisPerRemainShare * this.sharesLeft - amount * lot.pricePerShare) /
      (this.sharesLeft - amount);
    this.sharesSold += amount;
    this.totalProfit += amount * pricePerShare - amount * lot.pricePerShare;
    this.sharesLeft -= amount;

    lot.amount -= amount;
  }

}

export class DB{

  constructor() {
    this.users = {};
  }


  getUser(userId){
    if(this.users[userId]) return of(this.users[userId]);
    return of(new Error('User Undefined!'))
  }
  createUser(userId){
    if(this.users[userId]) return of(new Error('User Already Exist!'));

    this.users[userId] = new SharesLots();
    return of(this.users[userId]);
  }
  removeUser(userId){
    if(!this.users[userId]) return of(new Error('User Not Exist!'));
    const userData = this.users[userId];
    delete this.users[userId];
    return of(userData);
  }

  updateUser(userId, user){
    if(!this.users[userId]) return of(new Error('User Not Exist!'));
    this.users[userId] = user;
    return of(user);
  }
}

export class Server{
  constructor(db){
    this.db = db;
  }
  async handleAction(userId, operation, amount, price){

   let user = await this.getUser(userId);
    if(operation === 'sell') {
      user.sellFIFO(amount, price);
    } else {
      const lot = new Lot(amount, price);
      user.buy(lot);
    }

    user = await db.updateUser(userId, user).toPromise();
    return user;
  }
  createUser(userId){
    return this.db.createUser(userId).toPromise();
  }

  getUser(userId){
    return db.getUser(userId).toPromise();
  }
}
