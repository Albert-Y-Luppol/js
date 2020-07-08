"use strict";

const b1 = Buffer.from([1, 2, 3, 4, 5, 6, 7, 27]);

console.log(b1);

const b2 = Buffer.from("Mark Aurelius (Марк Аврелий) ");

console.log(b2.toString("hex"));
console.log(b2.toString("base64"));
console.log(b2.toString("utf8"));
console.log(b2.toString("binary"));
