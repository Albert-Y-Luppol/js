"use strict";

const fs = require("fs");

const files = [
  "3_async.js",
  "1_readFileSync.js",
  "notExist",
  "2_writeFileSync.js",
];
const stats = new Array(files.length);
const maxIndex = files.length - 1;
const printResult = () => {
  console.dir(stats);
};

files.forEach((file, i) => {
  console.dir({ file, i });
  fs.lstat(file, (err, stat) => {
    if (err) {
      console.error(err);
    } else {
      stats[i] = stat;
    }

    if (i === maxIndex) printResult();
  });
});
