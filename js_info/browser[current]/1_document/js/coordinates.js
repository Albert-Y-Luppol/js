(()=>{
    'use strict';


    // fieldCoordinatesFn();

    positionByFn();


    // functions


    function positionByFn(){
        document.body.insertAdjacentHTML('afterbegin', `
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae
                esse sequi officia sapiente.
            </p>
            
            <blockquote>
                Teacher: Why are you late?
                Student: There was a man who lost a hundred dollar bill.
                Teacher: That's nice. Were you helping him look for it?
                Student: No. I was standing on it.
            </blockquote>
            
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae esse sequi officia sapiente.
            </p>
        `);

        let styleElement = document.createElement('style');

        styleElement.innerText = `
            body {
                height: 2000px;
            }
            .note {
                position: fixed;
                z-index: 1000;
                padding: 5px;
                border: 1px solid black;
                background: white;
                text-align: center;
                font: italic 14px serif;
            }
            
            blockquote {
                border: 5px solid grey;
                background: #f9f9f9;
                border-left: 10px solid #ccc;
                margin: 0 0 0 100px;
                padding: .5em 10px;
                quotes: "„" "“" "‚" "‘";
                display: inline-block;
                white-space: pre;
            }
            
            blockquote:before {
                color: #ccc;
                content: open-quote;
                font-size: 4em;
                line-height: .1em;
                margin-right: .25em;
                vertical-align: -.4em;
            }
        `;
        document.head.append(styleElement);


        function positionAt(anchor, position, note){
            note.style.position = "absolute";
            let anchorPosition = anchor.getBoundingClientRect();
            switch (position){

                case 'top-out': 
                    note.style.left = window.pageXOffset + anchorPosition.left + anchor.offsetWidth / 2 - note.offsetWidth / 2 + 'px';
                    note.style.top = window.pageYOffset + anchorPosition.top - note.offsetHeight + 'px';
                    break;

                case 'right-out': 
                    note.style.left = window.pageXOffset + anchorPosition.right + 'px';
                    note.style.top = window.pageYOffset + anchorPosition.top + anchor.offsetHeight / 2 - note.offsetHeight / 2 + 'px';
                    break;

                case 'top-in': 
                    note.style.left = window.pageXOffset + anchorPosition.left + anchor.offsetWidth / 2 - note.offsetWidth / 2 + 'px';
                    note.style.top = window.pageYOffset + anchorPosition.top + anchor.clientTop + 'px';
                    break;

                case 'right-in': 
                    note.style.left = window.pageXOffset + anchorPosition.left + anchor.clientLeft + anchor.clientWidth - note.offsetWidth + 'px';
                    note.style.top = window.pageYOffset + anchorPosition.top + anchor.offsetHeight / 2 - note.offsetHeight / 2 + 'px';
                    break;

                case 'bottom-in': 
                    note.style.left = window.pageXOffset + anchorPosition.left + anchor.offsetWidth / 2 - note.offsetWidth / 2 + 'px';
                    note.style.top = window.pageYOffset + anchorPosition.top + anchor.clientTop + anchor.clientHeight - note.offsetHeight + 'px';
                    break;

                default: 
                note.style.left = window.pageXOffset + anchorPosition.left + anchor.offsetWidth / 2 - note.offsetWidth / 2 + 'px';
                note.style.top = window.pageYOffset + anchorPosition.bottom + 'px';
            }
        }


        function showNote(anchor, position, html) {

            let note = document.createElement('div');
            note.className = "note";
            note.innerHTML = html;
            document.body.append(note);
      
            positionAt(anchor, position, note);
        }
    
        // test it
        let blockquote = document.querySelector('blockquote');
    
        showNote(blockquote, "top-out", "note above out");
        showNote(blockquote, "right-out", "note at the right out");
        showNote(blockquote, "bottom", "note below out");
        showNote(blockquote, "top-in", "note above in");
        showNote(blockquote, "right-in", "note at the right in");
        showNote(blockquote, "bottom-in", "note below in");
    
    }


    function fieldCoordinatesFn(){
        let styleElem = document.createElement('style');

        styleElem.innerText =   `
                                    body {
                                        padding: 20px 0 0 20px;
                                        cursor: pointer;
                                    }
                                    
                                    #field {
                                        overflow: hidden;
                                        width: 200px;
                                        height: 150px;
                                        border-top: 10px solid black;
                                        border-right: 10px solid gray;
                                        border-bottom: 10px solid gray;
                                        border-left: 10px solid black;
                                        background-color: #00FF00;
                                        font: 10px/1.2 monospace;
                                    }
                                    
                                    .triangle-right {
                                        position: relative;
                                        width: 0;
                                        height: 0;
                                        border-top: 6px solid transparent;
                                        border-bottom: 6px solid transparent;
                                        border-left: 20px solid red;
                                        text-indent: -20px;
                                        font: 12px/1 monospace;
                                    }
                                `;
        document.head.append(styleElem);

        document.body.insertAdjacentHTML('afterbegin', `
            <div id="field">
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            </div>
        `);

        let field = document.getElementById('field');

        findCornerCoordinates(field);


        function findCornerCoordinates(element){

            let coordinates = {
                outerTopLeft: {x: null, y: null},
                innerTopLeft: {x: null, y: null},
                outerBottomRight: {x: null, y: null},
                innerBottomRight: {x: null, y: null}
            };

            let rect = element.getBoundingClientRect();

            coordinates.outerTopLeft.x = window.pageXOffset + rect.left;
            coordinates.innerTopLeft.x = window.pageXOffset + rect.left + element.clientLeft;
            coordinates.outerTopLeft.y = window.pageYOffset + rect.top;
            coordinates.innerTopLeft.y = window.pageYOffset + rect.top + element.clientTop;

            coordinates.outerBottomRight.x = window.pageXOffset + rect.right;
            coordinates.innerBottomRight.x = coordinates.innerTopLeft.x + element.clientWidth;
            coordinates.outerBottomRight.y = window.pageYOffset + rect.bottom;
            coordinates.innerBottomRight.y = coordinates.innerTopLeft.y + element.clientHeight;

            // alert(`
            //     Outer-Top-Left : (${coordinates.outerTopLeft.x}; ${coordinates.outerTopLeft.y})\n
            //     Inner-Top-Left : (${coordinates.innerTopLeft.x}; ${coordinates.innerTopLeft.y})\n
            //     Outer-Bottom-Right : (${coordinates.outerBottomRight.x}; ${coordinates.outerBottomRight.y})\n
            //     Inner-Bottom-Right : (${coordinates.innerBottomRight.x}; ${coordinates.innerBottomRight.y})\n
            // `);

            let redDot = document.createElement('span');

            redDot.style.cssText = `position: absolute; background-color: red; width: 6px; height: 6px; transform: translate(-50%, -50%); border-radius: 50%; left: ${coordinates.outerTopLeft.x}; top: ${coordinates.outerTopLeft.y};`;

            let counter = 2;

            setInterval(()=>{
                let i = 0;
                for(let dot in coordinates){
                    i++;
                    if(i == counter) {
                        redDot.style.left = coordinates[dot].x + 'px';
                        redDot.style.top = coordinates[dot].y + 'px';
                        counter++;
                        if(counter == 5) counter = 1;
                        break;
                    }
                }
            }, 1200);

            redDot.style.display = "none";

            document.body.prepend(redDot);

            setInterval(()=>{
                redDot.style.display = "";
                setTimeout( ()=>{redDot.style.display = "none";}, 150);
            }, 300);
        }
    }
})();