let http = require('http');
let server = http.createServer();
// let debug = require('debug')('server');

server.on('request', require('./request'));

server.listen(1409);

// debug("Server is running");