let http = require('http');

http.createServer(function (req, res){
    setTimeout(function(){
        // async task - put task last in qeueue (prmanently, not last with new req)
    }, 0);

    process.nextTick(function(){
        // async task - put task after current iteration
        req.on('readable', function(){
            //we seted it before every new req processed
        });
    })

    let part = 0;

    setImmediate(function run(){
        // async task - put task last in queue (and keep it there even with new req; process it after all (when there is nothing else))

        heavyCalc(part++);
        if(notFinished) setImmediate(run);
    });
}).listen(3000);