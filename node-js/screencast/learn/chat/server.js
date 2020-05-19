let http = require('http');
let fs = require('fs');
let chat = require('./chat')

http.createServer(function(req, res){
    switch (req.url){
        case '/': 
            sendFile("index.html", res);
            break;
        case '/client.js': 
            sendFile("client.js", res);
            break;
        case '/subscribe': 
            chat.subscribe(req, res);
            break;
        case '/publish': 

            let body = '';

            req
                .on('readable', function(){
                    let chunk = req.read();

                    if(!chunk) return;

                    body += chunk;

                    if(body.length > 1e4){
                        res.statusCode = 413;
                        res.end("Your message is too big for my little chat!");
                    }
                })
                .on('end', function(){
                    try{
                        // console.log(body);
                        body = JSON.parse(body);
                    } catch(e){
                        // console.log(e);
                        res.statusCode = 400;
                        res.end("Bad request!");
                        return;
                    }

                    chat.publish(body.message);
                    res.end("ok");
                });
            break;
        default: 
            res.statusCode = 404;
            res.end("Not Found! Check URL");
    }
}).listen(3000);

function sendFile (fileName, res){
    let fileStream = fs.createReadStream(fileName);

    fileStream
        .on('error', function(){
            res.statusCode = 500;
            res.end("Server Error!")
        });
        //.pipe(res);

    pipeFn(fileStream, res);

    res.on('close', function(){
        fileStream.destroy();
    });
}

function pipeFn(fileStream, res){
    fileStream.on('readable', write);

    function write(){
        let chunk = fileStream.read();

        if(chunk && !res.write(chunk)){
            fileStream.removeListener('readable', write);

            res.once('drain', function (){
                fileStream.on('readable', write);
                write();
            });
        }
    }
    fileStream.on('end', function(){
        res.end();
    });
}