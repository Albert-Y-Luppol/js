let http = require('http');
let fs = require('fs');

new http.Server(function(req, res){
    // res instanceof http.ServerResponse < stream.Writable

    if(req.url == '/big.html'){
        let file = new fs.ReadStream('big.html');

        sendFile(file, res);
    }
}).listen(3000);


function sendFile(file, res){
    // file.pipe(res);
    
    // file.pipe(process.stdout);

    file.on('readable', write);

    function write(){
        let fileContent = file.read();

        // res.write(fileContent);

        if(fileContent && !res.write(fileContent)){

            file.removeListener('readable', write);

            res.once('drain', function(){
                console.log("------------drain----------------");
                file.on('readable', write);
                write();
            });
        }
    }

    file.on('end', function(){
        res.end('The End!');
    });

    file.on('error', function(err){
        res.statusCode = 500;
        res.end("Server Error");
        console.error(err);
    });

    file
        .on('open', function(){
            console.log("open");
        })
        .on('close', function(){
            console.log("Close --Full file Readed");
        });

    res.on('close', function(){
        console.log("Connection Interupted; Manually close stream.")
        file.destroy();
    });
}