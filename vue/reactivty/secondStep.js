// _________________________________________________step1__________________

// let data = { price: 5, quantity: 2 };

// Object.defineProperty(data, "price", {
//   get() {
//     console.log("I was accessed");
//   },
//   set(newVal) {
//     console.log("I was changed");
//   },
// });

// data.price;
// data.price = 20;

// __________________________________________________step2___________________________

// let data = { price: 5, quantity: 2 };
// let internalValue = data.price;

// Object.defineProperty(data, "price", {
//   get() {
//     console.log(`Getting price: ${internalValue}`);
//     return internalValue;
//   },
//   set(newVal) {
//     console.log(`Setting price to: ${newVal}`);
//     internalValue = newVal;
//   },
// });

// data.price;
// data.price = 20;

// ______________________________________________________step3_____________________

let data = { price: 5, quantity: 2 };
Object.keys(data).forEach((key) => {
  let internalValue = data[key];
  Object.defineProperty(data, key, {
    get() {
      console.log(`Getting ${key}: ${internalValue}`);
      return internalValue;
    },
    set(newVal) {
      console.log(`Setting ${key} to: ${newVal}`);
      internalValue = newVal;
    },
  });
});

let total = data.price * data.quantity;
data.price = 20;
