"use strict";

const fs = require("fs");

fs.readFile("async.js", "utf8", (err, buffer) => {
  if (err) return console.error(err); //process.exit(0);

  console.log("File size: " + buffer.length);
  const lines = buffer.split("\n").filter((line) => !!line);
  const content = lines.join("\n");

  fs.writeFile("async.txt", content, (err) => {
    if (err) return console.error(err);
    console.log("New file size: " + content.length);
  });
});

console.log("Read/write async example:\n");
