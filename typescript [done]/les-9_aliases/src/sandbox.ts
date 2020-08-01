type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has uid of ${uid}`);
};
const logDetailsAgain = (uid: StringOrNum, item: string) => {
  console.log(`${item} has uid of ${uid}`);
};
const logDetailsAgainMore = (uid: StringOrNum, item: string) => {
  console.log(`${item} has uid of ${uid}`);
};

const greet = (user: { name: string; uid: string | number }) => {
  console.log(`${user.name} says hello`);
};

const greetAgain = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};
const greetAgainMore = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};
