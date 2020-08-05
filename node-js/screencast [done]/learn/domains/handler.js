let fs = require('fs');
// let mongo = require('mongodb');
// let mysql = require('mongodb');
// let redis = require('redis').createClient();

module.exports = function handler(req, res){
    if(req.url = '/'){
        fs.readFile('inndex.html', process.domain.bind(function(err, content){
            if(err) throw err;

            res.end(content);
        }));

        // redis.get("data", function(err, data){
        //     // ...
        //     throw new Error("redis callback");
        // });
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
};