const fs = require("fs");

fs.readFile(process.argv[2], "utf8", (err, content) => {
  if (err) return console.error(err);

  let lines = content.split("\n").length - 1;

  console.log(lines);
});
