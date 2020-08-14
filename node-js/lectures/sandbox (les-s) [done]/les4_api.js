const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Am I working?\n", (answer) => {
  if (answer == "yes") {
    console.log("Great!");
  } else {
    console.log("Not so good!");
  }
  rl.close();
});
