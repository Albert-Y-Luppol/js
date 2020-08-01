import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
let docOne;
let docTwo;
docOne = new Invoice("John", "web work", 250);
docTwo = new Payment("Lee", "help", 200);
let docs = [];
docs.push(docOne, docTwo);
console.log(docs);
const me = {
    name: "Shaw",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
console.log(me);
let someone;
const greetPerson = (person) => {
    console.log("Hello ", person.name);
};
// greetPerson('Joe');
greetPerson(me);
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
const anchor = document.querySelector("a");
// console.log(anchor.href);
if (anchor) {
    console.log(anchor.href);
}
const link = document.querySelector("a"); //mean not null
console.log(link.href);
// const form = document.querySelector("form")!;
const form = document.querySelector("form.new-item-form");
console.log(form.children);
// inputs
const type = document.querySelector("#type");
const toform = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toform.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toform.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
class Test {
    constructor(lee, toe, tom, joe) {
        this.lee = lee;
        this.toe = toe;
        this.tom = tom;
        this.joe = joe;
    }
    log() {
        console.log(this.toe, this.lee);
    }
    vog() {
        console.log("Hey");
    }
}
let testOne;
let testTwo;
testOne = {
    // lee: 'sdfds',
    // toe: 40,
    tom: "sdsf",
    joe: 50,
    log() { },
};
testTwo = new Test("dsfds", 29, "sdfdsf", 40);
