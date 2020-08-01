const fs = require("fs"),
  path = require("path");

module.exports = function (dirPath, ext, callback) {
  fs.readdir(dirPath, (err, files) => {
    if (err) return callback(err);

    files = files.filter((file) => path.extname(file) == "." + ext);
    callback(null, files);
  });
};
