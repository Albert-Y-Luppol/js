// classes

export class Invoice {
  public client: string;
  readonly details: string;
  private amount: number;

  constructor(c: string, d: string, a: number) {
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
