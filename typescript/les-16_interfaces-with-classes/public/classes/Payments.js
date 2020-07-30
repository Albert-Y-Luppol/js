// classes
export class Payment {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        // this.deta      ils = "Top";
        this.amount = 100;
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
