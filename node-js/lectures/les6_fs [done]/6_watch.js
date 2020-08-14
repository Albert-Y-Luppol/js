const fs = require("fs");

fs.watch("./6_watch.js", (event, file) => {
  console.dir({ event, file });
});
