(()=>{
    'use strict';

    // countDescendantsFn();

    // getNodeType();

    // tagComment();

    // documentTypeOF();


    // functions


    function documentTypeOF(){
        alert(HTMLDocument.prototype.constructor.name);
        alert(HTMLDocument.prototype.__proto__.constructor.name);
        alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name);
        alert(HTMLDocument.prototype.__proto__.__proto__.__proto__.constructor.name);
    }


    function tagComment(){
        let body = document.body;

        body.innerHTML = "<!--" + body.tagName + "-->";

        alert( body.firstChild.data ); // what's here?
    }


    function getNodeType(){
        alert(document.body.lastChild.nodeName);
    }



    function countDescendantsFn(){

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

        let list = document.querySelector('ul');

        countDescendants(list);

        function countDescendants(parentElement){
            let allLiDescendants = parentElement.querySelectorAll('li');
            
            allLiDescendants.forEach(function bstTraversal(liElement){
                let allDescendantsLi = liElement.querySelectorAll('li');
                alert(`${liElement.firstChild.data.trim()}: ${allDescendantsLi.length}`);
                // if(allDescendantsLi.length != 0){
                //     allDescendantsLi.forEach((descendantLi) => bstTraversal(descendantLi));
                // }
            });
        }
    }
})();