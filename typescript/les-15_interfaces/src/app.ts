// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "Shaw",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent", amount);
    return amount;
  },
  // skills: [];
  // boo(){};
};
console.log(me);

let someone: IsPerson;

const greetPerson = (person: IsPerson) => {
  console.log("Hello ", person.name);
};

// greetPerson('Joe');
greetPerson(me);
