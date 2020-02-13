(()=>{
    'use strict';
    // assignmentFunction();

    findTopSalaryFunction();
    // function

    function findTopSalaryFunction(){
        let salaries = {
            "John": 100,
            "Pete": 300,
            "Mary": 250,
            "Ann": 700
        };

        alert(topSalary(salaries));

        function topSalary(s){
            let top = 0;
            return Object.entries(s).reduce(((topName, [name, size])=> {
                if(size > top) {
                    top = size;
                    return name;
                }
               return topName;
            }), null );
        }
    }


    function assignmentFunction(){
        let user = { name: "John", years: 30 };

        let {name, years : age, isAdmin = false} = user;

        alert( name ); // John
        alert( age ); // 30
        alert( isAdmin ); // false
    }
})();