(()=>{
    'use strict';

    // clearElementFn();

    // createListFn();

    // treeFromObjFn();

    // addAmountOfChildrenToTreeElements();

    // countDescendantLis();

    // calendar();

    // clocks();

    // insertBetween();

    // sortByName();


    // functions


    function sortByName(){
        document.body.insertAdjacentHTML('afterbegin',`
            <table>
                <thead>
                    <tr>
                        <th>Name</th><th>Surname</th><th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td><td>Smith</td><td>10</td>
                    </tr>
                    <tr>
                        <td>Pete</td><td>Brown</td><td>15</td>
                    </tr>
                    <tr>
                        <td>Ann</td><td>Lee</td><td>5</td>
                    </tr>
                    <tr>
                        <td>...</td><td>...</td><td>...</td>
                    </tr>
                </tbody>
            </table>
        `);

        let tbody = document.body.querySelector('tbody');

        sortTBody(tbody, 1);

        function sortTBody(tbody, numOfSortCol){
            let rows = Array.from(tbody.querySelectorAll('tr'));
            rows.sort((rowA, rowB)=>{
               return rowA.children[numOfSortCol-1].textContent > rowB.children[numOfSortCol-1].textContent ? 1 : -1;
            });
            tbody.append(...rows);
        }
    }


    function insertBetween(){
        document.body.insertAdjacentHTML('afterbegin',
        `
            <ul id="ul">
                <li id="one">1</li>
                <li id="two">4</li>
            </ul>
        `);
        let ul = document.getElementById('ul');
        incert(ul);

        function incert(ul){
            ul.children[0].insertAdjacentHTML('afterend',
            `
            <li>2</li><li>3</li>
            `);
        }
    }


    function clocks(){
        document.body.insertAdjacentHTML('afterbegin',
        `   
            <!-- click on this button calls clockStart() -->
            <input type="button" onclick="clockStart()" value="Start">
      
            <!-- click on this button calls clockStop() -->
            <input type="button" onclick="clockStop()" value="Stop">
        `);

        let date = new Date(),
            clockContainer = document.createElement('div'),
            hoursSpan = document.createElement('span'),
            minutesSpan = document.createElement('span'),
            secondsSpan = document.createElement('span');

        hoursSpan.innerText = date.getHours();
        minutesSpan.innerText = date.getMinutes();
        secondsSpan.innerText = date.getSeconds();
        document.body.prepend(clockContainer);
        clockContainer.append(hoursSpan, ":", minutesSpan, ":", secondsSpan);
        hoursSpan.style.color = "green";
        minutesSpan.style.color = "orange";
        secondsSpan.style.color = "red";

        let timer = printClocks(hoursSpan, minutesSpan, secondsSpan);


        function printClocks(hCont, mCont, sCont){
            let h = +hCont.textContent,
                m = +mCont.textContent,
                s = +sCont.textContent;
            
            let timer = setInterval(()=>{
                s++;
                if(s == 60){
                    s = 0;
                    m++;

                    if(m == 60) {
                        m = 0;
                        h++;
                            if(h == 24){
                                h = 0;
                            }
                    }
                }
                hCont.innerHTML = h < 10 ? '0'+ h : h;
                mCont.innerHTML = m < 10 ? '0'+ m : m;
                sCont.innerHTML = s < 10 ? '0'+ s : s;
            }, 1000);

            return timer;
        }
        
    }


    function calendar(){

        document.body.insertAdjacentHTML('afterbegin', `<style>
                                                            table {
                                                            border-collapse: collapse;
                                                            }
                                                        
                                                            td,
                                                            th {
                                                            border: 1px solid black;
                                                            padding: 3px;
                                                            text-align: center;
                                                            }
                                                        
                                                            th {
                                                            font-weight: bold;
                                                            background-color: #E6E6E6;
                                                            }
                                                        </style>`);
        let div = document.createElement('div');
        div.id = 'calendar';
        document.body.append(div);

        createCalendar(div,2011, 11);

        function createCalendar(calendar, year, month){
            let days =['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'],
                date = new Date(year, month, 0),
                day = date.getDay() == 0 ? 7 : date.getDay(),
                daysAmount = date.getDate(),
                table = document.createElement('table'),
                thead = document.createElement('thead'),
                tbody = document.createElement('tbody'),
                tr = document.createElement('tr');
            
            days.forEach(day=>{
                let th = document.createElement('th');
                th.innerHTML = day;
                tr.append(th);
            });
            
            thead.append(tr);

            table.append(thead);

            let flagEnd = false,
                flagStart = true;

            while(daysAmount > 0){
                let tr = document.createElement('tr');
                for(let i = 7; i > 0; i--){
                    let td = document.createElement('td');
                    if(day == i) flagEnd = true;
                    if (daysAmount == 0) flagStart = false;
                    if(flagEnd && flagStart){
                        td.innerHTML = daysAmount;
                        daysAmount--;
                    } 
                    tr.prepend(td);
                }
                tbody.prepend(tr);
            }

            table.append(tbody);

            calendar.append(table);
        }


        // <table>
        //     <thead>
        //         <tr>
        //             <th colspan="2">The table header</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <td>The table body</td>
        //             <td>with two columns</td>
        //         </tr>
        //     </tbody>
        // </table>
                                                            
    }


    function countDescendantLis(){
        document.body.insertAdjacentHTML('afterbegin', `
                            <ul>
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
        
        let ul = document.body.querySelector('ul');
        ul.querySelectorAll('li').forEach((li)=>{
            let childLis = li.querySelectorAll('li');
            if(childLis.length != 0){
                li.firstChild.data += `[${childLis.length}]`;
            }
        });
    }


    function addAmountOfChildrenToTreeElements(){
        document.body.insertAdjacentHTML('afterbegin', `
                            <ul>
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
        
        let ul = document.body.querySelector('ul');

        assignAmountOfLi(ul);

        function assignAmountOfLi(ul){
            let lis = Array.from(ul.children).filter(child=>child.matches('li'));
            
            lis.forEach(li=>{
                let childUl = li.querySelector('ul');
                if(childUl){
                    childUl.before(`[${assignAmountOfLi(childUl)}]`);
                }
            });

            return lis.length;
        }
    }


    function treeFromObjFn(){
        document.body.insertAdjacentHTML('afterbegin', `<div id="container"></div>`);
        let data = {
                        "Fish": {
                            "trout": {},
                            "salmon": {}
                        },
                    
                        "Tree": {
                            "Huge": {
                                "sequoia": {},
                                "oak": {}
                            },
                            "Flowering": {
                                "apple tree": {},
                                "magnolia": {}
                            }
                        }
                    },
            container = document.getElementById('container');

        createTree(container, data); // creates the tree in the container

        function createTree(container, data){
            let ul = document.createElement('ul');
            container.append(ul);

            for(let key in data){
                let li = document.createElement('li');
                li.innerText = key;
                ul.append(li);
                if(Object.keys(data[key]) != 0){
                    createTree(li, data[key]);
                }
            }
        }
    }


    function createListFn(){
        let header = document.createElement('h1'),
            ul = document.createElement('ul');

        header.innerText = 'Create a list';

        document.body.append(header, ul);

        createList(ul);

        function createList(list){
            let text = prompt('Text of li:');

            while(text != null){
                let li = document.createElement('li');
                li.innerText = text;
                list.append(li);
                text = prompt('Text of li:');
            }
        }
        
    }


    function clearElementFn(){

        let elem = document.createElement('ol');
        elem.id = "elem";
        elem.innerHTML =    `<li>Hello</li>
                            <li>World</li>`;

        document.body.prepend(elem);
        clear(elem);
        function clear(element) {
            element.innerHTML = '';
        }
    }
})();