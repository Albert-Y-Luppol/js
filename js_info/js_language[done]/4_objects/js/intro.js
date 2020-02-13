(function (){
    'use strict';
    // hello_object();
    // checkForEmptyness()
    // count_sallaries()
    // miltiplyNumBy2();
})();


function hello_object() {
    //     Write the code, one line for each action:

    //     Create an empty object user.
    //     Add the property name with the value John.
    //     Add the property surname with the value Smith.
    //     Change the value of the name to Pete.
    //     Remove the property name from the object.

    let user = {};
    user['name'] = 'John';
    user.surname = 'Smith';
    user.name = 'Pete';
    delete user.name;
    console.log(user);
}


function checkForEmptyness() {
    
    let schedule = {};
    alert( isEmpty(schedule) ); // true
    schedule["8:30"] = "get up";
    alert( isEmpty(schedule) ); // false

    function isEmpty(obj) {
        for (let key in obj) {
           return false;
        }
        return true;
    }
}

function count_sallaries() {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
    document.writeln(`The summ of project salaries = $${sumSalaries(salaries)}.`);
    function sumSalaries(salaries) {
        let sum = 0;

        for (let name in salaries) {
            sum+=salaries[name];
        }
        return sum;
    }
    


}


function miltiplyNumBy2 () {
    // before the call
    let menu = {
        width: 200,
        height: '+300',
        title: "My menu"
    };
    
    console.log(multiplyNumeric(menu));
    
    // after the call
    // menu = {
    //     width: 400,
    //     height: 600,
    //     title: "My menu"
    // };

    function multiplyNumeric (obj) {
        for (let key in obj)
        {
            if ( typeof (obj[key]) == "number" ) {
                obj[key] *= 2;
            }
        }
        return (obj);
    }
}