(()=>{
    'use strict';

    // setAndDecreaseCounter();

    // sumArbitraryBrackets();

    // functions


    function sumArbitraryBrackets(){

        alert(sum(1)(2)); // 1 + 2
        alert(sum(1)(2)(3)); // 1 + 2 + 3
        alert(sum(5)(-1)(2) == 6);
        alert(sum(6)(-1)(-2)(-3) == 0);
        alert(sum(0)(1)(2)(3)(4)(5) == 15);

        function sum(a){
            sum.res = a;

            function sumB(b){
                sum.res += b;
                return sumB;
            }
            sumB[Symbol.toPrimitive] = ()=> sum.res;

            return sumB;
        }
    }


    function setAndDecreaseCounter(){
        function makeCounter() {
            let count = 0;
            
            function counter(){
                return count++;
            }

            counter.set = (n = 0) => count = n;

            counter.decrease = ()=>--count;

            return counter;
        }
          
        let counter = makeCounter();
        
        alert( counter() ); // 0
        alert( counter() ); // 1
        
        counter.set(10); // set the new count
        
        alert( counter() ); // 10
        
        counter.decrease(); // decrease the count by 1
        
        alert( counter() ); // 10 (instead of 11)
    }
})();