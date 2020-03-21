(()=>{
    'use strict';

    // findAllComents();

    findTags();

    // functions


    function findTags(){
        let regexp = /<[^<>]+>/g;

        let str = '<> <a href="/"> <input type="radio" checked> <a href="/"<a href="/">> <b>';

        alert( str.match(regexp) ); // '<a href="/">', '<input type="radio" checked>', '<b>'
    }


    function findAllComents(){
        let regexp = /<!\-\-.*?\-\->/gs;

        let str = `... <!-- My -- comment
        test --> ..  <!----> ..
        `;

        alert( str.match(regexp) ); // '<!-- My -- comment \n test -->', '<!---->'
    }
})();