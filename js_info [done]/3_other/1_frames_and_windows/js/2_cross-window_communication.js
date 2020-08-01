(function (){
    'use strict';


    insertHTML();

    document.forms[0].addEventListener('submit', (e)=>{
        e.preventDefault();
        
        window.frames[0].postMessage(document.forms[0].text.value, 'http://127.0.0.1:5500/js_info/3_other/1_frames_and_windows/iframe.html');

        document.forms[0].text.value = '';
    });

    recieveMessages();

    // functions

    function recieveMessages(){
        window.addEventListener('message', (m)=>{
            // if(m.origin != 'http://127.0.0.1:5500') {
            //     console.log('Ignored Message from ' + e.origin);
            //     return;
            // };

            alert(m.data);
        });
    }


    function insertHTML(){
        document.body.insertAdjacentHTML('afterbegin', `
            <form>
                <textarea name="text" style="width: 200px; height: 100px;"></textarea>
                <input type="submit" value="Submit!">
            </form>
            <br>
            <iframe sandbox="allow-scripts allow-same-origin" src="./iframe.html" style="width: 500px; height: auto;">
        `);
    }

})();