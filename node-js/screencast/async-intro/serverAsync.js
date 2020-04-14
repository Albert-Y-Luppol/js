let http = require('http');
let fs = require('fs');

http.createServer(function(req, res){
    let info;

    if(req.url == '/'){
        // info = fs.readFileSync('index.html'); //only for logs

        fs.readFile('index.html', function (err, info){ //callback 

            // if(err) throw err;

            if(err){
                console.error(err);
                res.statusCode = 500;
                res.end("Error on server!");
                return;
            }

            res.end(info);
        });

        // res.end(info);
    } else if(req.url == '/now'){
        res.end(new Date().toString());
    } else {/* 404 */}
}).listen(3000); // cluster