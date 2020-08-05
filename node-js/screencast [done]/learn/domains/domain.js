let domain = require('domain');
let fs = require('fs');
let http = require('http');
let d  = domain.create();
let server;

d.on('error', function(err){
    console.error("Domain catch error: %s", err);
});

server = new http.Server();

d.run(function(){
    // d.enter(); --> process.domain
    
    d.add(server); // server <-memory-> domain

    console.log(server.domain);

    d.remove(server); // remove link to server from domain (adds to domain if server were added with add())
    //d.exit();
});

server.on('boom', function(){
    setTimeout(function(){
        fs.readFile(__filename, function(){
            error();
        });
    }, 1000);
});

server.emit('boom');