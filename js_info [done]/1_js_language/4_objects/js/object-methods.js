(function (){
    'use strict';

    // pitFall();

    // valueOfThis();

    // loopObject();

    // calculator();

    chaning ();

    function chaning () {

        let ladder = {
            step: 0,
            up() {
              this.step++;
              return this;
            },
            down() {
              this.step--;
              return this;
            },
            showStep: function() { // shows the current step
              alert( this.step );
              return this;
            }
        };

        // ladder.up();
        // ladder.up();
        // ladder.down();
        // ladder.showStep(); // 1

        ladder
            .up()
            .up()
            .down()
            .showStep(); // 1
    }


    function calculator () {
        let calculator = {
            a: null,
            b: null,
            read() {
                this.a = +prompt("Enter first number", 0);
                this.b = +prompt("Enter second number", 0);
            },
            sum() {
                return this.a + this.b;
            },
            mul(){
                return this.a * this.b;
            }

          };
          
          calculator.read();
          alert( calculator.sum() );
          alert( calculator.mul() );
    }

    function pitFall(){
        let user = {
            name: "John",
            go: function() { alert(this.name) }
          };
          
          user.go();
    }
    
    
    function valueOfThis() {
        let obj, method;
    
        obj = {
        go: function() { alert(this); }
        };
    
        obj.go();               // (1) [object Object]
    
        (obj.go)();             // (2) [object Object]
    
        (method = obj.go.bind(obj))();    // (3) undefined

        method();
    
        (obj.go) || (obj.stop)(); // (4) undefined
    }

    function loopObject() {

       
          
        let user = makeUser();
          
        alert( user.ref() ); // What's the result?


        function makeUser() {
            return {
              name: "John",
              ref () {
                  return this;
                }
            };
        };
    }

})();
