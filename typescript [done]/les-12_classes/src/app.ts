// classes

class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work on mario website", 250);
const invTwo = new Invoice("Luigi", "work on Lui website", 300);

console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne, invTwo);
console.log(invoices);

invTwo.client = "Joe";
// invOne.amount = 'Tom';
invoices.forEach((inv) => console.log(inv.format()));
