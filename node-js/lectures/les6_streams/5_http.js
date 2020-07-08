"use strict";

const fs = require("fs"),
  zlib = require("zlib"),
  http = require("http");

const rs = fs.createReadStream("index.html"),
  gs = zlib.createGzip();

const buffers = [];
let buffer = null;

gs.on("data", (buffer) => {
  buffers.push(buffer);
});

gs.on("end", () => {
  buffer = Buffer.concat(buffers);
});

rs.pipe(gs);

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "Content-Encoding": "gzip" });
  res.end(buffer);
});

server.listen(1409);
