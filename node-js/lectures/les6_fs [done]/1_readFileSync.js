"use strict";

const fs = require("fs");

const src = fs.readFileSync("readFileSync.js", "utf8");
const lines = src.split("\r\n").filter((line) => !!line);

console.log("Buffer length: " + src.length);
console.log(src);
console.dir(lines);
