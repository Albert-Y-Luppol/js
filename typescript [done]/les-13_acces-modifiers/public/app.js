"use strict";
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        // this.deta      ils = "Top";
        this.amount = 100;
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "work on mario website", 250);
var invTwo = new Invoice("Luigi", "work on Lui website", 300);
console.log(invOne, invTwo);
var invoices = [];
invoices.push(invOne, invTwo);
console.log(invoices);
invTwo.client = "Joe";
// invOne.amount = 'Tom';
// invOne.amount = 20;
// invOne.details = "NewOne";
console.log(invOne.details);
invoices.forEach(function (inv) { return console.log(inv.format()); });
//shortcut
var Short = /** @class */ (function () {
    function Short(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Short.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Short;
}());
// class Wrong {
//   constructor(client: string, detais: string, amount: number) {}
//   format() {
//     return `${this.client} owes $${this.amount} for ${this.details}`;
//   }
// }
var shOne = new Short("Hue", "work on mario website", 250);
var shTwo = new Short("Sue", "work on Lui website", 300);
var shs = [shOne, shTwo];
shs.forEach(function (sh) { return console.log(sh.format()); });
