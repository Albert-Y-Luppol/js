let db = require('db');
let log = require('logger')(module);

function User(name){
    this.name = name;
}

User.prototype.hello = function (who){
    log(`${db.getPhrase('Hello')}, ${who.name}!`);
}


log("User is required!");

module.exports = User;