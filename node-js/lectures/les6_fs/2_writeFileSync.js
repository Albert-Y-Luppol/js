"use strict";

const fs = require("fs");

const src = fs.readFileSync("writeFileSync.js", "utf8");
const lines = src.split("\r\n").filter((line) => !!line);

fs.writeFileSync("writeFileSync.txt", lines.join("\n"));
