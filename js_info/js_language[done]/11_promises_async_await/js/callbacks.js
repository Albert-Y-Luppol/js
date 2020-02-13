(function (){
    'use strict';

    showCircleFn();


    // functions

    function showCircleFn(){
        let btn = document.createElement('button');

        btn.innerHTML = "Show Circle";
        document.body.append(btn);
        // btn.onclick = ()=> showCircleNoText(150, 150, 100);
        btn.onclick = ()=> showCircle(150, 150, 100, div => {
            div.classList.add('message-ball');
            div.append("Hello, world!");
        });
        
    }


    function showCircleNoText(cx, cy, rad){

        let circle = document.createElement('div');
        circle.style.borderRadius = "50%";
        circle.style.position = "absolute";
        circle.style.left = `${cx}px`;
        circle.style.top = `${cy}px`;
        circle.style.backgroundColor = "red";
        circle.style.transform = "translate(-50%, -50%)";
        circle.style.width = `0px`;
        circle.style.height = `$0px`;


        // circle.style.transition = "all 1s ease-in-out";

        // document.body.append(circle);
        
        // setTimeout(()=>{
        //     circle.style.width = `${rad * 2}px`;
        //     circle.style.height = `${rad * 2}px`;
        // }, 0);


        document.body.append(circle);
        
        let startRad = 0;

        let interval = setInterval(()=>{
            if(startRad < rad*2){
                ++startRad;
                circle.style.width = `${startRad}px`;
                circle.style.height = `${startRad}px`;
            } else {
                clearInterval(interval);
            }
        }, 10);

    }


    function showCircle(cx, cy, rad, callback){

        let circle = document.createElement('div');
        circle.style.borderRadius = "50%";
        circle.style.position = "absolute";
        circle.style.left = `${cx}px`;
        circle.style.top = `${cy}px`;
        circle.style.backgroundColor = "red";
        circle.style.transform = "translate(-50%, -50%)";
        circle.style.width = `0px`;
        circle.style.height = `0px`;


        circle.style.transition = "all 2s ease-in-out";

        document.body.append(circle);
        
        setTimeout(()=>{
            circle.style.width = `${rad * 2}px`;
            circle.style.height = `${rad * 2}px`;

            circle.addEventListener('transitionend', function handler (){
                circle.removeEventListener('transitionend', handler);
                callback(circle);
            });
        }, 0);


        // document.body.append(circle);
        
        // let startRad = 0;

        // let interval = setInterval(()=>{
        //     if(startRad < rad*2){
        //         ++startRad;
        //         circle.style.width = `${startRad}px`;
        //         circle.style.height = `${startRad}px`;
        //     } else {
        //         clearInterval(interval);
        //         callback(circle)
        //     }
        // }, 10);

    }


    
})();