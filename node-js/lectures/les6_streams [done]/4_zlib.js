"use strict";

const fs = require("fs");
const zlib = require("zlib");

const rs = fs.createReadStream("4_zlib.js");
const ws = fs.createWriteStream("4_zlib.txt.gz");
const gs = zlib.createGzip();

rs.pipe(gs).pipe(ws);

rs.on("end", () => {
  console.log("Done");
});
