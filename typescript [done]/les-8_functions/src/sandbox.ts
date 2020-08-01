let greet = () => {
  console.log("Hello!");
};

// greet = 'hello';

let hey: Function;
// hey = 'Hey';
hey = () => {
  console.log("Hey!");
};
const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
};
// add(5, 'hey');
add(4, 6);
add(4, 6, "Hey");
// add(4,6, false);
// add(4);

const mult = (a: number, b: number, c: number | string = 10): void => {
  console.log(a * b);
  console.log(c);
};
mult(4, 2);

const minus = (a: number, b: number) => {
  return a - b;
};
let result = minus(7, 2);
console.log(result);
// result = 'Oups';

const div = (a: number, b: number): number => {
  return a / b;
};
