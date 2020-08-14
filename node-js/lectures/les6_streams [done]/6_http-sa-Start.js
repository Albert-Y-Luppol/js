"use strict";

const fs = require("fs"),
  zlib = require("zlib"),
  http = require("http");

const prepareCache = (callback) => {
  let buffer = null;

  const rs = fs.createReadStream("index.html"),
    gs = zlib.createGzip();

  const buffers = [];

  gs.on("data", (buffer) => {
    buffers.push(buffer);
  });

  gs.once("end", () => {
    buffer = Buffer.concat(buffers);
    if (callback) {
      callback(null, buffer);
      callback = null;
    }
  });

  rs.on("error", (error) => {
    if (callback) {
      callback(buffer);
      callback = null;
    }
  });
  gs.on("error", (error) => {
    if (callback) {
      callback(buffer);
      callback = null;
    }
  });

  rs.pipe(gs);
};

const startServer = (err, buffer) => {
  if (err) return console.error(err);

  const server = http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200, { "Content-Encoding": "gzip" });
    res.end(buffer);
  });

  server.listen(1409);
};

prepareCache(startServer);
