(()=>{
    'use strict';

    // scrollBottomFn();

    ceteringBallOnTheField();

    // functions
    

    function ceteringBallOnTheField(){

        let styles = document.createElement('style');

        styles.innerHTML =   `
                                #field {
                                    width: 200px;
                                    border: 10px groove black;
                                    background-color: #00FF00;
                                    position: relative;
                                }
                            
                                #ball {
                                    position: absolute;
                                }
                            `;

        document.head.append(styles);

        document.body.insertAdjacentHTML('afterbegin', `
            <div id="field">
                <img src="https://en.js.cx/clipart/ball.svg" id="ball"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            </div>
        `);

        let field = document.getElementById('field'),
            ball = document.getElementById('ball'),
            fieldCenterCoordinates = {x: field.clientWidth / 2, y: field.clientHeight / 2},
            ballCenterCoordinates = {x: ball.offsetWidth / 2, y: ball.offsetHeight / 2};

        ball.addEventListener('load', getCenterCoordinatesOfBall);
        
        function getCenterCoordinatesOfBall(){
            ballCenterCoordinates = {x: ball.offsetWidth / 2, y: ball.offsetHeight / 2};
            ball.style.left = (fieldCenterCoordinates.x - ballCenterCoordinates.x) + 'px';
            ball.style.top = (fieldCenterCoordinates.y - ballCenterCoordinates.y) + 'px';
            ball.removeEventListener('load', getCenterCoordinatesOfBall);
        }

                                    
    }


    function scrollBottomFn(){

        let elem = document.createElement('div');

        elem.style.cssText = `  overflow: scroll;
                                position: fixed;
                                left: 100px;
                                top: 100px;
                                height: 200px;
                                width: 400px;
                                padding: 10px;
                                margin: 50px auto;   
                                border: 1px solid green;
                            `;

        elem.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum iusto fuga dolorum. Fugiat voluptas ipsum officia voluptate reprehenderit, eum consequuntur excepturi quis numquam, neque voluptatibus perspiciatisofficia eaque sed ab quos laborum quidem quasi, et quisquam, nulla numquam aliquam libero quas officiis perspiciatis itaque ratione sequi soluta excepturi voluptatum sapiente quae. ";

        document.body.append(elem);

        scrollBottomMethodCreation(elem);

        setTimeout(()=>{alert('Scroll Top = ' + elem.scrollTop + '\nScroll Height = ' + elem.scrollHeight + '\nScroll Bottom = ' + elem.scrollBottom)}, 1000);

        function scrollBottomMethodCreation(obj){
            Object.defineProperty(obj, 'scrollBottom', {
                get () {
                    return this.scrollHeight - this.clientHeight - this.scrollTop;
                }
            });
        }

    }
})();