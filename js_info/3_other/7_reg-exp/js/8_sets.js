(()=>{
    'use strict';

    // checkExclusion();

    findTime();


    // functions


    function findTime(){
        let regexp = new RegExp('\\d\\d[:-]\\d\\d', 'g');
        alert( "Breakfast at 09:00. Dinner at 21-30".match(regexp) ); // 09:00, 21-30
    }


    function checkExclusion(){
        let strS = 'JavaScript',
            strJ = 'Java';

        alert(strJ.match(/Java[^script]/));

        alert(strS.match(/Java[^script]/));
    }
})();