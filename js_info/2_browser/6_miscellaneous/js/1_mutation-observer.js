(function (){
    'use strict';

    // ---track dynamic changes

    let div = document.createElement('div');

    div.style.cssText = `
        text-align: center;
        padding: 20px;
        font-size: 30px;
        color: #ffb600;
    `;

    document.body.append(div);

    let observer = new MutationObserver( mutations=>{

        // console.log(mutations);

        for(let mutation of mutations){

            // console.log(mutation.type);

            if (mutation.type == "childList"){
                setDivTextColor();
            }
        }
    });

    observer.observe(div, {
        childList: true,
        subtree: true,
        characterData: true // actualy need only this and in calback just put setDivTextColor, but to practise doing all this..
    });

    setInterval(()=>{
        div.innerHTML = Math.round(Math.random()*100);
    }, 1000);

    function setDivTextColor(){

        let number = +div.innerText
        switch(true){
            case number % 10 == 0: 
                div.style.color = "purple";
                break;

            case number % 2 == 0:
                div.style.color = "red";
                break;
            
            default: 
                div.style.color = "yellow";
        }
    }
})();