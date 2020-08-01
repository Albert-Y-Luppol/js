(()=>{
    'use strict';

    // findEuro();

    // findPosInt();

    insertH();


    // functions

    function insertH(){
        let regexp = /(?<=<body[^>]*>)/i;

        let str = `
            <html>
            <body style="height: 200px">
            ...
            </body>
            </html>
        `;

        str = str.replace(regexp, `<h1>Hello</h1>`);

        alert(str);
    }


    function findPosInt(){
        let regexp = /(?<![\-\d\.])\d+((?=\s)|(?<=\d$))/g;

        let str = "0 12 -5 123 -18 -12.23 23.23 7";

        alert( str.match(regexp) ); // 0, 12, 123
    }


    function findEuro(){
        let str = "1 turkey costs 30€";

        alert( str.match(/\d+(?=€)/) ); // 30, the number 1 is ignored, as it's not followed by €

        alert(str.match(/\d+€/u));
    }
})();