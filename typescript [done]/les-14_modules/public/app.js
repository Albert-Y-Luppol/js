import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice("mario", "work on mario website", 250);
const invTwo = new Invoice("Luigi", "work on Lui website", 300);
console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne, invTwo);
console.log(invoices);
invTwo.client = "Joe";
// invOne.amount = 'Tom';
// invOne.amount = 20;
// invOne.details = "NewOne";
console.log(invOne.details);
invoices.forEach((inv) => console.log(inv.format()));
//shortcut
class Short {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
// class Wrong {
//   constructor(client: string, detais: string, amount: number) {}
//   format() {
//     return `${this.client} owes $${this.amount} for ${this.details}`;
//   }
// }
const shOne = new Short("Hue", "work on mario website", 250);
const shTwo = new Short("Sue", "work on Lui website", 300);
let shs = [shOne, shTwo];
shs.forEach((sh) => console.log(sh.format()));
