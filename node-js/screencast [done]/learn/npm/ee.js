let EventEmmiter = require('events').EventEmitter;

let server = new EventEmmiter;

server.on('request', function(request){
    request.approved = true;
});

server.on('request', function(request){
    console.log(request);
});

server.on('error', function(e){
    console.error(e.message);
});

server.emit('request', {from: "Client"});

server.emit('request', {from: "Another client"});

server.emit('error', new Error('Server Error'));


//storage

let db = new EventEmmiter();

db.setMaxListeners(0); // remove limit in 10

function Request(){
    let self = this;
    this.bigData = new Array(1e6).join('*');

    this.send = function(data){
        console.log(data);
    };

    this.onError = function(){
        self.send("Huston, we have a problem!");
    }

    function onData(info){
        self.send(info);
    }

    this.end = function(){
        db.removeListener('data', onData);
    }

    db.on('data', onData);
}

setInterval(function(){

    // module heapdupm track memory looses
    let request = new Request();
    request.end();
    console.log(process.memoryUsage().heapUsed);
    console.log(db);
}, 200);