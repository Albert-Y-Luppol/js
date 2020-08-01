(function (){
    'use strict';

    addToSelect();


    // functions


    function addToSelect(){

        //task: add <option value="classic">Classic</option>

        addHTML();

        showSelected();

        addSelectedOption();


        // functions

        function showSelected(){
            let select = document.getElementById('genres');

            alert(select.value);
        }


        function addSelectedOption(){
            let option = new Option('Classic', 'classic', true, true);

            let select = document.getElementById('genres');

            select.append(option);
        }


        function addHTML(){
            document.body.insertAdjacentHTML('afterbegin', `
                <select id="genres">
                    <option value="rock">Rock</option>
                    <option value="blues" selected>Blues</option>
                </select>
            `);
        }

    }
})();