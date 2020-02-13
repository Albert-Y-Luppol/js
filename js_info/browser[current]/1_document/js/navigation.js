(()=>{
    'use strict';
    
    insertHTML();

    findElements();

    // functions

    function findElements(){

        // The table with id="age-table".

        let table = document.getElementById('age-table');

        table.style.backgroundColor = 'yellow';


        // All label elements inside that table (there should be 3 of them).

        let labels = table.querySelectorAll('label');

        alert(labels.length);


        // The first td in that table (with the word “Age”).

        let firstTd = table.querySelector('td');

        firstTd.style.backgroundColor = 'green';


        // The form with name="search".

        let byName = document.getElementsByName('search');

        byName.forEach(el=>el.style.backgroundColor = 'orange');    


        // The first input in that form.

        let firstInput = byName[0].querySelector('input');

        firstInput.style.backgroundColor = "indigo";


        // The last input in that form.

        let lastInput = byName[0].querySelector('form > input:last-child');

        lastInput.style.backgroundColor = 'grey';

    }


    function insertHTML(){

        document.body.insertAdjacentHTML('afterbegin', `
            <form name="search">
                <label>Search the site:
                <input type="text" name="search">
                </label>
                <input type="submit" value="Search!">
            </form>
        
            <hr>
        
            <form name="search-person">
                Search the visitors:
                <table id="age-table">
                <tr>
                    <td>Age:</td>
                    <td id="age-list">
                    <label>
                        <input type="radio" name="age" value="young">less than 18</label>
                    <label>
                        <input type="radio" name="age" value="mature">18-50</label>
                    <label>
                        <input type="radio" name="age" value="senior">more than 50</label>
                    </td>
                </tr>
        
                <tr>
                    <td>Additionally:</td>
                    <td>
                    <input type="text" name="info[0]">
                    <input type="text" name="info[1]">
                    <input type="text" name="info[2]">
                    </td>
                </tr>
        
                </table>
        
                <input type="submit" value="Search!">
            </form>
        `);
    }
})();