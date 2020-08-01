(()=>{
    'use strict';


    // resolveInheritance();

    // extendedClockFn();

    extendObject();


    // functions

    function extendObject(){
        class Rabbit extends Object {
            constructor(name) {
                super();
                this.name = name;
            }
        }
        
        let rabbit = new Rabbit("Rab");
        
        alert( rabbit.hasOwnProperty('name') ); // true

        alert ( Rabbit.getOwnPropertyNames({a: 1, b: 2}));
    }


    function extendedClockFn(){
        class ExtendedClock extends TheClock{
            constructor({template, precision = 1000}){
                super({template});
                this.precision = precision;
            }

            start(){
                this.render();
                this.timer = setInterval(()=>this.render(), this.precision);
            }
        }

        let lowResolutionClock = new ExtendedClock({
            template: 'h:m:s',
        });
    
        lowResolutionClock.start(); 
    }


    function resolveInheritance(){
        class Animal {

            constructor(name) {
              this.name = name;
            }
          
        }
        
        class Rabbit extends Animal {
            constructor(name) {
                super(name);
                this.created = Date.now();
            }
        }
        
        let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
        alert(rabbit.name);
    }
    
})();