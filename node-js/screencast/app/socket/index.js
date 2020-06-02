
const log = require('../libs/log')(module);
const async = require('async');
const config = require('../config');
const cookie = require('cookie');
const sessionStore = require('../libs/sessionStore');
const HttpError = require('../error').HttpError;
const User = require('../models/user').User;
const cookieParser = require("cookie-parser");


function loadSession(sid, callback){

    //callback(null, session)
    //callback(null, null) --!!-- | callback()
    //callback(err)

    sessionStore.load(sid, function(err, session){
        if(arguments.length == 0){
            return callback(null, null);
        } else {
            return callback(null, session);
        }
    });
}

function loadUser(session, callback){
    if(!session.user){
        log.debug("Session %s is anonymous", session.id);
        return callback(null, null);
    }

    log.debug("Retreaving user", session.user);

    User.findById(session.user, function(err, user){
        if (err) return callback(err);

        if(!user){
            return callback(null, null);
        }
        log.debug("user findById result: "+ user);
        callback(null, user);
    });
}


module.exports = function (server){
    const io = require('socket.io')(server);
    io.set('origins', 'localhost:*');
    io.set('logger', log);

    io.use(function (socket, next){


        async.waterfall([
            function (callback){
                // socket.request.cookies => {}.cookies
                // socket.request.cookies = socket.request.headers.cookie || "";
                socket.request.cookies = cookie.parse(socket.request.headers.cookie || '');
                let sidCookie = socket.request.cookies[config.get('session:key')];
                let sid = cookieParser.signedCookie(sidCookie, config.get('session:secret'));
                loadSession(sid, callback);
            },
            function (session, callback){

                if(!session){
                    callback(new HttpError(401, "No Session"));
                }

                socket.request.session = session;
                loadUser(session, callback);
            },
            function (user, callback){
                if(!user){
                    callback(new HttpError(403, "No user. Anonymous session may not connect"));
                }

                socket.request.user = user;
                callback(null);
            }
        ], function(err){
            if(!err){
                next();
            }

            next(err);
        });
    })


    io.on('sessionreload', function(sid){

        console.log("Reload catched!");
        let clients = io.sockets.sockets;

        for (let id in clients){
            let socket = clients[id]; 

            console.log(socket.request.session.id)
            if(socket.request.session.id != sid) return;

            loadSession(sid, function(err, session){
                if(err){
                    socket.emit("errorevent", "server error");
                    socket.disconnect();
                    return;
                }
                if(!session){
                    socket.emit("errorevent", "handshake unauthorized");
                    socket.disconnect();
                    return;
                }

                socket.request.session = session;
            });
        }

    });

    io.on('connection', function(socket){

        //browser -- sid --> WsKEY -> server

        console.log("Session Id: " + socket.request.session.id);

        let username = socket.request.user.get('username');


        socket.broadcast.emit('join', username);

        socket.on('message', function(text, callback){ 
            socket.broadcast.emit('message',username, text); // emit an event to the socket
            // io.emit('message', text);// io.emit('broadcast', /* */); // emit an event to all connected sockets
            callback && callback();
        }); // listen to the event

        socket.on('disconnect', function(){
            socket.broadcast.emit('leave', username);
        });

    });

    return io;
}