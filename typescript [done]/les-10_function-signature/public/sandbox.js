"use strict";
// let greet: Function;
//example 1
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// greet = (name: number, greeting: string) => {
//   console.log(`${name} says ${greeting}`);
// };
//example2
var calc;
// calc = (numOne: number, numTwo: number, action: string) => {
//   if (action === "add") {
//     return numOne + numTwo;
//   }
// };
calc = function (numOne, numTwo, action) {
    if (action === "add") {
        return numOne + numTwo;
    }
    return numOne - numTwo;
};
// calc = (numOne: number, numTwo: number, action: string) => {
//   if (action === "add") {
//     return numOne + numTwo;
//   }
//   return false;
// };
//example 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " old");
};
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " old");
};
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " old");
};
