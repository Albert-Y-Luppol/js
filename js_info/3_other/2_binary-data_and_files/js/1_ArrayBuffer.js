(function (){
    'use strict';

    //Task: Given an array of Uint8Array, write a function concat(arrays) that returns a concatenation of them into a single array.

    function concat(arrays) {

        // return concatFirst(arrays);

        return concatSecond(arrays);


        // functions

        function concatSecond(arrays){
            let totalLength = arrays.reduce((sum, el)=> sum + el.length, 0),
                concat = new Uint8Array(totalLength),
                position = 0;

            arrays.forEach(arr=>{
                concat.set(arr, position);
                position += arr.length;
            });

            return concat;
        }


        function concatFirst(arrays){
            let buffer = new ArrayBuffer(countBytes(arrays));

            let concat = new Uint8Array(buffer);

            copyData(concat, arrays);

            return concat;
            
            // functions

            function copyData(targetArr, arrs){
                let offset = 0;

                arrs.forEach(el=>{
                    targetArr.set(el, offset);
                    offset += el.byteLength;
                });
            }


            function countBytes(arr){
                let bytes = 0;

                arr.forEach(el=>{
                    bytes += el.byteLength;
                });

                return bytes;
            }
        }
    }
    
    let chunks = [
    new Uint8Array([0, 1, 2]),
    new Uint8Array([3, 4, 5]),
    new Uint8Array([6, 7, 8])
    ];
    
    console.log(Array.from(concat(chunks))); // 0, 1, 2, 3, 4, 5, 6, 7, 8
    
    console.log(concat(chunks).constructor.name); // Uint8Array

})();