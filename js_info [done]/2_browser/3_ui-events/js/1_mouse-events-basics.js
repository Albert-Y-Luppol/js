(function (){
    'use strict';

    selectableListFn();
    

    function selectableListFn(){

        selectableListMineNew();
        
        // selectableListJSInfo();
        
        // selectableListMineOld();

        // functions

        function selectableListMineNew(){

            insertHtmlAndCss();

            eventHandler();


            // functions

            function eventHandler(){
                let list = document.getElementById('ul');

                list.addEventListener('mousedown', (e)=>{
                    e.preventDefault();
                });

                document.addEventListener('click', (e)=>{


                    // console.log( this ); // interesting thing, how bind parent list?
                    let target = e.target.closest('LI'),
                        list = e.target.closest('#ul');

                    if(!(list && target)) {
                        if(!(e.ctrlKey || e.metaKey)) disableSelecton();
                        return;
                    }

                    if(!(e.ctrlKey || e.metaKey)) disableSelecton();

                    target.classList.toggle('selected');

                });

                function disableSelecton(list = document.getElementById('ul')){
                    list.querySelectorAll('.selected').forEach(li=>li.classList.remove('selected'));
                }
            }


            function insertHtmlAndCss(){
                document.body.innerHTML = `
                    <p>Click on a list item to select it.</p>
                    <ul id = "ul">
                        <li>Christopher Robin</li>
                        <li>Winnie-the-Pooh</li>
                        <li>Tigger</li>
                        <li>Kanga</li>
                        <li>Rabbit. Just rabbit.</li>
                    </ul>
                `;

                document.head.insertAdjacentHTML('beforeend', `
                    <style>
                        .selected {
                            background: #0f0;
                        }
                    
                        li {
                            cursor: pointer;
                        }
                    </style>
                `);

            }

        }


        function selectableListJSInfo(){

            document.body.innerHTML = `
                                        <p>Click on a list item to select it.</p>
                                        <ul id = "ul">
                                            <li>Christopher Robin</li>
                                            <li>Winnie-the-Pooh</li>
                                            <li>Tigger</li>
                                            <li>Kanga</li>
                                            <li>Rabbit. Just rabbit.</li>
                                        </ul>
                                    `;

            document.head.insertAdjacentHTML('beforeend', `
                <style>
                    .selected {
                        background: #0f0;
                    }
                
                    li {
                        cursor: pointer;
                    }
                </style>
            `);

            ul.onmousedown = () => false;
            ul.onclick =  function (event) {
                if(event.target.tagName != 'LI') return;

                if(event.ctrlKey || event.metaKey){
                    toggleSelect(event.target);
                } else {
                    singleSelect(event.target);
                }

            }                   
            

            function toggleSelect(li){
                li.classList.toggle('selected');
            }


            function singleSelect(li){
                let selected = document.querySelectorAll('.selected');

                selected.forEach((s)=>s.classList.remove('selected'));

                li.classList.add('selected');
            }
        }



        function selectableListMineOld(){
            document.body.innerHTML = `
                                        <p>Click on a list item to select it.</p>
                                        <ul id = "ul">
                                            <li>Christopher Robin</li>
                                            <li>Winnie-the-Pooh</li>
                                            <li>Tigger</li>
                                            <li>Kanga</li>
                                            <li>Rabbit. Just rabbit.</li>
                                        </ul>
                                        `;

            let liArray = document.querySelectorAll('li');
            liArray.forEach((li)=>li.addEventListener('click', (e)=>{
                if(e.ctrlKey||e.metaKey){
                    li.style.background = "green";
                } else {
                    disableSelection();
                    li.style.background = "green";
                }
            }));

            function disableSelection(){
                liArray.forEach(li => li.style.background = 'none');
            }
        }
    }
})();