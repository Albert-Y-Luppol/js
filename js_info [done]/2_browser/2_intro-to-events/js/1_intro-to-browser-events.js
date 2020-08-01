(function (){
    'use strict';

    // hideOnClickFn();

    // hideSelf();

    // ballOnTheField();

    // dropDownListFn();

    // messageClose();

    // slider();


    // functions

    function slider(){

        addHTML();

        setSlider();


        // functions

        function setSlider(parameters){

            let setParams =  new Promise(resolve=>{ 
                setSliderParameters(parameters, resolve)
            });

            setParams.then(parameters=>{setButtons(parameters)});


            // functions


            function setButtons(parameters){

                parameters.scroll.style.left = 10 + 'px';

                let btnLeft = parameters.slider.querySelector('.slider__arrow--left'),
                    btnRight = parameters.slider.querySelector('.slider__arrow--right');

                btnLeft.addEventListener('click', ()=>{
                    let currentPosition = parameters.scroll.style.left.replace('px', ''),
                        newPosition = +currentPosition + parameters._step;

                    if(newPosition > 0) newPosition = 0;
                    parameters.scroll.style.left = newPosition + 'px';
                });

                btnRight.addEventListener('click', ()=>{
                    let currentPosition = parameters.scroll.style.left.replace('px', ''),
                        newPosition = +currentPosition - parameters._step;
                    if(newPosition < -parameters._totalWidth + parameters._step) {
                            newPosition = -parameters._totalWidth + parameters._step; 
                    }
                    parameters.scroll.style.left = newPosition + 'px';
                })
            }


            function setSliderParameters(parameters = {
                elementsPerView : 3,
            }, resolve){
                let height = 0,
                    width = 0,
                    slider = document.getElementById('slider'),
                    sliderContainer = slider.querySelector('ul'),
                    totalWidth = 0,
                    resizeCounter = 0;
                
                sliderContainer.querySelectorAll('img').forEach(li=>{
                    li.onload =  ()=>{
                        height = li.offsetHeight > height ? li.offsetHeight : height;
                        width = li.offsetWidth * parameters.elementsPerView  > width ? li.offsetWidth * parameters.elementsPerView : width;
                        totalWidth += li.offsetWidth;
                        resizeCounter++;

                        slider.style.height = height + 20 + 'px';
                        slider.style.width = width + 80 + 'px';

                        if(resizeCounter == sliderContainer.querySelectorAll('img').length){
                            parameters._totalWidth = totalWidth;
                            parameters._step = width;
                            parameters.slider = slider;
                            parameters.scroll = sliderContainer;
                            resolve(parameters);
                        }
                    };
                });
            }
        }


        function addHTML(){
            document.body.insertAdjacentHTML('afterbegin', `
                <div id="slider" class="slider">
                    <button class="slider__arrow slider__arrow--left">⇦</button>
                    <button class="slider__arrow slider__arrow--right">⇨</button>

                    <div class="slider__wrapper">
                        <ul>
                            <li><img src="https://en.js.cx/carousel/1.png"></li>
                            <li><img src="https://en.js.cx/carousel/2.png"></li>
                            <li><img src="https://en.js.cx/carousel/3.png"></li>
                            <li><img src="https://en.js.cx/carousel/4.png"></li>
                            <li><img src="https://en.js.cx/carousel/5.png"></li>
                            <li><img src="https://en.js.cx/carousel/6.png"></li>
                            <li><img src="https://en.js.cx/carousel/7.png"></li>
                            <li><img src="https://en.js.cx/carousel/8.png"></li>
                            <li><img src="https://en.js.cx/carousel/9.png"></li>
                            <li><img src="https://en.js.cx/carousel/10.png"></li>
                        </ul>
                    </div>
                </div>
            `);

            let i = 1;   
            let slider = document.getElementById('slider');
            for(let li of slider.querySelectorAll('li')) {
            li.style.position = 'relative';
            li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
            i++;
            }
        }
    }


    function messageClose(){
        document.body.insertAdjacentHTML('afterbegin', `
        <div>
            <div class="pane">
                <h3>Horse</h3>
                <p>The horse is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today.</p>
            </div>
            <div class="pane">
                <h3>Donkey</h3>
                <p>The donkey or ass (Equus africanus asinus) is a domesticated member of the horse family, Equidae. The wild ancestor of the donkey is the African wild ass, E. africanus. The donkey has been used as a working animal for at least 5000 years.</p>
            </div>
            <div class="pane">
                <h3>Cat</h3>
                <p>The domestic cat (Latin: Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. Cats are often valued by humans for companionship and for their ability to hunt vermin.
                </p>
            </div>
        </div>
        `);

        let styles = document.createElement('style');

        styles.innerHTML = `
            body {
                margin: 10px auto;
                width: 470px;
            }
            
            h3 {
                margin: 0;
                padding-bottom: .3em;
                font-size: 1.1em;
            }
            
            p {
                margin: 0;
                padding: 0 0 .5em;
            }
            
            .pane {
                background: #edf5e1;
                padding: 10px 20px 10px;
                border-top: solid 2px #c4df9b;
                position: relative;
            }
            
            .remove-button {
                font-size: 110%;
                color: darkred;
                right: 10px;
                width: 24px;
                height: 24px;
                border: none;
                background: transparent;
                cursor: pointer;
                position: absolute;
                top: 0;
            }
        `;

        document.head.append(styles);

        let messages = document.querySelectorAll('.pane');

        messages.forEach(message=>{
            message.insertAdjacentHTML('beforeEnd', `<button class="remove-button">[x]</button>`);
        });

        let closes = document.querySelectorAll('.remove-button');

        closes.forEach(x=>{
            x.addEventListener('click', ()=>{
                x.closest('.pane').remove();
            })
        });


    }


    function dropDownListFn(){
        document.body.insertAdjacentHTML('afterbegin', `
            <div class="ddl">
                <span class="ddl__sense-zone">
                    <span class="ddl__arrow">▶</span>
                    <span>Sweeties (click me)!</span>
                </span>
                <ul>
                <li>Cake</li>
                <li>Donut</li>
                <li>Honey</li>
                </ul>
            </div>
        `);

        let styles = document.createElement('style');

        styles.innerHTML = `
            *{
                transition: all .3s ease-in-out;
            }

            .ddl__arrow {
                position: absolute;
            }

            .ddl__arrow+span{
                padding-left: 16px;
            }

            .ddl__sense-zone{
                cursor: pointer;
                position: relative;
            }

        `;

        document.head.append(styles);

        let senseZone = document.querySelector('.ddl__sense-zone'),
            arrow = document.querySelector('.ddl__arrow'),
            ul = document.querySelector('.ddl ul');
        
        // ul.style.display = "none";
        ul.style.opacity = 0;


        senseZone.addEventListener('click', ()=>{
            if(ul.style.opacity == 0){
                // ul.style.display = "";
                ul.style.opacity = 1;
                arrow.style.transform = "rotate(90deg)"; // transform: rotate(90deg);
            } else {
                // ul.style.display = "none";
                arrow.style.transform = "rotate(0deg)";
                ul.style.opacity = 0;
            }
        });
    }


    function ballOnTheField(){
        let styles = document.createElement('style');
        styles.innerHTML = ` 
            #field {
                width: 200px;
                height: 150px;
                border: 10px solid black;
                background-color: #00FF00;
                overflow: hidden;
                cursor: crosshair;
                user-select: none;
            }
            
            #ball {
                position: absolute;
                transform: translate(-50%, -50%);
                top: 50%;
                left: 50%;
                transition: all 1s ease-out;
            }
        `;

        document.head.append(styles);

        document.body.style.height = "2000px";

        document.body.insertAdjacentHTML('afterbegin', `
            <div id="field">
                <img src="https://en.js.cx/clipart/ball.svg" id="ball"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            </div>
        `);

        let ball = document.getElementById('ball'),
            field = document.getElementById('field'),
            ballDimentions;

        ball.onload = ()=>{ballDimentions = ball.getBoundingClientRect()};
            

        field.addEventListener('click', (event)=>{
    
            let targetBallCoordinates = {x: event.clientX , y: event.clientY},
                fieldRect = field.getBoundingClientRect(),
                fieldBallRelativeCorners = {
                    topLeft: {x: fieldRect.x + field.clientLeft + ballDimentions.width / 2, y: fieldRect.y + field.clientTop + ballDimentions.height / 2}
                };

            fieldBallRelativeCorners.bottomRight = {x: fieldBallRelativeCorners.topLeft.x + field.clientWidth - ballDimentions.width, y: fieldBallRelativeCorners.topLeft.y + field.clientHeight - ballDimentions.height};

            if( targetBallCoordinates.x < fieldBallRelativeCorners.topLeft.x){
                targetBallCoordinates.x = fieldBallRelativeCorners.topLeft.x;
            } else if(targetBallCoordinates.x > fieldBallRelativeCorners.bottomRight.x){
                targetBallCoordinates.x = fieldBallRelativeCorners.bottomRight.x;
            }

            if( targetBallCoordinates.y < fieldBallRelativeCorners.topLeft.y){
                targetBallCoordinates.y = fieldBallRelativeCorners.topLeft.y;
            } else if(targetBallCoordinates.y > fieldBallRelativeCorners.bottomRight.y){
                targetBallCoordinates.y = fieldBallRelativeCorners.bottomRight.y;
            }

            ball.style.left = targetBallCoordinates.x + 'px';
            ball.style.top = targetBallCoordinates.y + 'px';
        });
    }


    function hideSelf(){
        document.body.insertAdjacentHTML('afterbegin', `
            <button onclick="this.hidden = true">Click to hide</button>
        `);
    }


    function hideOnClickFn(){
        document.body.insertAdjacentHTML('afterbegin', `
            <input type="button" id="hider" value="Click to hide the text" />

            <div id="text">Text</div>
        `);

        let btn = document.getElementById('hider');

        btn.onclick = function (){
            document.getElementById('text').hidden = true;
        };
    }
})();