const net = require("net");
const server = net.createServer(function (socket) {
  socket.end(getNormalizeDateAndTime(new Date()) + "\n");
});
server.listen(process.argv[2]);

function getNormalizeDateAndTime(date) {
  return `${date.getFullYear()}-${("0" + (1 + date.getMonth())).slice(-2)}-${(
    "0" + date.getDate()
  ).slice(-2)} ${("0" + date.getHours()).slice(-2)}:${(
    "0" + date.getMinutes()
  ).slice(-2)}`;
}
