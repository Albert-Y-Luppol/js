let http = require('http');
let fs = require('fs');

http.createServer(function(req, res){
    let info;

    if (req.url == '/'){
        try{
            info = fs.readFileSync('index.html'); //blocking server untill end of task
        } catch (err){
            console.error(err);
            res.statusCode = 500;
            res.end('Server Error!');
            return;
        }

        res.end(info);
    } else {/* 404 */}
}).listen(3000);