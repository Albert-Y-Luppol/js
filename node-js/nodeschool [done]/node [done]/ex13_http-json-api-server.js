const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.method != "GET") return res.end("Accept only GET requests!\n");
//   let url = new URL(req.url, "http://localhost");
//   switch (url.pathname) {
//     case "/api/parsetime":
//       let dateTime = new Date(url.searchParams.get("iso"));
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(
//         JSON.stringify({
//           hour: dateTime.getHours(),
//           minute: dateTime.getMinutes(),
//           second: dateTime.getSeconds(),
//         })
//       );
//       break;

//     case "/api/unixtime":
//       let dateUnix = new Date(url.searchParams.get("iso"));
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(
//         JSON.stringify({
//           unixtime: dateUnix.getTime(),
//         })
//       );
//       break;

//     default:
//       res.writeHead(404);
//       res.end("Wrong path!\n");
//   }
// });

const server = http.createServer((req, res) => {
  if (req.method != "GET") return res.end("Accept only GET requests!\n");
  let url = new URL(req.url, "http://localhost");
  let result;
  switch (url.pathname) {
    case "/api/parsetime":
      result = parsetime(new Date(url.searchParams.get("iso")));
      break;

    case "/api/unixtime":
      result = unixtime(new Date(url.searchParams.get("iso")));
      break;

    default:
      res.writeHead(404);
      return res.end("Wrong path!\n");
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  return res.end(JSON.stringify(result));
});

server.listen(process.argv[2]);

// functions

function parsetime(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
}

function unixtime(date) {
  return {
    unixtime: date.getTime(),
  };
}
