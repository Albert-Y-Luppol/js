var express = require('express');
var path = require('path');
let connect = require('connect');
let errorHandler = require('errorhandler');
var http = require('http');
let config = require('./config');
let log = require('./libs/log')(module);
var cookieParser = require('cookie-parser');
let HttpError = require('./error').HttpError;

var app = express();


app.engine('ejs', require('ejs-locals')); //layout partial block
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

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


http.createServer(app).listen(config.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));
});



