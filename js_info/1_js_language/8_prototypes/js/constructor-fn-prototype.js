(()=>{

    'use strict';

    // answerTest();

    function answerTest(){

        function Rabbit() {}
        Rabbit.prototype = {
        eats: true
        };

        let rabbit = new Rabbit();

        delete Rabbit.prototype.eats;

        alert( rabbit.eats ); // true
    }

    
})();