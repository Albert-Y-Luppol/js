"use strict";
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
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
invoices.forEach(function (inv) { return console.log(inv.format()); });
