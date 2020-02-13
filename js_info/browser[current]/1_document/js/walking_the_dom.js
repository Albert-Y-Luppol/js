(function (){
    'use strict';
   
    // childrenDOM();

    // siblingQuestion();

    // selectDiagonal();

    // functions

    function selectDiagonal(){
        insertElementInDOM();

        let table = document.body.firstElementChild;

        for (let i = 0; i < table.rows.length; i++){
            let td = table.rows[i].cells[i];
            td.style.backgroundColor = 'red';
        }


        function insertElementInDOM(){
            document.body.innerHTML = `
            <table>
                <tr>
                <td>1:1</td>
                <td>2:1</td>
                <td>3:1</td>
                <td>4:1</td>
                <td>5:1</td>
                </tr>
                <tr>
                <td>1:2</td>
                <td>2:2</td>
                <td>3:2</td>
                <td>4:2</td>
                <td>5:2</td>
                </tr>
                <tr>
                <td>1:3</td>
                <td>2:3</td>
                <td>3:3</td>
                <td>4:3</td>
                <td>5:3</td>
                </tr>
                <tr>
                <td>1:4</td>
                <td>2:4</td>
                <td>3:4</td>
                <td>4:4</td>
                <td>5:4</td>
                </tr>
                <tr>
                <td>1:5</td>
                <td>2:5</td>
                <td>3:5</td>
                <td>4:5</td>
                <td>5:5</td>
                </tr>
            </table>
            `;
        }
    }


    function siblingQuestion(){
        insertElementInDOM();
        alert('last = ' + document.body.children[1].lastChild.nextSibling);
        alert('first = ' + document.body.children[1].children[0].previousSiblingSibling);
        function insertElementInDOM(){
            document.body.innerHTML = `
            <div>Users:</div>
            <ul>
                <li>John</li>
                <li>Pete</li>
            </ul>`;
        }
    }


    function childrenDOM(){
        insertElementInDOM();
        let child = Array.from(document.body.children);
        child[0].style.color = "green";
        child[1].firstElementChild.style.color = "yellow";
        child[1].children[1].style.color = 'grey';
        function insertElementInDOM(){
            document.body.innerHTML = `
            <div>Users:</div>
            <ul>
                <li>John</li>
                <li>Pete</li>
            </ul>`;
        }
    }

})();