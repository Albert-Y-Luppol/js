(()=>{
    'use strict';

    // rest

    // rest();


    // spread

    // spread();


    // functions

    function spread(){
        let arr = [1, 2, 3, 4,5 ,6,7,8,9,10,5,4,1,34,54,6,76,4,3];

        alert(Math.max(12, ...arr, 44));
    }


    function rest(){

        alert(sum(1, 2));

        alert(sum(1, 2, 3));
    
        alert(sum(1, 2, 3, 4));
    
        function sum(...arg){
            return arg.reduce((sum, a)=> sum + a, 0);
        }
    }


})();