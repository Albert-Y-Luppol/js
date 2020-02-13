(()=>{
    'use strict';

    // delayFn();

    circleFn();


    // functions

    function circleFn(){

        let btn = document.createElement('button');

        btn.innerHTML = "Show Circle";
        document.body.append(btn);
        btn.onclick = ()=> showCircle(150, 150, 100).then(div => {
            div.classList.add('message-ball');
            div.append("Hello, world!");
        });


        function showCircle(cx, cy, rad){
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

            let promise = new Promise(resolve=>{
                setTimeout(()=>{
                    circle.style.width = `${rad * 2}px`;
                    circle.style.height = `${rad * 2}px`;
        
                    circle.addEventListener('transitionend', function handler (){
                        circle.removeEventListener('transitionend', handler);
                        resolve(circle);
                    });
                }, 0);
            });

            return promise;
            
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
    }


    function delayFn(){
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        delay(3000).then(() => alert('runs after 3 seconds'));
    }
})();