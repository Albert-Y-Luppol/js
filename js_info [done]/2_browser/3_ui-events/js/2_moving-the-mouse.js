(()=>{
    'use strict';


    tooltipBehaviour();

    smartTooltip();

    // functions

    function smartTooltip(){
        
        insertHtmlAndCss();

        eventHandlers();


        // functions

        function eventHandlers(){

            class HoverIntent {
                constructor({
                    elem,
                    over,
                    out,
                    maxCursorTipShowSpeed = 1, //  px/ms
                }){
                    this.trackingElement = elem;
                    this.showTip = over;
                    this.hideTip = out;
                    this.maxCursorTipShowSpeed = maxCursorTipShowSpeed;

                    this._checkingDelayTime = 100; //ms
                    this._cursorAlreadyInFlag = false;
                    this._cursorStartCoordinates = {x: undefined, y: undefined};
                    this._cursorEndCoordinates = {x: undefined, y: undefined};
                    this._checkPositionTimeout = false;

                    this.cursorIn = this.cursorIn.bind(this);
                    this.cursorOut = this.cursorOut.bind(this);

                    this.trackingElement.addEventListener('mousemove', this.cursorIn);
                }

                cursorIn(e){


                    //remember last cursor coordinates

                        this._cursorEndCoordinates.x = e.clientX;
                        this._cursorEndCoordinates.y = e.clientY;

                    // set position checking timeout
                
                        if(!this._checkPositionTimeout) {

                            //init

                            // console.log('Timeout initiated');

                            this._cursorStartCoordinates.x = e.clientX;
                            this._cursorStartCoordinates.y = e.clientY;
                            this._checkPositionTimeout = setTimeout(()=>{


                                //check => showTip / hideTip

                                // console.log('Timeout finished, evaluation started');

                                let currentDistance = Math.sqrt(
                                    (this._cursorStartCoordinates.x - this._cursorEndCoordinates.x) ** 2 
                                    +
                                    (this._cursorStartCoordinates.y - this._cursorEndCoordinates.y) ** 2),
                                    maxDistance = this.maxCursorTipShowSpeed * this._checkingDelayTime;


                                //action-start

                                if(currentDistance > maxDistance) {
                                    this.hideTip();
                                } else {
                                    this.showTip();
                                };

                                //action-end



                                this._checkPositionTimeout = false;

                            }, this._checkingDelayTime);
                        }

                    //prevent "falsy" events

                        if(this._cursorAlreadyInFlag) return;

                        this._cursorAlreadyInFlag = true;


                    //action-start

                        // console.log("I'm in");

                    //action-end

                    //default actions

                        this.trackingElement.addEventListener('mouseout', this.cursorOut);
                }

                cursorOut(e){

                    if(e.relatedTarget){
                        if(e.relatedTarget.closest('#' + this.trackingElement.getAttribute('id'))) return;
                    }


                    //action-start

                    // console.log("I'm out");

                    this.hideTip();

                    //action-end


                    this.trackingElement.removeEventListener('mouseout', this.cursorOut);

                    clearTimeout(this._checkPositionTimeout);
                    this._checkPositionTimeout = false;
                    this._cursorStartCoordinates = {x: undefined, y: undefined};
                    this._cursorEndCoordinates = {x: undefined, y: undefined};
                    this._cursorAlreadyInFlag = false;
                }

                // just for class fullness, it's never used here

                destroy(){
                    this.hideTip();
                    this.trackingElement.removeEventListener('mousemove', this.cursorIn);
                    this.trackingElement.removeEventListener('mouseout', this.cursorOut);
                    clearTimeout(this._checkPositionTimeout);
                    this._checkPositionTimeout = undefined;
                    this._cursorStartCoordinates = {x: undefined, y: undefined};
                    this._cursorEndCoordinates = {x: undefined, y: undefined};
                    this._cursorAlreadyInFlag = undefined;
                }
            }



            let elem = document.getElementById('elem');

            new HoverIntent({
                elem,
                over() {
                    let tooltip = document.getElementById('tooltip');
                    tooltip.style.left = elem.getBoundingClientRect().left + 5 + 'px';
                    tooltip.style.top = elem.getBoundingClientRect().bottom + 5 + 'px';
                    tooltip.hidden = false;
                },
                out() {
                    let tooltip = document.getElementById('tooltip');
                    tooltip.hidden = true;
                }
            });
        }


        function insertHtmlAndCss(){
            document.body.innerHTML = `
                <div id="elem" class="clock">
                    <span class="hours">12</span> :
                    <span class="minutes">30</span> :
                    <span class="seconds">00</span>
                </div>
                
                <div id="tooltip" hidden>Tooltip</div>
            `;

            document.head.insertAdjacentHTML('beforeend', `
                <style>
                    .hours {
                        color: red;
                    }
                    
                    body {
                        margin: 0;
                    }
                    
                    .minutes {
                        color: green;
                    }
                    
                    .seconds {
                        color: blue;
                    }
                    
                    .clock {
                        border: 1px dashed black;
                        padding: 5px;
                        display: inline-block;
                        background: yellow;
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                    
                    #tooltip {
                        position: absolute;
                        padding: 10px 20px;
                        border: 1px solid #b3c9ce;
                        border-radius: 4px;
                        text-align: center;
                        font: italic 14px/1.3 sans-serif;
                        color: #333;
                        background: #fff;
                        z-index: 100000;
                        box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
                    }
                </style>
            `);

        }     
    }


    function tooltipBehaviour(){

        insertHtmlAndCss();

        eventHandlers();


        // functions

        function eventHandlers(){

            let house = document.getElementById('house'),
                tooltip;

            house.addEventListener('mouseover', (e)=>{

                let target = e.target.closest('[data-tooltip]');

                if( !target ) return;

                tooltip = document.createElement('span');
                tooltip.className = "tooltip";
                tooltip.innerHTML = target.dataset.tooltip;
                
                document.body.append(tooltip);

                positionTooltip(tooltip, target);

            });

            house.addEventListener('mouseout', (e)=>{
                                   
                if(!tooltip) return;
                
                // alert('removing!');
                tooltip.remove();
                tooltip = undefined;
            });


            // functions
            function positionTooltip( tip, elem ){
                let coords = { x: undefined, y: undefined },
                    elemRect = elem.getBoundingClientRect();

                if( tip.offsetHeight + 5 < elemRect.top ) {
                    coords.y = elemRect.top - (tip.offsetHeight + 5);
                } else {
                    coords.y = elemRect.top + elemRect.height + 5;
                }

                if(elemRect.width /2 + elemRect.left -  tip.offsetWidth /2 < 0) {
                    coords.x = 0;
                } else {
                    coords.x = elemRect.width /2 + elemRect.left -  tip.offsetWidth /2;
                }

                tip.style.left = coords.x + 'px';
                tip.style.top = coords.y + 'px';
            }
        }


        function insertHtmlAndCss(){
            document.body.innerHTML = `
                <div data-tooltip="Here is the house interior" id="house">
                    <div data-tooltip="Here is the roof" id="roof"></div>
                
                    <p>Once upon a time there was a mother pig who had three little pigs.</p>
                
                    <p>The three little pigs grew so big that their mother said to them, "You are too big to live here any longer. You must go and build houses for yourselves. But take care that the wolf does not catch you."
                
                    <p>The three little pigs set off. "We will take care that the wolf does not catch us," they said.</p>
                
                    <p>Soon they met a man. <a href="https://en.wikipedia.org/wiki/The_Three_Little_Pigs" data-tooltip="Read on…">Hover over me</a></p>
                
                </div>
            `;

            document.head.insertAdjacentHTML('beforeend', `
                <style>
                    body {
                        height: 2000px;
                        /* the tooltip should work after page scroll too */
                    }
                
                    .tooltip {
                        position: fixed;
                        z-index: 100;
                    
                        padding: 10px 20px;
                    
                        border: 1px solid #b3c9ce;
                        border-radius: 4px;
                        text-align: center;
                        font: italic 14px/1.3 sans-serif;
                        color: #333;
                        background: #fff;
                        box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
                    }
                
                    #house {
                        margin-top: 100px;
                        width: 400px;
                        border: 1px solid brown;
                    }
                
                    #roof {
                        width: 0;
                        height: 0;
                        border-left: 200px solid transparent;
                        border-right: 200px solid transparent;
                        border-bottom: 20px solid brown;
                        margin-top: -20px;
                    }
                
                    p {
                        text-align: justify;
                        margin: 10px 3px;
                    }
                </style>
            `);

        }

    }
})();