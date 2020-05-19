//set NODE_ENV=production
// supervisor -- server.js --port=3000

let http = require('http');
let port = require('minimist')(process.argv).port;

console.log(port);

http.createServer(function (req, res){

    if(process.env.NODE_ENV == 'production'){
        //optimization
    } else if (process.env.NODE_ENV == 'development') {
        //additional debugging output
    }

    res.end("The server is running!");
}).listen(port);