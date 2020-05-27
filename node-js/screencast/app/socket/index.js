
let log = require('../libs/log')(module);

module.exports = function (server){
    const io = require('socket.io')(server);
    io.set('origins', 'localhost:*');
    io.set('logger', log);

    io.on('connection', function(socket){
        socket.on('message', function(text, callback){ 
            socket.broadcast.emit('message', text); // emit an event to the socket
            // io.emit('message', text);// io.emit('broadcast', /* */); // emit an event to all connected sockets
            callback('123');
        }); // listen to the event
    });
}