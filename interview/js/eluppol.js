(function (){
    'use strict';

    compareStringsFn();


    // functions

    function compareStringsFn(){
        let a = 'Alber*t**ete',
            b = 'Albert**********Alber*te';

        alert(compareStrings(a,b) ? 'Equal!': 'Not Equal!');

        function compareStrings(firstString = '', secondString = ''){
            // console.log(a);
            let counterS1   = firstString.length - 1,
                counterS2   = secondString.length - 1,
                stepS1      = 0,
                stepS2      = 0;
                
            while (counterS2 >= 0 || counterS1 >= 0){
                // console.log('a')
                while(firstString[counterS1] == '*' || stepS1 != 0){
                    if(firstString[counterS1] == '*') {
                        ++stepS1;
                    } else {
                        --stepS1;
                    }
                    --counterS1;
                }
                while(secondString[counterS2] == '*' || stepS2 != 0){
                    if(secondString[counterS2] == '*') {
                        ++stepS2;
                        // console.log(stepS2);
                    } else {
                        --stepS2;
                    }
                    --counterS2;
                }

                if(firstString[counterS1] != secondString[counterS2]) return false;
                
                --counterS1;
                --counterS2;
            }

            return true;
        }
    }
})();