const http = require("http");

// let url = process.argv[2];

// http.get(url, (res) => {
//   const { statusCode } = res;

//   if (statusCode != 200) {
//     console.error("Request failed. Status code: " + statusCode);
//     res.resume();
//     return;
//   }

//   res.setEncoding("utf8");
//   res.on("error", (err) => {
//     console.error(err);
//   });
//   res.on("data", (chunk) => {
//     console.log(chunk);
//   });
// });

http
  .get(process.argv[2], function (res) {
    res.setEncoding("utf8");
    res.on("data", console.log);
    res.on("error", console.error);
  })
  .on("error", console.error);
