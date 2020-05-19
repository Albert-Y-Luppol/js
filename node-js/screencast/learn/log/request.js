let url = require('url');
// let debug = require('debug')('server:request');
// let log = require('./log')(module);

module.exports = function(req, res){
    let urlParsed = url.parse(req.url, true);

    // debug("Got request", req.method, req.url);

    // log.info("Got request", req.method, req.url);

    if (req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message){
        let message = urlParsed.query.message;
        // debug("Echo: " + message);

        // log.debug("Echo: " + message);

        res.end(message);

        return;
    }

    // debug("Unknown URL");

    // log.error("Unknown URL");

    res.statusCode = 404;
    res.end('Not Found');
};