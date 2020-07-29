//explicit type

let character: string;
let age: number;
let isLoggedIn: boolean;
// age = 'Luigi';
age = 30;
// isLoggedIn = 27;
isLoggedIn = true;

//arrays
let ninjas: string[];
// ninjas = 'Dom';
// ninjas = ['Df', 34];
ninjas = ["Htr", "ert"];

//union types
let mixed: (string | number)[];
// mixed = 10;
mixed.push("Hei");
mixed.push(26);
// mixed.push(false);
let uid: string | boolean;
// uid = 10;
uid = "True Indeed";
uid = true;

//objects
let ninjaOne: object;
// ninjaOne = 'Green';
ninjaOne = { blue: 10, ref: false };
ninjaOne = ["hho", false];

let ninjaTwo: {
  name: string;
  age: number;
  belt: boolean;
};

// ninjaTwo = 'Hiw';
// ninjaTwo = ['Any'];
// ninjaTwo = {age: 48};
// ninjaTwo = {name: 21, age: 23, belt: false};
// ninjaTwo = { name: "Twenty", age: 23, belt: false, ho: 4 };
ninjaTwo = { name: "Twenty", age: 23, belt: false };
