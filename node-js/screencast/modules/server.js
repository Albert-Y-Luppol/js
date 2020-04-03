let db = require('db');
db.connect();

let User = require('user');

function run(){
    let vasya = new User('Vasya'),
    petya = new User('Petya');

    vasya.hello(petya);

    console.log(db.getPhrase('success'));
}

if(module.parent){

    exports.run = run;
} else {

    run();
}

