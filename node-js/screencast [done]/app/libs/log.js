let winston = require('winston');
let ENV = process.env.NODE_ENV;

//flexibility

function getLogger(module){

    let path = module.filename.split('\\').slice(-2).join('/');

    return winston.createLogger({
        transports:[
            new winston.transports.Console({
                level: ENV == 'development' ? 'debug' : 'error',
                format: winston.format.combine(
                    winston.format.colorize(),
                    winston.format.label({ label: path }),
                    // winston.format.json(),
                    winston.format.prettyPrint(),
                    winston.format.simple(),
                ),
            })
        ]
    });
}

module.exports = getLogger;