"use strict";
const me = {
    name: "Shan",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
console.log(me);
let someone;
const greetPerson = (person) => {
    console.log("Hello ", person.name);
};
// greetPerson('Joe');
greetPerson(me);
