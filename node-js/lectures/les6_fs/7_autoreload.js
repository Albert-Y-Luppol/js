"use strict";

const fs = require("fs");

let data;

const load = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) return console.error(err);

    this.__proto__.data = data;
    console.clear();
    console.log("Buffer length: " + this.__proto__.data.length);
    console.log(this.__proto__.data);
  });
};
const watch = (path) => {
  fs.watch(path, (event, file) => {
    console.dir({ event, file });
    load(path);
  });
};
const path = "./7_autoreload.js";
load(path);
watch(path);
