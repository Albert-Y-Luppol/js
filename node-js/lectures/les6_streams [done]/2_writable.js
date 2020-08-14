"use strict";

const fs = require("fs");

const rs = fs.createReadStream("2_writable.js", "utf8");
const ws = fs.createWriteStream("2_writable.txt", "utf8");

rs.on("data", (buffer) => {
  console.log("Copy " + buffer.length + " chars");
  ws.write(buffer);
});

rs.on("end", () => {
  console.log("Done");
});
