import { HasFormatter } from "../interfaces/HasFormatter.js";

// classes

export class Payment implements HasFormatter {
  //should have methods and fields from interface

  constructor(
    public client: string,
    readonly details: string,
    private amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
