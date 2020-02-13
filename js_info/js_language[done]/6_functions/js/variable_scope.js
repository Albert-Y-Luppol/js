(()=>{
    'use strict';
    // counterDependance();

    // sumWithClosures();

    // visibleVariable();

    // filterFunctions();

    // sortByField();

    // armyOfFunctions();

    // functions

    function armyOfFunctions(){
        function makeArmy() {
            let shooters = [];
          
            // let i = 0;
            for (let i = 0; i < 10; i++) {
              let shooter = function() { // shooter function
                alert( i ); // should show its number
              };
              shooters.push(shooter);
            }
          
            return shooters;
        }
          
        let army = makeArmy();
          
        army[0](); // the shooter number 0 shows 10
        army[5](); // and number 5 also outputs 10...
        // ... all shooters show 10 instead of their 0, 1, 2, 3...
        
    }


    function sortByField(){
        let users = [
            { name: "John", age: 20, surname: "Johnson" },
            { name: "Pete", age: 18, surname: "Peterson" },
            { name: "Ann", age: 19, surname: "Hathaway" }
        ];

        alert(JSON.stringify(users.sort(byField('name'))));
        alert(JSON.stringify(users.sort(byField('age'))));

        function byField(field){
            return (a, b) => a[field] > b[field] ? 1 : -1;
        }
    }


    function filterFunctions(){
        let arr = [1, 2, 3, 4, 5, 6, 7];

        alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

        alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

        function inBetween(a, b){
            return (arg) => {
                return arg >= a && arg <= b;
            };
        }

        function inArray(array){
            return (arg) => {
                return array.includes(arg);
            };
        }
    }


    function visibleVariable(){
        let x = 1;

        function func() {
        console.log(x); // ? <unitialized>

        let x = 2;
        }

        func();
    }


    function sumWithClosures(){
        alert(sum(1)(2) == 3);
        alert(sum(5)(-1) == 4);

        function sum(a){
            return function (b){
                return a + b;
            }
        }
    }


    function counterDependance(){

        function makeCounter(){
            let count = 0;

            return function (){ return count++;};
        }

        let counter = makeCounter();

        alert(counter());
        alert(counter());

        let counter2 = makeCounter();

        alert(counter2());
        alert(counter2());
    }
})();