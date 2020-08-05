let mongoose = require('./libs/mongoose');
let async = require('async'); //Promise, Q

// 1. drop DB
// 2. create & save 3 users
// 3. close connection

async.series([
    open,
    dropDatabase,
    requireModels,
    createUsers
], function(err, results){
    // if (err) throw err;
    console.log(arguments);
    mongoose.disconnect();
    process.exit(err ? 255 : 0);
});

function open(callback){
    mongoose.connection.on('open', callback);
}

function dropDatabase(callback){
    let db = mongoose.connection;
    db.dropDatabase(callback);
}

function requireModels(callback){
    require('./models/user');

    async.each(Object.keys(mongoose.models), function(modelName, callback) {
        mongoose.models[modelName].createIndexes(callback);
    }, callback);
}

function createUsers(callback){

    let users = [
        {username: 'Tom', password: 'tom'},
        {username: 'John', password: 'john'},
        {username: 'Admin', password: 'admin'}
    ];

    async.each(users, function (userData, callback){
        let user = new mongoose.models.User(userData);
        user.save(callback);
    }, callback);
}
