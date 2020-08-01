(()=>{

    'use strict';

    // addMethodToFns();

    // addWrapperToDefer();

    // functions

    function addWrapperToDefer(){
        function f(a, b) {
            alert( a + b );
        }

        Function.prototype.defer = function(ms){

            let f = this;
            // console.log(f);
            // console.log(this);
            return function (){
            //     setTimeout(()=>{
            //         console.log(this);
            //         return this.apply((function (){
            //             alert(this);
            //             return this;
            //         })(), arguments)
            //     }, ms); // apply not working in case of obj. it returns method name, not a result(.bind reqired)
            // }.bind(this);
                setTimeout(()=>f.apply(this, arguments), ms);
            }
        };
        
        f.defer(1000)(1, 2); // shows 3 after 1 second

        let user = {
            name: "John",
            sayHi() {
              alert(this.name);
            }
        }
        
        

        user.sayHi = user.sayHi.defer(1000);
        
        user.sayHi();
    }


    function addMethodToFns(){

        Function.prototype.defer = function (ms){
            setTimeout(this, ms);
        };

        function f() {
            alert("Hello!");
        }
        
        f.defer(1000); // shows "Hello!" after 1 second
    }
})();