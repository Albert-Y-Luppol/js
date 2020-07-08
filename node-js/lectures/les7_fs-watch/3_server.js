"use strict";
const fs = require("fs");
const http = require("http");
const cache = new Map();
const cacheFile = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      cache.delete(path);
      return;
    }
    cache.set(path, data);
  });
};

const cacheFolder = (path) => {
  fs.readdir(path, "utf8", (err, files) => {
    if (err) return;
    files.forEach(cacheFile);
  });
};

const watch = (path) => {
  fs.watch(path, (event, file) => {
    cacheFile(file);
  });
};

cacheFolder("./");
watch("./");

http
  .createServer((req, res) => {
    const url = req.url.substring(1);
    console.log(url);
    const data = cache.get(url);
    if (data) res.end(data);
    else res.end(`File ${url} not found!`);
  })
  .listen(1409)
  .on("connection", () => {
    fs.readdir("./", "utf8", (err, files) => {
      if (err) return;
      //   files.forEach(cacheFile);
    });
  });
