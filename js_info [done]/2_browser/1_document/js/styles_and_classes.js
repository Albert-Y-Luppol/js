(()=>{
    'use strict';

    creteNotifications();

    // functions

    function creteNotifications(){

        // shows an element with the text "Hello" near the right-top of the window

        createNotification('Hello!');

        showNotification({
            top: 10, // 10px from the top of the window (by default 0px)
            right: 10, // 10px from the right edge of the window (by default 0px)
            html: "Hello!", // the HTML of notification
            className: "welcome" // an additional class for the div (optional)
        });

        function showNotification({top = 0, right = 0, className, html}){

            let message = document.createElement('div');

            message.innerHTML = html;
            message.className = className + " notification";
            message.style.top = top + "px";
            message.style.right = right + "px";

            document.body.append(message);
            setTimeout(()=>{message.remove()}, 1500);
        }

        function createNotification(text){

            let note = document.createElement('div');

            note.innerText = text;

            note.className = "welcome";

            createStyle('welcome');

            note.style.display = "none";

            document.body.append(note);

            let message  = setInterval(()=>{
                note.style.display = "";
                setTimeout( ()=>{note.style.display = "none"}, 1500);
            }, 2000);

            function createStyle(className){
                let style = document.createElement('style');

                style.type = "text/css";
                style.innerHTML = `.${className} {
                    position: absolute;
                    font-size: 20px;
                    top: 10px;
                    right: 10px;
                    background: #b80000;
                    color: yellow;
                }`;

                document.body.prepend(style);
            
            }
        }
    }
})();