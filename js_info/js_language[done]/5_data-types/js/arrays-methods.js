(function () {
    'use strict'

    // transateCapitalize();

    // getArrayOfElementsBetween();

    // filterRangeInPlaceFunc();

    // sortInDecreasingOrder();

    // sortedCopy();

    // calculatorFunc();

    // userToNames();

    // mapObjects();

    // sortByAgeFunc();

    // shuffleArray();

    // getAvarageAgeFunc();

    // filterUnique();

    // groupByIdFunc();

    // funcs


    function groupByIdFunc(){
        let users = [
            {id: 'john', name: "John Smith", age: 20},
            {id: 'ann', name: "Ann Smith", age: 24},
            {id: 'pete', name: "Pete Peterson", age: 31},
          ];
          
          let usersById = groupById(users);
          console.log(usersById);
          /*
          // after the call we have:
          
          usersById = {
            john: {id: 'john', name: "John Smith", age: 20}
            ann: {id: 'ann', name: "Ann Smith", age: 24},
            pete: {id: 'pete', name: "Pete Peterson", age: 31},
          }
          */

          function groupById(array){
              return array.reduce((obj, user) => {
                  obj[user.id] = user;
                  return obj;
              }, {});
          }
    }


    function filterUnique(){
        function unique(arr) {
            let array = [];
            return arr.filter((a,i) => !(arr.includes(a, i+1)));
        }
          
        let strings = ["Hare", "Krishna", "Hare", "Krishna",
            "Krishna", "Krishna", "Hare", "Hare", ":-O"
        ];
          
        alert( unique(strings) ); // Hare, Krishna, :-O
        // alert(strings);
    }


    function getAvarageAgeFunc(){
        let john = { name: "John", age: 25 };
        let pete = { name: "Pete", age: 30 };
        let mary = { name: "Mary", age: 29 };

        let arr = [ john, pete, mary ];

        alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

        function getAverageAge(arr){
            return Math.round(arr.reduce(((sum, current) => sum + current.age), 0)/arr.length);
        }
    }


    function shuffleArray(){
        let arr = [1, 2, 3];
        alert(arr);
        alert(shuffle(arr));
        // arr = [3, 2, 1]

        alert(shuffle(arr));
        // arr = [2, 1, 3]

        alert(shuffle(arr));
        // arr = [3, 1, 2]
        // ...

        function shuffle(arr){
            for(let i = 0; i < arr.length; i++){
                let a = arr.splice(generateNumToThree(), 1);
                arr.splice(generateNumToThree(),0, a);
            }
            return arr;
        }
        function generateNumToThree(){
            return Math.round(Math.random()*2.9999 + 0.5)-1;
        }
    }


    function sortByAgeFunc(){
        let john = { name: "John", age: 25 };
        let pete = { name: "Pete", age: 30 };
        let mary = { name: "Mary", age: 28 };

        let arr = [ pete, john, mary ];

        sortByAge(arr);

        // now: [john, mary, pete]
        alert(arr[0].name); // John
        alert(arr[1].name); // Mary
        alert(arr[2].name); // Pete

        function sortByAge(arr){
            arr.sort((a,b) => a.age - b.age);
        }
    }


    function mapObjects (){
        let john = { name: "John", surname: "Smith", id: 1 };
        let pete = { name: "Pete", surname: "Hunt", id: 2 };
        let mary = { name: "Mary", surname: "Key", id: 3 };

        let users = [ john, pete, mary ];

        let usersMapped = users.map(item => ({fullName: item.name + ' ' + item.surname, id: item.id}));

        /*
        usersMapped = [
        { fullName: "John Smith", id: 1 },
        { fullName: "Pete Hunt", id: 2 },
        { fullName: "Mary Key", id: 3 }
        ]
        */

        alert( usersMapped[0].id ) // 1
        alert( usersMapped[0].fullName ) // John Smith
    }


    function userToNames(){
        let john = { name: "John", age: 25 };
        let pete = { name: "Pete", age: 30 };
        let mary = { name: "Mary", age: 28 };

        let users = [ john, pete, mary ];

        let names = users.map(item => item.name);

        alert( names ); // John, Pete, Mary
    }


    function calculatorFunc(){

        let calc = new Calculator;

        alert( calc.calculate("3 + 7") ); // 10
        let powerCalc = new Calculator;
        
        powerCalc.addMethod("*", (a, b) => a * b);
        powerCalc.addMethod("/", (a, b) => a / b);
        powerCalc.addMethod("**", (a, b) => a ** b);

        let result = powerCalc.calculate("2 ** 3");
        alert( result ); // 8


        function Calculator(){
            this.calculate = (string) => {
                let array =  string.split(' ');
                for(let a of array){
                    if(!Boolean(a)){
                        throw 'Bad Input';
                    }
                }
                let pointer = array[1];
                let a = +array[0];
                let b = +array[2];
                return this.methods[pointer](a, b);
            };
            this.methods = {
                '+': (a,b) => a + b,
                '-': (a,b) => a - b
            };
            
            this.addMethod = (p, func) => this.methods[p] = func;

        }
    }

    
    function sortedCopy(){
        let arr = ["HTML", "JavaScript", "CSS"];

        let sorted = copySorted(arr);

        alert( sorted ); // CSS, HTML, JavaScript
        alert( arr ); // HTML, JavaScript, CSS (no changes)

        function copySorted(arr){
            return arr.slice().sort();
        }
    }


    function sortInDecreasingOrder(){
        let arr = [5, 2, 1, -10, 8];

        arr.sort((a,b) => b-a);

        alert( arr ); // 8, 5, 2, 1, -10
    }


    function filterRangeInPlaceFunc(){
        let arr = [5, 3, 8, 1];

        filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

        alert( arr ); // [3, 1]

        function filterRangeInPlace(arr, from, to){
            for(let i = 0; i < arr.length ; i++) {
                if(arr[i] < from || arr[i] >= to){
                    arr.splice(i, 1);
                    i--;
                }
            }
        }
    }


    function getArrayOfElementsBetween(){
        let arr = [5, 3, 8, 1];

        let filtered = filterRange(arr, 1, 4);

        alert( filtered ); // 3,1 (matching values)

        alert( arr ); // 5,3,8,1 (not modified)

        function filterRange(array, from, to){
            //add brackets around the expression for better readability
            return array.filter(item => (item >= from && item < to));
        }
    }


    function transateCapitalize(){
        alert(camelize("background-color") == 'backgroundColor');
        alert(camelize("list-style-image") == 'listStyleImage');
        alert(camelize("-webkit-transition") == 'WebkitTransition');
        
        function camelize(dashString){
            return dashString
            .split('-')
            .map( (w, i) => i == 0 ? w : w.replace(w[0], w[0].toUpperCase()))
            .join('');
        }
    }
})();