var express = require('express');
var path = require('path');
let connect = require('connect');
let errorHandler = require('errorhandler');
var http = require('http');
let config = require('./config');
let log = require('./libs/log')(module);
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
let HttpError = require('./error').HttpError;
let session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
// const mongoose = require('./libs/mongoose');
const sessionStore = require('./libs/sessionStore')

var app = express();


app.engine('ejs', require('ejs-locals')); //layout partial block
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: config.get('session:secret'), //ASDKJHJKASD8768SADAS786ASD6.SHA256
  key: config.get('session:key'),
  cookie: config.get('session:cookie'),
  store: sessionStore
}));

app.use(function(req, res, next){
  next();
  // req.session.numberOfVisits = req.session.numberOfVisits + 1 || 1;
  // res.send("Visits: " + req.session.numberOfVisits);
});

app.use(require('./middleware/loadUser'));
app.use(require('./middleware/sendHttpError'));

require('./routes')(app);

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(err, req, res, next){

  if(typeof err == 'number'){
    err = new HttpError(err);
  }

  if(err instanceof HttpError){
    res.sendHttpError(err);
  } else {
    if(app.get('env') == 'development'){
      errorHandler()(err, req, res, next);
    } else {
      log.error(err);
      err = new HttpError(500);
      res.sendHttpError(err);
    }
  }
});


const server = http.createServer(app);

server.listen(config.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));
});

let io = require('./socket')(server);
app.set('io', io);