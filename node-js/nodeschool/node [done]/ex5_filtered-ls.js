// const fs = require("fs");

// fs.readdir(process.argv[2], (err, arr) => {
//   if (err) return console.error(err);

//   arr.forEach((file) => {
//     if (file.split(".").pop() == process.argv[3] && file.includes("."))
//       console.log(file);
//   });
// });

// or

const fs = require("fs"),
  path = require("path");

fs.readdir(process.argv[2], (err, files) => {
  files.forEach((file) => {
    if (path.extname(file) == "." + process.argv[3]) console.log(file);
  });
});
