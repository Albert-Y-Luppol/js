let age: any = 25;
age = true;
console.log(age);
age = "hello";
console.log(age);
age = { name: "Luigi" };
console.log(age);

let mixed: any[] = [];
mixed.push(5);
mixed.push("mario");
mixed.push(false);
console.log(mixed);

let ninja: { name: any; age: any };
ninja = { name: "Youshi", age: 25 };
console.log(ninja);
ninja = { name: 24, age: "Sue" };
console.log(ninja);
