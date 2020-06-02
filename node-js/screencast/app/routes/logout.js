exports.post = function(req, res, next){

    let sid = req.session.id; //before destroy()
    let io = req.app.get('io');

    req.session.destroy(function(err){

        io.sockets._events.sessionreload(sid);
        if(err) return next(err);

        res.redirect('/');
    });
}