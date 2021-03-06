let http = require('http');
let url = require('url');

let server = new http.Server(function(req, res){

    

    let urlParsed = url.parse(req.url, true);
    console.log(urlParsed);

    if(urlParsed.pathname == '/echo' && urlParsed.query.message){
        // res.writeHead(200, "OK", {'Cache-control': 'no-cache'});
        res.setHeader('Cache-control', 'no-cache'); //removeHeader
        res.end(urlParsed.query.message);
    } else {
        res.statusCode = 404; //not found
        res.end('Page not found!');
    }
});

server.listen(1337, '127.0.0.1');