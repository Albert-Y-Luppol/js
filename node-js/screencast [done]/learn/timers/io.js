let fs = require('fs');

fs.open(__filename, "r", function(err, file){
    console.log("IO!");
});

setTimeout(function(){
    console.log('timeout first');
}, 0);

setTimeout(function(){
    console.log('timeout second');
}, 0);

setImmediate(function(){
    console.log('immediate');
});

setTimeout(function(){
    console.log('timeout third');
}, 0);


process.nextTick(function(){
    console.log('nextTick');
});