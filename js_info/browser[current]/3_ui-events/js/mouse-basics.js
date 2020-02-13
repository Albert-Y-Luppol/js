(function (){
    'use strict';

    selectableList();
    

    function selectableList(){
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



        // let liArray = document.querySelectorAll('li');
        // liArray.forEach((li)=>li.addEventListener('click', (e)=>{
        //     if(e.ctrlKey||e.metaKey){
        //         li.style.background = "green";
        //     } else {
        //         disableSelection();
        //         li.style.background = "green";
        //     }
        // }));

        // function disableSelection(){
        //     liArray.forEach(li => li.style.background = 'none');
        // }
    }
})();