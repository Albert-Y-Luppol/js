let util = require('util');

let obj = {
    a: 5,
    b: 6,
    inspect: function(){
        return 123;
    }
}

obj.self = obj;

console.log( obj );

let str = util.format("My %s %d %j", "string", 123, {test: "obj"});

console.log("My %s %d %j", "string", 123, {test: "obj"});


function Animal(name){
    this.name = name;
}

Animal.prototype.walk  = function (){
    console.log("Walk " + this.name);
}

function Rabbit (name){
    this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function(){
    console.log("Jump " + this.name);
}

let rabbit = new Rabbit("Bunny");

rabbit.walk();
rabbit.jump();

console.log('Log');
console.error('Error');