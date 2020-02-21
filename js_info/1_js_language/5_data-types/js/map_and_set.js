(function(){
    'use strict'

    // filterUnique();

    // anagramCleaner();

    // iterableKeys();

    // funcs

    function iterableKeys(){
        let map = new Map();

        map.set("name", "John");

        let keys = Array.from(map.keys());

        // Error: keys.push is not a function
        keys.push("more");
        alert(keys);
    }


    function anagramCleaner(){

        let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

        alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

        function aclean(array){
            let m = new Map();
            for (let a of array){
                let sorted = a.toLowerCase().split('').sort().join('');
                m.set(sorted, a);
            }
            return Array.from(m.values());
        }
    }


    function filterUnique(){
        function unique(arr) {
            return Array.from(new Set(arr));
        }
          
        let values = ["Hare", "Krishna", "Hare", "Krishna",
            "Krishna", "Krishna", "Hare", "Hare", ":-O"
            ];
          
        alert( unique(values) ); // Hare, Krishna, :-O
    }
})();