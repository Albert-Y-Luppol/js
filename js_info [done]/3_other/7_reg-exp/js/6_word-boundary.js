(function (){
    'use strict';

    findTimeInTheString('Breakfast at 09:00 in the room 123:456.');


    // functions


    function findTimeInTheString(str){
        alert(`Time is: ${str.match(/\b\d\d:\d\d\b/)}`);
    }
})();