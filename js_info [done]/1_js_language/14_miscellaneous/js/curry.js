(()=>{
    'use strict';

    // advancedCurrying();


    // functions


    function advancedCurrying(){

        function curry(fn){
            return function currying(...args){
                if (args.length >= fn.length){
                    return fn.apply(this, args);
                } else {
                    return function continueCurry (...nextArgs){
                        return currying.apply(this, args.concat(nextArgs));
                    }
                }
            }
        }

        function sum(a, b ,c ,d){
            return a + b + c + d;
        }

        let currySum = curry(sum);

        alert(currySum(1,2,3,4));
        alert(currySum(1)(2,3,4));
        alert(currySum(1,2)(3)(4));
        alert(currySum(1)(2)(3)(4));
    }
})();