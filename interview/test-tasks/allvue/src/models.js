import { of } from 'rxjs';
import { db } from './db';

export class Lot{
   constructor(amount, pricePerShare, date){
    this.amount = amount;
    this.pricePerShare = pricePerShare;
    this.date = date;
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
    const spendMoneyForRemainPortfolio = this.costBasisPerRemainShare * this.sharesLeft;
    const spendMoneyForNewLot = lot.amount * lot.pricePerShare;
    this.sharesLeft += lot.amount;
    this.costBasisPerRemainShare = (spendMoneyForRemainPortfolio + spendMoneyForNewLot) / this.sharesLeft;
    return this;
  }

  sell(amountToSell, pricePerShare) {
    let receivedMoneyForSoldShares = 0;
    let soldShares = 0;
    let profit = 0;
    for (const lot of this.lots){
      if(!amountToSell){
        const spendMoneyForRemainPortfolio = this.costBasisPerRemainShare * this.sharesLeft;
        const spendMoneyForSoldPortfolio = this.costBasisPerSoldShare * this.sharesSold;
        const spendMoneyForSoldShares = receivedMoneyForSoldShares - profit;

        this.totalProfit += profit;
        this.sharesLeft -= soldShares;
        this.sharesSold += soldShares;
        this.costBasisPerRemainShare = (spendMoneyForRemainPortfolio - spendMoneyForSoldShares) / this.sharesLeft;
        this.costBasisPerSoldShare = (spendMoneyForSoldPortfolio + spendMoneyForSoldShares) / this.sharesSold;

        return this;
      }

      const lotToSell = this.lots.pop();
      if(lotToSell.amount > amountToSell){
        const gotMoney = amountToSell * pricePerShare;
        const spendMoney = amountToSell * lotToSell.pricePerShare;

        profit += gotMoney - spendMoney;
        soldShares += amountToSell;
        receivedMoneyForSoldShares += gotMoney;
        lotToSell.amount -= amountToSell;
        amountToSell = 0;

        this.lots.push(lotToSell);
      } else {
        const gotMoney = lotToSell.amount * pricePerShare;
        const spendMoney = lotToSell.amount * lotToSell.pricePerShare;

        profit += gotMoney - spendMoney;
        soldShares += lotToSell.amount;
        receivedMoneyForSoldShares += gotMoney;
        amountToSell -= lotToSell.amount;
      }
    }
  }

  sellFIFO(amountToSell, pricePerShare){
      this.lots = this.lots.filter((lotA, lotB) => lotB.date - lotA.date);
      return this.sell(amountToSell, pricePerShare);
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
