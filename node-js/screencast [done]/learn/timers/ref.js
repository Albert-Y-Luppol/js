let http = require('http');

let server = new http.Server(function(req, res){
    /* req  processing */
}).listen(3000);

setTimeout(function(){
    server.close();
}, 2500);

let timer = setInterval(function(){
    console.log(process.memoryUsage())
}, 1000);

timer.unref();
// timer.ref();
