(function (){
    'use strict';

    // planeAnim();

    // planeAnimCubicBeazer();

    circleAnim();


    // functions


    function circleAnim(){
        //styles injection
        document.head.insertAdjacentHTML('beforeend', `
            <style>
                .circle {
                    transition-property: width, height, margin-left, margin-top;
                    transition-duration: 2s;
                    position: fixed;
                    transform: translateX(-50%) translateY(-50%);
                    background-color: red;
                    border-radius: 50%;
                
                    width: 200px;
                    height: 200px;
                    top: 150px;
                    left: 150px;
                }

                .circle--hide{
                    width: 0px;
                    height: 0px;
                }
            </style>
        `); 

        //html
        document.body.insertAdjacentHTML('beforeend', `
            <button onclick='toggleCircle()'>Toggle Circle</button>
            <div class="circle circle--hide" id="circle"></div>
        `); 
    }


    function planeAnim(){

        //styles injection
        document.head.insertAdjacentHTML('beforeend', `
            <style>
                img {
                cursor: pointer;
                }
            </style>
            <style>
                #flyjet {
                width: 40px;
                /* -> 400px */
            
                height: 24px;
                /* -> 240px */
                }
            </style>
        `); 

        //html
        document.body.insertAdjacentHTML('beforeend', `
            <img id="flyjet" src="https://en.js.cx/clipart/flyjet.jpg">
        `); 


        flyjet.onclick = ()=>{
            flyjet.style.cssText=`
            transition: all 3s;
            width: 400px;
            /* -> 400px */
        
            height: 240px;
            /* -> 240px */
        `};

        flyjet.ontransitionend = ()=>{
            alert('Done!');
            flyjet.ontransitionend = '';
        }
    }


    function planeAnimCubicBeazer(){

        //styles injection
        document.head.insertAdjacentHTML('beforeend', `
            <style>
                img {
                cursor: pointer;
                }
            </style>
            <style>
                #flyjet {
                width: 40px;
                /* -> 400px */
            
                height: 24px;
                /* -> 240px */
                }
            </style>
        `); 

        //html
        document.body.insertAdjacentHTML('beforeend', `
            <img id="flyjet" src="https://en.js.cx/clipart/flyjet.jpg">
        `); 


        flyjet.onclick = ()=>{
            flyjet.style.cssText=`
            transition: all 3s cubic-bezier(1,2,0,1);
            width: 400px;
            /* -> 400px */
        
            height: 240px;
            /* -> 240px */
        `};

        flyjet.ontransitionend = ()=>{
            alert('Done!');
            flyjet.ontransitionend = '';
        }
    }
    

})();


function toggleCircle(){
    circle.classList.toggle('circle--hide');
}