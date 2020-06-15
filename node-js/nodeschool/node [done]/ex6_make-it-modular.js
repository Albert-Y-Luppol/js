let mymodule = require("./ex6_mymodule");

mymodule(process.argv[2], process.argv[3], (err, arr) => {
  if (err) return console.error(err);

  arr.forEach((file) => {
    console.log(file);
  });
});
