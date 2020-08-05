let  fs = require('fs');

fs.writeFile("file.tmp", "data", function(err){
    if(err) throw err;

    fs.rename("file.tmp","new.tmp", function (err){
        if(err) throw err;

        fs.unlink("new.tmp", function(err){
            if(err) throw err;
        });
    });
});

fs.readFile("blabla",{encoding: 'utf-8'}, function(err, data){
    if(err){
        if(err.code == 'ENOENT'){
            console.error(err.message);
        } else {
            console.error(err);
        }
    } else {
        console.log(data);
    }
});

fs.stat(__filename, function(err, stats){
    console.log(stats.isFile());
    console.log(stats);
});

