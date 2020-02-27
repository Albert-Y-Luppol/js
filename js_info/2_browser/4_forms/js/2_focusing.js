(()=>{
    'use strict';

    // editableDiv();

    // editableTable();

    moveByArrows();


    // functions

    function moveByArrows(){
        insertHTMLAndCSS();

        handleEvents();


        function handleEvents(){

            document.addEventListener('focusin', setOnTop);
        }


        function setOnTop(e){
            document.removeEventListener('focusin', setOnTop);

            setAbsolutePosition(e.target);

            document.addEventListener('keydown', enableMoves);

            e.target.addEventListener('focusout', renewHandlers);

        }


        function renewHandlers(e){
            e.target.removeEventListener('keydown', enableMoves);
            e.target.removeEventListener('focusout', renewHandlers);

            handleEvents();
        }


        function setAbsolutePosition(el){

            let coords = {  x: pageXOffset + el.getBoundingClientRect().left,
                             y: pageYOffset + el.getBoundingClientRect().top};
            
            document.body.append(el);

            el.style.cssText = `
                position: absolute;
                left: ${coords.x}px;
                top: ${coords.y}px;
            `;

            el.focus();
        }

        
        function enableMoves(e){
            switch (e.code){

                case 'ArrowLeft': 
                    e.target.style.left = +e.target.style.left.slice(0, -2) - 10 + 'px';
                    break; //left

                case 'ArrowUp': 
                    e.target.style.top = +e.target.style.top.slice(0, -2) - 10 + 'px';
                    break; //up

                case 'ArrowRight': 
                    e.target.style.left = +e.target.style.left.slice(0, -2) + 10 + 'px';
                    break; //right

                case 'ArrowDown': 
                    e.target.style.top = +e.target.style.top.slice(0, -2) + 10 + 'px';
                    break; //down
            }
        }


        function insertHTMLAndCSS(){
            document.body.insertAdjacentHTML('afterbegin', `
            <p>Click on the mouse and move it with arrow keys.</p>

<pre id="mouse" tabindex="0">
 _   _
(q\\_/p)
 /. .\\
=\\_t_/=   __
 /   \\   (
((   ))   )
/\\) (/\\  /
\\  Y  /-'
 nn^nn
</pre>
            `);

            document.head.insertAdjacentHTML('beforeend', `
                <style>
                #mouse {
                    display: inline-block;
                    cursor: pointer;
                    margin: 0;
                }
            
                #mouse:focus {
                    outline: 1px dashed black;
                }
                </style>
            `);
        }
    }


    function editableTable(){

        // Note: <textarea> should have class="edit"

        insertHTMLAndCSS();

        let table = document.getElementById('bagua-table'),
            flag = false,
            textarea = document.createElement('textarea'),
            tdInfo = '';

        let btnBox = document.createElement('div');

        btnBox.className = "btn-box";

        btnBox.innerHTML = `
            <button id='ok' class="btn-box__btn">OK</button>
            <button id='cancel'  class="btn-box__btn">CANCEL</button>
        `;

        textarea.className = 'edit';

        addEventListeners();


        // functions

        function saveChanges(td){

            tdInfo = '';

            td.innerHTML = textarea.value;

            flag = false;

            td.style.cssText = ``;
            textarea.style.cssText = ``;

        }


        function cancelChanges(td){

            td.innerHTML = tdInfo;

            tdInfo = "";

            td.style.cssText = ``;
            textarea.style.cssText = ``;

            flag = false;

        }


        function addEventListeners(){

            table.addEventListener('click', (e)=>{

                if(flag){

                    let ok = document.getElementById('ok'),
                        cancel = document.getElementById('cancel');

                    switch (e.target){
                        case ok: saveChanges(e.target.closest('td'));
                            break;
                        case cancel: cancelChanges(e.target.closest('td'));
                            break;
                    }
                } else {

                    if( !e.target.closest('td') ||
                        e.target.matches('a') ||
                        e.target.matches('button')) return;

                    let td = e.target.closest('td');
                    
                    tdInfo = td.innerHTML;

                    textarea.value = td.innerHTML;

                    td.innerHTML = '';

                    td.append(textarea);

                    td.append(btnBox);

                    // alert(td.clientHeight);

                    textarea.style.cssText = `
                        height: ${td.clientHeight - 40}px;
                    `;

                    td.style.cssText = `
                        padding: 0px;
                    `;

                    flag = true;
                }
            });
        }


        function insertHTMLAndCSS(){
            document.body.insertAdjacentHTML('afterbegin', `
                <p>Click on a table cell to edit it. Press OK or CANCEL when you finish.</p>

                <table id="bagua-table">
                <tr>
                    <th colspan="3"><em>Bagua</em> Chart: Direction, Element, Color, Meaning</th>
                </tr>
                <tr>
                    <td class="nw"><strong>Northwest</strong>
                    <br>Metal
                    <br>Silver
                    <br>Elders
                    </td>
                    <td class="n"><strong>North</strong>
                    <br>Water
                    <br>Blue
                    <br>Change
                    </td>
                    <td class="ne"><strong>Northeast</strong>
                    <br>Earth
                    <br>Yellow
                    <br>Direction
                    </td>
                </tr>
                <tr>
                    <td class="w"><strong>West</strong>
                    <br>Metal
                    <br>Gold
                    <br>Youth
                    </td>
                    <td class="c"><strong>Center</strong>
                    <br>All
                    <br>Purple
                    <br>Harmony
                    </td>
                    <td class="e"><strong>East</strong>
                    <br>Wood
                    <br>Blue
                    <br>Future
                    </td>
                </tr>
                <tr>
                    <td class="sw"><strong>Southwest</strong>
                    <br>Earth
                    <br>Brown
                    <br>Tranquility
                    </td>
                    <td class="s"><strong>South</strong>
                    <br>Fire
                    <br>Orange
                    <br>Fame
                    </td>
                    <td class="se"><strong>Southeast</strong>
                    <br>Wood
                    <br>Green
                    <br>Romance
                    </td>
                </tr>
            
                </table>
            `);

            document.head.insertAdjacentHTML('beforeend', `
                <style>
                    /* common styles for the table, no need to modify these */

                    th {
                    text-align: center;
                    font-weight: bold;
                    }
                    
                    td {
                    width: 150px;
                    white-space: nowrap;
                    text-align: center;
                    vertical-align: middle;
                    padding: 10px;
                    }
                    
                    .nw {
                    background-color: #999;
                    }
                    
                    .n {
                    background-color: #03f;
                    color: #fff;
                    }
                    
                    .ne {
                    background-color: #ff6;
                    }
                    
                    .w {
                    background-color: #ff0;
                    }
                    
                    .c {
                    background-color: #60c;
                    color: #fff;
                    }
                    
                    .e {
                    background-color: #09f;
                    color: #fff;
                    }
                    
                    .sw {
                    background-color: #963;
                    color: #fff;
                    }
                    
                    .s {
                    background-color: #f60;
                    color: #fff;
                    }
                    
                    .se {
                    background-color: #0c3;
                    color: #fff;
                    }

                    .edit {
                        width: 100%;
                        min-height: 60px;
                    }
                    
                    .btn-box {
                        width: 100%;
                        display: flex;
                        justify-content: space-evenly;
                        padding: 5px;
                    }
                </style>
            `);
        }
    }


    function editableDiv(){

        // Note: <textarea> should have class="edit"

        insertHTMLAndCSS();

        let div = document.getElementById('view'),
            textarea = document.createElement('textarea');

        textarea.className = 'edit';

        div.tabIndex = 0;

        addEventListeners();


        // functions

        function addEventListeners(){
            document.addEventListener('focusin', (e)=>{

                if( !e.target.closest('#view') ||
                    e.target.matches('a') ||
                    e.target.matches('button')) return;

                textarea.value = div.innerHTML;

                div.after(textarea);

                div.remove();

            });
            document.addEventListener('blur', (e)=>{

                if(!e.target.closest('textarea.edit')) return;

                div.innerHTML = textarea.value;

                textarea.after(div);

                textarea.remove();

            }, true); //check out capturing state
        }


        function insertHTMLAndCSS(){
            document.body.insertAdjacentHTML('afterbegin', `
                <ul>
                    <li>Click the div to edit.</li>
                    <li>Enter or blur saves the result.</li>
                </ul>
                
                HTML is allowed.
                
                <div id="view" class="view">Text</div>
            `);

            document.head.insertAdjacentHTML('beforeend', `
                <style>
                    .view,
                    .edit {
                        height: 150px;
                        width: 400px;
                        font-family: sans-serif;
                        font-size: 14px;
                        display: block;
                    }
                    
                    .view {
                        /* padding + border = 3px */
                        padding: 2px;
                        border: 1px solid black;
                    }
                    
                    .edit {
                        /* replace padding with border (still 3px not to shift the contents) */
                        border: 3px solid blue;
                        padding: 0px;
                    }
                    
                    .edit:focus {
                        /* remove focus border in Safari */
                        outline: none;
                    }
                </style>
            `);
        }
    }
})();