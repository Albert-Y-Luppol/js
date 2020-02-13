(function (){
    'use strict';

    // throwErrorOnUndefined();


    // implementArrayAccessWithNegative();


    // makeObservableFn();


    // functions

    function makeObservableFn(){
        function makeObservable(target) {
            /* your code */
            target.observe = (fn)=>{
                // alert(fn);
                target._onSet = fn;
            };
            return new Proxy(target,{
                get(){
                    if(arguments[1].startsWith('_')){
                        alert("Access denied!");
                    } else {
                        let value = arguments[0][arguments[1]];
                        return typeof value == 'function' ? value.bind(arguments[0]) : value;
                    }
                },
                set(target, property, value, receiver){
                    target._onSet(property, value);
                    let result = Reflect.set(target, property, value, receiver);
                    return result;
                }
            });
        }
        
        let user = {};
        user = makeObservable(user);
        
        user.observe((key, value) => {
        alert(`SET ${key}=${value}`);
        });
        
        user.name = "John"; // alerts: SET name=John
    }


    function implementArrayAccessWithNegative(){
        let array = [1, 2, 3];

        array = new Proxy(array, {
        /* your code */
            get(target, property, receiver){
                if(property < 0){
                    property = target.length + (+property);
                }
                return Reflect.get(target, property, receiver);
            },

            set(target, property, value, receiver){
                if(property < 0){
                    property = target.length + (+property);
                }
                // alert(property + " : " + value);
                Reflect.set(target, property, value, receiver);
                // alert(Reflect.get(target, property, receiver));
                return true;
            }
        });

        alert( array[-1] ); // 3
        alert( array[-2] ); // 2

        // Other array functionality should be kept "as is"
        array[-1] = 5;
        alert(array[-1]);
    }


    function throwErrorOnUndefined(){
        let user = {
            name: "John"
        };
        
        function wrap(target) {
            return new Proxy(target, {
                get (target, property, receiver){
                    if(property in target){
                        return Reflect.get(...arguments);
                    }
                    throw new ReferenceError(`Property doesn't exist "${property}"`);
                }
            });
        }
        
        user = wrap(user);
        
        alert(user.name); // John
        alert(user.age); // ReferenceError: Property doesn't exist "age"
    }
})();