// let greet: Function;

//example 1
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};
// greet = (name: number, greeting: string) => {
//   console.log(`${name} says ${greeting}`);
// };

//example2
let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//   if (action === "add") {
//     return numOne + numTwo;
//   }
// };
calc = (numOne: number, numTwo: number, action: string) => {
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
let logDetails: (obj: { name: string; age: number }) => void;
logDetails = (ninja: { name: string; age: number }) => {
  console.log(`${ninja.name} is ${ninja.age} old`);
};
logDetails = (ninja) => {
  console.log(`${ninja.name} is ${ninja.age} old`);
};
// logDetails = (ninja: { name: boolean; age: number }) => {
//   console.log(`${ninja.name} is ${ninja.age} old`);
// };
type person = { name: string; age: number };
logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} old`);
};
