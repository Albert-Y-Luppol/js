let obj = {
  name: "Albert",
  next: {
    name: "Albert",
    next: {
      name: "Albert",
      next: {
        name: "Albert",
        next: {
          name: "Albert",
          next: {
            name: "Albert",
            next: {
              name: "Albert",
              next: {
                name: "Albert",
                next: {
                  name: "Albert",
                  next: null,
                },
              },
            },
          },
        },
      },
    },
  },
};
Object.defineProperty(obj, "childCount", {
  enumerable: false,
  writable: false,
  value: 13,
});

console.clear();

console.log({ obj });

console.dir({ obj });
console.dir({ obj }, { showHidden: true, depth: 20, colors: true });

console.error("Error");

console.time("Loop time");
const arr = [];
for (let i = 0; i < 1000; i++) {
  arr.push(i);
}
console.timeEnd("Loop time");

console.trace("Trace here");
// throw new Error('Eah!');

console.table([
  { name: "Albert", position: "WebDev" },
  { name: "Jenya", position: "SoftwareDev" },
  { name: "Tima", position: "GameDev" },
]);

console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");

console.assert(10 === "10", "Message");

console.log(Object.keys(console));
