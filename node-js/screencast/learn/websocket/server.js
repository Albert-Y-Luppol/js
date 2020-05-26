let WebSocketServer = require('ws').Server;
let http = require('http');
let express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

let server = http.createServer(app);
server.listen(8080);

let webSocketServer = new WebSocketServer({server: server});
webSocketServer.on('connection', function(ws){
    let timer = setInterval(function(){
        ws.send(JSON.stringify(process.memoryUsage()), function(error){
            //handle error
        });
    }, 100);

    console.log("Client connected.");

    ws.on('close', function(){
        console.log('Client disconnected');
        clearInterval(timer);
    });
});