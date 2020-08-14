"use strict";

const fs = require("fs");

const load = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) return console.error(err);
    console.clear();
    console.log(`Data Length: ${data.length}`);
    console.log(data);
  });
};

const watch = (path) => {
  fs.watch(path, () => {
    load(path);
  });
};

const path = "./1_file.js";
load(path);
watch(path);
