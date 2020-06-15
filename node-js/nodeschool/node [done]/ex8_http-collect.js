const http = require("http");

// http
//   .get(process.argv[2], (res) => {
//     res.on("error", console.error);

//     res.setEncoding("utf8");
//     let data = "";
//     res.on("data", (chunk) => {
//       data += chunk;
//     });
//     res.on("end", () => {
//       console.log(data.length);
//       console.log(data);
//     });
//   })
//   .on("error", console.error);

const bl = require("bl");

http
  .get(process.argv[2], (res) => {
    res.pipe(
      bl((err, data) => {
        if (err) return console.error(err);
        data = data.toString();
        console.log(data.length);
        console.log(data);
      })
    );
  })
  .on("error", console.error);
