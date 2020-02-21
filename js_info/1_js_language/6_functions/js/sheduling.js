(function (){
    'use strict';
    
    printNumberFromToWithSetTimeout(prompt('From?'), prompt('To?'));

    printNumberFromToWithSetInterval(prompt('From?'), prompt('To?'));

    //funcs


    function printNumberFromToWithSetInterval(from, to){
        let fromToTimer = setInterval(() => {
            document.querySelector('#printNumberFromToWithSetInterval').insertAdjacentText('beforeend', " " + from);
            from++;
            if (from > to) clearInterval(fromToTimer);
        }, 1000);
    }
   
    function printNumberFromToWithSetTimeout(from, to){
        setTimeout(function run() {
            if(from > to) {
                alert ('Done!');
            } else {
                document.querySelector('#printNumberFromToWithSetTimeout').insertAdjacentText('beforeend', " " + from);
                from ++;
                setTimeout(run, 1000);
            }
        }, 1000);
    }
})();