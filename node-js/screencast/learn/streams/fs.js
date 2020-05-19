let fs = require('fs');

//fs.ReadStrean extends stream.Readable
let stream = new fs.ReadStream("big.html");

stream.on('readable', function(){
    let data = stream.read();
    if(!data) return;
    // console.log(data);
    console.log(data.length);
});

stream.on('end', function(){
    console.log("The End");
});

stream.on('error', function (err){
    if(err.code == 'ENOENT'){
        console.log("File not Found! My ENOENT handler");
    } else {
        console.error(err);
    }
});