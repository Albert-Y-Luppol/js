(()=>{
    'use strict';


    // sliderDrag();

    superheroDrag();


    // functions


    function superheroDrag(){

        insertHtmlAndCss();

        eventHandlers();


        // functions

        function eventHandlers(){

            let dragFlag = false,
                field =  document.getElementById('field'),
                draggingHero,
                heroShift,
                scrollFeelZone = 50,
                scrollSpeed = 1.1,
                dropZoneFlag = false;
            
            field.style.margin = "25px";
            field.style.borderLeft = "0px solid rgba(67, 48, 102, 1)";
            field.style.borderTop = "0px solid rgba(153, 109, 255, 1)";
            field.style.borderRight = "0px solid rgba(182, 142, 255, 1)";
            field.style.borderBottom = "0px solid rgba(105, 60, 188, 1)";

            document.addEventListener('mousedown', (e)=>{
                
                if(dragFlag) return;
                if(!e.target.closest('.draggable')) return;

                e.preventDefault();
                document.ondragstart = ()=>{return false};

                dragFlag = true;
                draggingHero = e.target.closest('.draggable');

                let draggingHeroRect = draggingHero.getBoundingClientRect();

                heroShift = {x: e.clientX - draggingHeroRect.left, y: e.clientY - draggingHeroRect.top};
                
                draggingHero.style.left = draggingHeroRect.left + pageXOffset + 'px';
                draggingHero.style.top = draggingHeroRect.top + pageYOffset + 'px';
                draggingHero.style.zIndex = '1000';
                draggingHero.style.position = "absolute";
                draggingHero.style.transform = 'scale(1)';
                draggingHero.style.borderBottom = "0px solid gold";
                document.body.append(draggingHero);

                document.addEventListener('mousemove', dragHero);
                document.addEventListener('mouseup', dropHero);
            });


            // functions


            function dragHero(e){

                let draggingHeroRect = draggingHero.getBoundingClientRect();


                //get new coords

                let newCoords = {left: pageXOffset + e.clientX - heroShift.x , top: pageYOffset + e.clientY - heroShift.y}


                //check and tweak new coords

                if(pageXOffset + e.clientX - heroShift.x < 0){
                    newCoords.left = 0;
                }

                if(pageYOffset + e.clientY - heroShift.y < 0){
                    newCoords.top = 0;
                }

                if(pageXOffset + e.clientX + draggingHeroRect.width - heroShift.x - document.body.clientWidth > 0){
                    newCoords.left = document.body.clientWidth - draggingHeroRect.width;
                }

                if(pageYOffset + e.clientY + draggingHeroRect.height - heroShift.y - document.body.clientHeight > 0){
                    newCoords.top = document.body.clientHeight - draggingHeroRect.height;
                }


                //set new coords

                draggingHero.style.left = newCoords.left +'px';
                draggingHero.style.top = newCoords.top +'px';


                draggingHeroRect = draggingHero.getBoundingClientRect();


                // autoscrolling

                if(pageXOffset && draggingHeroRect.left < scrollFeelZone){
                    let scroll = scrollSpeed**(scrollFeelZone - draggingHeroRect.left);
                    if(pageXOffset - scroll < 0) scroll = pageXOffset;
                    window.scrollBy( -scroll, 0);
                    draggingHero.style.left = newCoords.left - scroll +'px';
                } 

                if(document.body.clientWidth - document.documentElement.clientWidth - pageXOffset && document.documentElement.clientWidth - draggingHeroRect.right < scrollFeelZone){
                    let scroll = scrollSpeed**(scrollFeelZone - (document.documentElement.clientWidth - draggingHeroRect.right));
                    if(document.body.clientWidth - pageXOffset - document.documentElement.clientWidth - scroll < 0) scroll = document.body.clientWidth - pageXOffset - document.documentElement.clientWidth;
                    window.scrollBy( scroll, 0);
                    draggingHero.style.left = newCoords.left + scroll +'px';
                } 

                if(pageYOffset && draggingHeroRect.top < scrollFeelZone){
                    let scroll = scrollSpeed**(scrollFeelZone - draggingHeroRect.top);
                    if(pageYOffset - scroll < 0) scroll = pageYOffset;
                    window.scrollBy( 0, -scroll);
                    draggingHero.style.top = newCoords.top - scroll +'px';
                } 

                if(document.body.clientHeight - document.documentElement.clientHeight - pageYOffset && document.documentElement.clientHeight - draggingHeroRect.bottom < scrollFeelZone){
                    let scroll = scrollSpeed**(scrollFeelZone - (document.documentElement.clientHeight - draggingHeroRect.bottom));
                    if(pageYOffset + document.documentElement.clientHeight + scroll - document.body.clientHeight > 0) scroll = document.body.clientHeight - pageYOffset - document.documentElement.clientHeight;
                    window.scrollBy( 0, scroll);
                    draggingHero.style.top = newCoords.top + scroll +'px';
                } 


                //dropp zone check

                let dropZone;

                draggingHero.hidden = true;

                dropZone = document.elementFromPoint(e.clientX, e.clientY);

                draggingHero.hidden = false;

                if(dropZone){
                    dropZoneFlag = Boolean(dropZone.closest('#field'));
                } else {
                    dropZone = false;
                }

                if(dropZoneFlag){
                    field.style.margin = "10px";
                    field.style.borderLeft = "15px solid rgba(67, 48, 102, 1)";
                    field.style.borderTop = "15px solid rgba(153, 109, 255, 1)";
                    field.style.borderRight = "15px solid rgba(182, 142, 255, 1)";
                    field.style.borderBottom = "15px solid rgba(105, 60, 188, 1)";
                    draggingHero.style.boxShadow = '0 80px 10px -50px rgba(0, 0, 0, .3)';
                    draggingHero.style.transform = 'scale(.9)';
                } else {
                    field.style.margin = "25px";
                    field.style.borderLeft = "0px solid rgba(67, 48, 102, 1)";
                    field.style.borderTop = "0px solid rgba(153, 109, 255, 1)";
                    field.style.borderRight = "0px solid rgba(182, 142, 255, 1)";
                    field.style.borderBottom = "0px solid rgba(105, 60, 188, 1)";
                    draggingHero.style.boxShadow = '0 0 0px 0px rgba(0, 0, 0, .3)';
                    draggingHero.style.transform = 'scale(1)';
                }

            }


            function dropHero(e){
                if(dropZoneFlag){
                    draggingHero.style.zIndex = '';
                    draggingHero.style.position = "";
                    draggingHero.style.transform = 'scale(.9)';
                    draggingHero.style.borderBottom = "3px solid rgb(255, 246, 0)";
                    field.append(draggingHero);
                } else {
                    draggingHero.style.zIndex = '10';
                }

                draggingHero.style.boxShadow = '0 0 0px 0px rgba(0, 0, 0, .3)';

                document.removeEventListener('mousemove', dragHero);
                document.removeEventListener('mouseup', dropHero);

                draggingHero = false;
                heroShift = false;
                dropZoneFlag = false;
                dragFlag = false;

                field.style.margin = "25px";
                field.style.borderLeft = "0px solid rgba(67, 48, 102, 1)";
                field.style.borderTop = "0px solid rgba(153, 109, 255, 1)";
                field.style.borderRight = "0px solid rgba(182, 142, 255, 1)";
                field.style.borderBottom = "0px solid rgba(105, 60, 188, 1)";
            }
        }


        function insertHtmlAndCss(){
            document.body.innerHTML = `
                <h2>Place superheroes around the soccer field.</h2>

                <p>Superheroes and the ball are elements with the class "draggable". Make them really draggable.</p>
            
                <p>Important: limit dragging by the window. If a draggable reaches window top or bottom, then the page should scroll to let us drag it further.</p>
            
                <p>If your screen is big enough to fit the whole document -- make the window smaller to get vertical scrolling, so that you could test it.</p>
            
                <p>In this task it's enough to handle vertical scrolling. There's no horizontal scrolling usually, and it's handled the similar way if needed.</p>
            
                <p>And one more thing: heroes may never leave the page. If they reach the edge of the document, no dragging outside of it.</p>
            
                <div id="field">
            
                </div>
                <div style = "width: 100%">
                    <div class="hero draggable" id="hero1"></div>
                    <div class="hero draggable" id="hero2"></div>
                    <div class="hero draggable" id="hero3"></div>
                    <div class="hero draggable" id="hero4"></div>
                    <div class="hero draggable" id="hero5"></div>
                    <div class="hero draggable" id="hero6"></div>
                
            
                    <img src="https://en.js.cx/clipart/ball.svg" class="draggable">
            
                    <div style="clear:both"></div>
                </div>
            `;

            document.head.insertAdjacentHTML('beforeend', `
                <style>
                    html, body {
                        margin: 0;
                        padding: 0;
                        // scroll-behavior: smooth;
                    }

                    body{
                        position: relative;
                        min-width: 2000px;
                        min-height: 2000px;
                        background: url(bg.jpg);

                    }
                    
                    h2 {
                        margin: 0;
                        padding: 15px 0;
                    }

                    #field {
                        background: rgba(43, 0, 117, 1);
                        width: 98%;
                        height: 500px;
                        float: left;
                        background-repeat: no-repeat;
                        background-size: 800px 500px;
                        transition: all .3s ease-in-out;
                        box-sizing: content-box;
                    }

                    h2,p {
                        background: #fff;
                    }
                    
                    /* heroes and the ball (dragables) */
                    
                    .hero {
                        background: url(https://js.cx/drag-heroes/heroes.png);
                        width: 130px;
                        height: 128px;
                        float: left;
                    }
                    
                    #hero1 {
                        background-position: 0 0;
                    }
                    
                    #hero2 {
                        background-position: 0 -128px;
                    }
                    
                    #hero3 {
                        background-position: -120px 0;
                    }
                    
                    #hero4 {
                        background-position: -125px -128px;
                    }
                    
                    #hero5 {
                        background-position: -248px -128px;
                    }
                    
                    #hero6 {
                        background-position: -244px 0;
                    }
                    
                    .draggable {
                        cursor: pointer;
                    }
                </style>
            `);

        }

    }



    function sliderDrag(){

        insertHtmlAndCss();

        eventHandlers();


        // functions

        function eventHandlers(){
            let slider = document.getElementById('slider'),
                thumb = document.querySelector('.thumb'),
                thumbRect,
                sliderRect,
                pageOffset = {y: pageYOffset, x: pageXOffset},
                thumbShiftX,
                draggingFlag = false;

            document.ondragstart = ()=>{return false};

            thumb.addEventListener('mousedown', (e)=>{
                if(draggingFlag) return;
                draggingFlag = true;
                thumbRect = thumb.getBoundingClientRect()
                thumbShiftX = e.clientX - thumbRect.left;

                document.addEventListener('mousemove', dragThumb);
                document.addEventListener('mouseup', dropThumb);
            });


            // functions


            function dragThumb(e){
                sliderRect = slider.getBoundingClientRect()
                if(e.clientX - thumbShiftX < sliderRect.left + pageOffset.x){
                    thumb.style.left = "0px";
                    return;
                }
                if(e.clientX + thumbShiftX > sliderRect.left + pageOffset.x + sliderRect.width){
                    thumb.style.left = `${sliderRect.width - thumbRect.width}px`;
                    return;
                }

                thumb.style.left = `${e.clientX - thumbShiftX - sliderRect.left - pageOffset.x}px`;
            }

            function dropThumb(e){
                document.removeEventListener('mousemove', dragThumb);
                document.removeEventListener('mouseup', dropThumb);
                draggingFlag = false;
            }
        }


        function insertHtmlAndCss(){
            document.body.innerHTML = `
                <div id="slider" class="slider">
                    <div class="thumb"></div>
                </div>
            `;

            document.head.insertAdjacentHTML('beforeend', `
                <style>
                    .slider {
                        border-radius: 5px;
                        background: #E0E0E0;
                        background: linear-gradient(left top, #E0E0E0, #EEEEEE);
                        width: 310px;
                        height: 15px;
                        margin: 25px;
                    }
                    
                    .thumb {
                        width: 10px;
                        height: 25px;
                        border-radius: 3px;
                        position: relative;
                        left: 10px;
                        top: -5px;
                        background: blue;
                        cursor: pointer;
                    }
                </style>
            `);

        }

    }
})();