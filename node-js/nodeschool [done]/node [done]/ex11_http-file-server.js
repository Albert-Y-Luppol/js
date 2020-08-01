const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  let rs = fs.createReadStream(process.argv[3]);
  rs.on("open", () => {
    rs.pipe(res);
  });
  rs.on("error", (err) => {
    res.end(err);
  });
});
server.listen(process.argv[2]);
