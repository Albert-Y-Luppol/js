(()=>{
    'use strict';

    addToStringMethod();

    // checkDiff();

    // addNativeProto();


    // functions


    function addNativeProto(){
        String.prototype.say = function(){
            alert(this);
        };


        'Hi Nigger!'.say();
    }


    function checkDiff(){
        // Object.name = 'Pete';
        function Rabbit(name) {
            this.name = name;
        }
        Rabbit.prototype.sayHi  = function () {
        alert(this.name);
        };
        
        let rabbit = new Rabbit("Rabbit");
        console.log(rabbit);
        rabbit.sayHi();
        console.log(Rabbit.prototype);
        Rabbit.prototype.sayHi();
        console.log(Object.getPrototypeOf(rabbit));
        Object.getPrototypeOf(rabbit).sayHi();
        console.log(rabbit.__proto__);
        rabbit.__proto__.sayHi();
    }


    function addToStringMethod(){
        let dictionary = Object.create(null, {
            toString: {
                value(){
                    return Object.keys(this).join();
                },
                configurable: true,
                writable: true,
                enumerable: false // or just skip, all skipped flags are false
            }
        });

        

        // your code to add dictionary.toString method

        // add some data
        dictionary.apple = "Apple";
        dictionary.__proto__ = "test"; // __proto__ is a regular property key here

        // only apple and __proto__ are in the loop
        for(let key in dictionary) {
        alert(key); // "apple", then "__proto__"
        }

        // your toString in action
        alert(dictionary); // "apple,__proto__"
    }
})();