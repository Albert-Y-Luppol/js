(()=>{
    'use strict'
    // sumSalariesFunction();

    // countPropInObj();

    // functions

    function countPropInObj(){
        let user = {
            name: 'John',
            age: 30
        };
          
        alert( count(user) ); // 2

        function count(obj) {
            return Object.keys(obj).length;
        }
    }


    function sumSalariesFunction(){
        let salaries = {
            "John": 100,
            "Pete": 300,
            "Mary": 250
        };
          
        alert( sumSalaries(salaries) ); // 650

        function sumSalaries(obj){
            return Object.values(obj).reduce(((sum, s) => sum + s), 0);
        }
    }
})();