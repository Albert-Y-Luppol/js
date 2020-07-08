"use strict";
console.clear();

const fs = require("fs");
const http = require("http");
const cache = new Map();
const lib = "./lib/";
const cacheFile = (path) => {
  const filePath = lib + path;
  try {
    const libPath = require.resolve(filePath);
    delete require.cache[libPath];
  } catch (err) {
    return console.error(err);
  }
  try {
    const mod = require(filePath);
    cache.set(path, mod);
  } catch (err) {
    cache.delete(path);
  }
};
const cacheFoder = (path) => {
  fs.readdir(path, "utf8", (err, files) => {
    if (err) return console.error(err);
    files.forEach(cacheFile);
  });
};
const watch = (path) => {
  fs.watch(path, "utf8", (event, pathToFile) => {
    cacheFile(pathToFile);
  });
};

cacheFoder(lib);
watch(lib);

const ls = (res, list) => {
  res.write("<html>");
  for (const name of list) {
    res.write(`<li><a href="${name}/">${name}</a></li>`);
  }
  res.end("</html>");
};

http
  .createServer((req, res) => {
    const url = req.url.substring(1);
    if (!url) return ls(res, cache.keys());
    const [mod, method] = url.split("/");
    const methods = cache.get(mod);

    if (methods) {
      if (!method) return ls(res, Object.keys(methods));
      const handler = methods[method];
      if (handler) {
        res.end(handler().toString());
        return;
      }
    }
    res.end("File " + url + " not found!");
  })
  .listen(1409);
