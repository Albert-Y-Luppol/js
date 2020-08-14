"use strict";

const fs = require("fs");

const rs = fs.createReadStream("3_pipe.js", "utf8");
const ws = fs.createWriteStream("3_pipe.txt", "utf8");

rs.pipe(ws);

rs.on("end", () => {
  console.log("Done");
});
