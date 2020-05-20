let User = require('../models/user').User;
let HttpError = require('../error').HttpError;
let ObjectID = require('mongodb').ObjectID;

module.exports = function (app){
  app.get('/', function (req, res, next){
    res.render("index", {});
  });
  
  app.get('/users', function(req, res, next){
    User.find({}, function(err, users){
      if(err) return next(err);
      res.json(users);
    });
  });
  
  app.get('/user/:id', function(req, res, next){
    let id;
    try {
      id = new ObjectID(req.params.id);
    } catch (e){
      return next(404);
    }
    User.findById(id, function(err, user){
      if(err) return next(err);
      if(!user){
        return next(404);
      }
      res.json(user);
    });
  });
}