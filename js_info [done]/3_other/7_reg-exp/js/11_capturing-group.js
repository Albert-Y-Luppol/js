(()=>{
    'use strict';

    // checkMACAddress();

    // findColor();

    // findAllNumbers();

    parseMathExpr();


    // functions

    function parseMathExpr(){

        let [a, op, b] = parse("1.2 * 3.4");

        alert(a); // 1.2
        alert(op); // *
        alert(b); // 3.4


        function parse(str){
            let regexp = /(?:\s*)?(-?\d+(?:\.\d+)?)(?:\s*)?([\*\+\-\/])(?:\s*)?(-?\d+(?:\.\d+)?)(?:\s*)?/;

            let res =  str.match(regexp);

            if (!res) return[];

            res.shift();

            return res;
        }

    }


    function findAllNumbers(){
        let regexp = /-?\d+(\.+\d+)?/g;

        let str = "-1.5 0 2 -123.4.";

        alert( str.match(regexp) ); // -1.5, 0, 2, -123.4
    }


    function findColor(){
        let regexp = /#([0-9a-f]{3}){1,2}\b/gi;

        let str = "color: #3f3; background-color: #AA00ef; and: #abcd";

        alert( str.match(regexp) ); // #3f3 #AA00ef
    }


    function checkMACAddress(){
        let regexp = /^(?:[0-9a-f]{2}:){5}[0-9a-f]{2}$/gi;

        alert( regexp.test(' 01:32:54:67:89:AB ') ); // true

        alert( regexp.test('0132546789AB') ); // false (no colons)

        alert( regexp.test('01:32:54:67:89') ); // false (5 numbers, must be 6)

        alert( regexp.test('01:32:54:67:89:ZZ') ) // false (ZZ ad the end)
    }

})();