(()=>{
    'use strict';


    // hideMessages();


    // toggleTreeMenu();

    // sortTableFnMine();
    // sortTableFnJSInfo()

    // tooltipBehavior();

    // functions

    function tooltipBehavior(){

        insertHtmlAndCss();

        handlEvents();

        // functions

        function handlEvents(){

            document.addEventListener('mouseover', (e)=>{
                if(!e.target.dataset.tooltip) return;
                
                let target = e.target,
                    tip = document.createElement('span');
                
                tip.className = "tooltip";
                tip.innerHTML = target.dataset.tooltip;

                document.body.append(tip);

                let targetRect = target.getBoundingClientRect(),
                    tipRect = tip.getBoundingClientRect();
                
                if(targetRect.left + targetRect.width / 2 - tipRect.width / 2 > 0){
                    tip.style.left = targetRect.left + targetRect.width / 2 - tipRect.width / 2 + 'px';
                } else {
                    tip.style.left = 0 + "px";
                }

                if(targetRect.top - tipRect.height - 5 > 0) {
                    tip.style.top = targetRect.top - tipRect.height - 5 + 'px';
                } else {
                    tip.style.top = targetRect.top + targetRect.height + 5 + 'px';
                }

            });

            document.addEventListener('mouseout', (e)=>{
                if(!e.target.dataset.tooltip) return;

                document.querySelector('.tooltip').remove();
            });
        }
        

        function insertHtmlAndCss(){
            document.body.insertAdjacentHTML('afterbegin', `
                <p>LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa</p>
                <p>LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa</p>
            
                <button data-tooltip="the tooltip is longer than the element">Short button</button>
                <button data-tooltip="HTML<br>tooltip">One more button</button>
            
                <p>Scroll the page to make buttons appear on the top, check if the tooltips show up correctly.</p>          
            `);

            document.head.insertAdjacentHTML('beforeend', `
                <style>
                    body {
                        height: 2000px;
                        /* make body scrollable, the tooltip should work after the scroll */
                    }
                
                    .tooltip {
                        /* some styles for the tooltip, you can use your own instead */
                        position: fixed;
                        padding: 10px 20px;
                        border: 1px solid #b3c9ce;
                        border-radius: 4px;
                        text-align: center;
                        font: italic 14px/1.3 sans-serif;
                        color: #333;
                        background: #fff;
                        box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
                    }
                </style>
            `);
        }
    }


    function sortTableFnJSInfo(){

        insertHtmlAndCss();

        sortTableFn();

        // functions

        function sortTableFn(){
            let tree = document.getElementById('grid');

            tree.addEventListener('click', (e)=>{
                if(e.target.tagName != 'TH') return;
                
                let th = e.target;

                let index = th.cellIndex;

                sortTable(index, th.dataset.type);
            });


            // functions

            function sortTable(i, type){
                let tbody = document.getElementById('grid').querySelector('tbody'),
                    rows = Array.from(tbody.rows);

                let compare;

                switch (type){
                    case 'number':
                        compare = (rowA, rowB)=> rowA.cells[i].innerHTML - rowB.cells[i].innerHTML;
                        break;

                    case 'string': 
                        compare = (rowA, rowB)=> rowA.cells[i].innerHTML > rowB.cells[i].innerHTML ? 1 : -1;
                        break;
                }

                rows.sort(compare);

                tbody.append(...rows);
            }
        }

        function insertHtmlAndCss(){
            document.body.insertAdjacentHTML('afterbegin', `
                <table id="grid">
                    <thead>
                        <tr>
                            <th data-type="number">Age</th>
                            <th data-type="string">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>5</td>
                            <td>John</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Pete</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Ann</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Eugene</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Ilya</td>
                        </tr>
                    </tbody>
                </table>
            `);

            document.head.insertAdjacentHTML('beforeend', `
                <style>
                    table {
                        border-collapse: collapse;
                    }

                    th, td {
                        border: 1px solid black;
                        padding: 4px;
                    }

                    th {
                        cursor: pointer;
                    }
                    
                    th:hover {
                        background: yellow;
                    }
                </style>
            `);
        }
    }


    function sortTableFnMine(){

        insertHtmlAndCss();

        sortTable();

        // functions

        function sortTable(){
            let tree = document.getElementById('grid');

            tree.addEventListener('click', (e)=>{
                let target = e.target;

                if(target.tagName != 'TH') return;
                
                let index = getIndexOfColumn(target);

                let rowList = getListOfTBodyRows(tree);

                if(target.dataset.type == 'number'){
                    sortAsNumber(rowList, index);
                } else{
                    sortAsString(rowList, index);
                }

                fillTableWithList(rowList, tree);
            });


            // functions


            function fillTableWithList(list, table){
                let tbody = table.querySelector('tbody');

                while(list.length != 0){
                    tbody.prepend(list.pop());
                }
            }


            function sortAsString(list, i){
                list.sort((rowA, rowB)=> rowA.querySelectorAll('td')[i].textContent > rowB.querySelectorAll('td')[i].textContent ? 1 : -1);
            }


            function sortAsNumber(list, i){
                list.sort((rowA, rowB)=> +rowA.querySelectorAll('td')[i].textContent - +rowB.querySelectorAll('td')[i].textContent);
            }


            function getListOfTBodyRows(table){
                let list = [],
                    firstRow = table.querySelector('tbody').querySelector('tr');

                while(firstRow != undefined){
                    list.push(firstRow);
                    firstRow = firstRow.nextElementSibling;
                }

                return list;
            }


            function getIndexOfColumn(th){ //zero based

                let index = 0;
                let prevSibling = th.previousElementSibling;

                while(prevSibling != undefined){
                    index++;
                    prevSibling = prevSibling.previousElementSibling;
                }

                return index;
            }
        }


        function insertHtmlAndCss(){
            document.body.insertAdjacentHTML('afterbegin', `
                <table id="grid">
                    <thead>
                        <tr>
                            <th data-type="number">Age</th>
                            <th data-type="string">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>5</td>
                            <td>John</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Pete</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Ann</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Eugene</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Ilya</td>
                        </tr>
                    </tbody>
                </table>
            `);

            document.head.insertAdjacentHTML('beforeend', `
                <style>
                    table {
                        border-collapse: collapse;
                    }

                    th, td {
                        border: 1px solid black;
                        padding: 4px;
                    }

                    th {
                        cursor: pointer;
                    }
                    
                    th:hover {
                        background: yellow;
                    }
                </style>
            `);
        }
    }


    function toggleTreeMenu(){
        

        insertHtmlAndCss();

        wrapTitles();

        toggleTree();

        // functions

        function toggleTree(){
            let tree = document.getElementById('tree');

            tree.addEventListener('click', (e)=>{
                let target = e.target,
                    childUl = target.closest('li').querySelector('ul');
                if(!(target.tagName == 'SPAN') || !childUl) return;
                childUl.hidden = !childUl.hidden;
            });
        }


        function wrapTitles(){
            let tree = document.getElementById('tree'),
                lis = tree.querySelectorAll('li');
            
            lis.forEach(li=>{
                let span = document.createElement('span');

                span.innerText = li.firstChild.textContent;
                li.firstChild.replaceWith(span);
            });
        }


        function insertHtmlAndCss(){
            document.body.insertAdjacentHTML('afterbegin', `
                <ul class="tree" id="tree">
                    <li>Animals
                        <ul>
                            <li>Mammals
                                <ul>
                                    <li>Cows</li>
                                    <li>Donkeys</li>
                                    <li>Dogs</li>
                                    <li>Tigers</li>
                                </ul>
                            </li>
                            <li>Other
                                <ul>
                                    <li>Snakes</li>
                                    <li>Birds</li>
                                    <li>Lizards</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Fishes
                        <ul>
                            <li>Aquarium
                                <ul>
                                    <li>Guppy</li>
                                    <li>Angelfish</li>
                                </ul>
                            </li>
                            <li>Sea
                                <ul>
                                    <li>Sea trout</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            `);

            document.head.insertAdjacentHTML('beforeend', `
                <style>
                    .tree span:hover{
                        font-weight: 700;
                        cursor: pointer;
                        user-select: none;
                    }
                </style>
            `);
        }
    }


    function hideMessages(){


        insertHtmlAndCss();

        handlEvents();

        // functions

        function handlEvents(){
            let container = document.getElementById('container');

            container.addEventListener('click', (e)=>{
                let target = e.target;

                if(!target.closest('.remove-button')) return;

                target.closest('.pane').remove();
            });
        }


        function insertHtmlAndCss(){
            document.body.insertAdjacentHTML('afterbegin', `
                <div id="container">
                    <div class="pane">
                    <h3>Horse</h3>
                    <p>The horse is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today.</p>
                    <button class="remove-button">[x]</button>
                    </div>
                    <div class="pane">
                    <h3>Donkey</h3>
                    <p>The donkey or ass (Equus africanus asinus) is a domesticated member of the horse family, Equidae. The wild ancestor of the donkey is the African wild ass, E. africanus. The donkey has been used as a working animal for at least 5000 years.</p>
                    <button class="remove-button">[x]</button>
                    </div>
                    <div class="pane">
                    <h3>Cat</h3>
                    <p>The domestic cat (Latin: Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. Cats are often valued by humans for companionship and for their ability to hunt vermin.
                    </p>
                    <button class="remove-button">[x]</button>
                    </div>
                </div>
            `);

            document.head.insertAdjacentHTML('beforeend', `
                <style>
                    body {
                        margin: 10px auto;
                        width: 470px;
                    }
                    
                    h3 {
                        margin: 0;
                        padding-bottom: .3em;
                        padding-right: 20px;
                        font-size: 1.1em;
                    }
                    
                    p {
                        margin: 0;
                        padding: 0 0 .5em;
                    }
                    
                    .pane {
                        background: #edf5e1;
                        padding: 10px 20px 10px;
                        border-top: solid 2px #c4df9b;
                        position: relative;
                    }
                    
                    .remove-button {
                        position: absolute;
                        font-size: 110%;
                        top: 0;
                        color: darkred;
                        right: 10px;
                        display: block;
                        width: 24px;
                        height: 24px;
                        border: none;
                        background: transparent;
                        cursor: pointer;
                    }
                </style>
            `);
        }
    }
})();