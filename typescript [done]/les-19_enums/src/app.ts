import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

//generics

const addID = <T extends { name: string }>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let docOne = addID({ name: "yoshi", age: 40 });
// let docTwo = addID("Dou");
let docThree = addID({ name: "Tom" });
// let docFour = addID({ name: 12 });

console.log(docOne.name);

//Enums

enum ResourceType {
  BOOK,
  AUTHOR,
  DIRECTOR,
  PERSON,
}

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

let docFive: Resource<string> = {
  uid: 1,
  resourceType: ResourceType.AUTHOR,
  data: "Sue",
};

let docSix: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: addID({ name: "Sue" }),
};

console.log(docFive, docSix);
