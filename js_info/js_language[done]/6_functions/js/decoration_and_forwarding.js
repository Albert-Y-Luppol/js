(()=>{
    'use strict';

    // spyDecorator();

    // delayingDecoraror();

    // debounceDecorator();

    // throttleDecorator();


    


    // functions
    function throttleDecorator(){
        function f(a) {
            console.log(a);
        }
        
        function throttle(fn, ms){
            let avilabel    = true,
                lastArguments = null;

            let func = function(){
                avilabel = false;
                fn.apply(this, lastArguments);
                lastArguments = null;
                setTimeout(()=>{
                    avilabel = true;
                    if(lastArguments) return func();
                    return;
                } , ms);
            };                              // in case use .bind(fn);

            return function(){
                lastArguments = arguments;
                if(avilabel){
                    func();
                    return;
                }
                return;
            };
        }

        // f1000 passes calls to f at maximum once per 1000 ms
        let f1000 = throttle(f, 1000);
        
        f1000(1); // shows 1
        f1000(2); // (throttling, 1000ms not out yet)
        f1000(3); // (throttling, 1000ms not out yet)
        
        // when 1000 ms time out...
        // ...outputs 3, intermediate value 2 was ignored
    }
    
    
    function debounceDecorator(){
        let f = debounce(alert, 1000);

        function debounce(fn, ms){
            let avilability = true;

            return function(){
                if(!avilability) return;
                avilability = false;
                fn.apply(this, arguments);
                setTimeout(()=> avilability = true, ms);
                return;
            };
        }

        f(1); // runs immediately
        f(2); // ignored

        setTimeout( () => f(3), 100); // ignored ( only 100 ms passed )
        setTimeout( () => f(4), 1100); // runs
        setTimeout( () => f(5), 1500); // ignored (less than 1000 ms from the last run)
    }


    function delayingDecoraror(){
        function f(x) {
            alert(x);
        }

        function delay(f, ms){
           return function(){
                setTimeout(()=> f.apply(this, arguments), ms)
            }
        }
          
        // create wrappers
        let f1000 = delay(f, 1000);
        let f1500 = delay(f, 1500);
        
        f1000("test"); // shows "test" after 1000ms
        f1500("test"); // shows "test" after 1500ms
          
    }


    function spyDecorator(){
       
          
        work = spy(work);
        
        work(1, 2); // 3
        work(4, 5); // 9
        
        for (let args of work.calls) {
        alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
        }

        function work(a, b) {
            alert( a + b ); // work is an arbitrary function or method
        }

        function spy(func){
            
            function wrapper (...rest){
                wrapper.calls.push(rest);
                return func.apply(this, rest);
            }

            wrapper.calls = [];

            return wrapper;
        }
    }

})();