"use strict";

const fs = require("fs");

const files = [
  "3_async.js",
  "1_readFileSync.js",
  "notExist",
  "2_writeFileSync.js",
  "blaBlaBla",
];
const stats = new Array(files.length);
const maxIndex = files.length - 1;
const printResult = () => {
  console.dir(stats);
};
const addToStats = (file, i, err, stat) => {
  if (err) {
    console.log(`File ${file} not found`);
  } else {
    stats[i] = stat;
  }
  if (i === maxIndex) printResult();
};
const iterate = (file, i) => {
  console.dir({ file, i });
  fs.lstat(file, addToStats.bind(null, file, i));
};

files.forEach(iterate);
