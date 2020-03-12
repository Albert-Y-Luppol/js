(function (){
    'use strict';

    bouncingBallAnim();

    addRightBallAnim();



    // functions

    function addRightBallAnim(){
        ball.onclick = ()=>{
            animate({
                duration: 1700,
                draw: (progress)=>{
                    ball.style.bottom = 80 - 80 * progress + "%";
                },
                timing: bounce
            });

            animate({
                duration: 1700,
                draw: (progress)=>{
                    ball.style.left = 30 * progress + "%";
                },
                timing: easeOut
            });
        };
    }


    function bouncingBallAnim(){

        //styles injection
        document.head.insertAdjacentHTML('beforeend', `
            <style>
                #field {
                    height: 200px;
                    border-bottom: 3px black groove;
                    position: relative;
                }
                
                #ball {
                    position: absolute;
                    cursor: pointer;
                    bottom: 0%;
                }
            </style>
        `); 

        //html
        document.body.insertAdjacentHTML('beforeend', `
            <div id="field">
                <img src="https://en.js.cx/clipart/ball.svg" width="40" height="40" id="ball">
            </div>
        `); 

        ball.onclick = ()=>{
            animate({
                duration: 1700,
                draw: (progress)=>{
                    ball.style.bottom = 80 - 80 * progress + "%";
                },
                timing: bounce
            });
        };
    

    }


    function animate({timing, draw, duration}){

        let start = performance.now();

        requestAnimationFrame(function animate(time){

            let timeFraction = (time - start) / duration;

            if(timeFraction > 1) timeFraction = 1;

            let progress = timing(timeFraction);

            draw(progress);

            if(timeFraction < 1) {
                requestAnimationFrame(animate);
            }
        });
    }


    function bounce(timeFraction){

        return bounceOut();

        function bounceOut(){
            return 1 - bouncing(1 - timeFraction);
        }

        function bouncing(timeFraction){
            for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
                if (timeFraction >= (7 - 4 * a) / 11) {
                  return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
                }
            }
        }
    }

    function easeOut(timeFraction){
        return Math.sqrt(timeFraction);
    }


   

})();