import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("John", "web work", 250);
docTwo = new Payment("Lee", "help", 200);

let docs: HasFormatter[] = [];

docs.push(docOne, docTwo);

console.log(docs);

// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "Shaw",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent", amount);
    return amount;
  },
  // skills: [];
};
console.log(me);

let someone: IsPerson;

const greetPerson = (person: IsPerson) => {
  console.log("Hello ", person.name);
};

// greetPerson('Joe');
greetPerson(me);

const invOne = new Invoice("mario", "work on mario website", 250);
const invTwo = new Invoice("Luigi", "work on Lui website", 300);

console.log(invOne, invTwo);

let invoices: Invoice[] = [];
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
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
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
let shs: Short[] = [shOne, shTwo];
shs.forEach((sh) => console.log(sh.format()));

const anchor = document.querySelector("a");

// console.log(anchor.href);

if (anchor) {
  console.log(anchor.href);
}

const link = document.querySelector("a")!; //mean not null
console.log(link.href);

// const form = document.querySelector("form")!;
const form = document.querySelector("form.new-item-form") as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toform = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(toform.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toform.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
});

//just check

interface TestInt {
  tom: string;
  joe: number;
  log(): void;
}

class Test implements TestInt {
  constructor(
    public lee: string,
    public toe: number,
    public tom: string,
    public joe: number
  ) {}
  log() {
    console.log(this.toe, this.lee);
  }
  vog() {
    console.log("Hey");
  }
}

let testOne: TestInt;
let testTwo: TestInt;

testOne = {
  // lee: 'sdfds',
  // toe: 40,
  tom: "sdsf",
  joe: 50,
  log() {},
  // vog(){}
};

testTwo = new Test("dsfds", 29, "sdfdsf", 40);
