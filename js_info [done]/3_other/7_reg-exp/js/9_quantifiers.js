(()=>{
    'use strict';

    // findEllipsis();

    findColor();


    // functions

    function findColor(){
        let regexp = /#[0-9A-F]{6}\b/gi;

        let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";

        alert( str.match(regexp) )  // #121212,#AA00ef
    }


    function findEllipsis(){
        let regexp = /\.{3,}/g;
        alert( "Hello!... How goes?.....".match(regexp) ); // ..., .....
    }
})();