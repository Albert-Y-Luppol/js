(function (){
    'use strict';

    pseudoRandomGenerator();

    
    // functions


    function pseudoRandomGenerator(){
        let generator = pseudoRandom(1);

        alert(generator.next().value); // 16807
        alert(generator.next().value); // 282475249
        alert(generator.next().value); // 1622650073

        alert([...generator]);


        function* pseudoRandom(a){
            let seed = a;
            while(seed < 2000000000){
                seed = seed * 16807 % 2147483647;
                yield seed;
            }
        }
    }
})();