(()=>{
    'use strict';

    modalFn();

    // functions

    function modalFn(){
        
        let modal = document.createElement('div');

        modal.id = 'prompt-form-container';

        insertHTMLAndCSS();

        document.getElementById('show-button').addEventListener('click', showModal);
        

        // functions


        function showModal(){

            showPrompt(`Enter something...
            <br>Please..</div>`, (message)=>{alert(message);});
            
        }


        function showPrompt(html, callback){
            modal.innerHTML = `
                <form id="prompt-form" tabIndex='0'>
                    <div id="prompt-message">${html}
                    <input name="text" type="text">
                    <input type="submit" value="Ok">
                    <input type="button"  name="cancel" value="Cancel">
                    <div id="stopper" tabIndex='0'></div>
                </form>
            `;

            document.body.append(modal);

            document.forms[0].addEventListener('focusout', (e)=>{
                if(!document.getElementById('prompt-form-container')) return;
                e.target.style.boxShadow = "";

                if(!e.relatedTarget) {
                    document.forms[0].text.focus(); 
                    return;
                }
                
                if(e.relatedTarget.id == 'stopper') document.forms[0].text.focus();

                if(e.relatedTarget.id == 'prompt-form') document.forms[0].cancel.focus();
            });

            document.forms[0].addEventListener('focusin', (e)=>{
                e.target.style.boxShadow = "0px 0px 3px 0px blue";
            });

            document.forms[0].text.focus();

            document.forms[0].addEventListener('submit', (e)=>{
                e.preventDefault();
                let val = document.forms[0].text.value;
                if(!val) return;
                modal.remove();
                callback(val);
            });

            document.forms[0].addEventListener('click', (e)=>{
                if(e.target == document.forms[0].cancel) {
                    modal.remove();
                    callback(null);
                }
            });

        }


        function insertHTMLAndCSS(){
            document.body.insertAdjacentHTML('afterbegin', `
                <h2 tabIndex = '0'>Click the button below</h2>

                <input type="button" tabIndex = '0' value="Click to show the form" id="show-button">
            `);

            document.head.insertAdjacentHTML('beforeend', `
                <style>
                html,
                body {
                  width: 100%;
                  height: 100%;
                  padding: 0;
                  margin: 0;
                }
                
                #prompt-form {
                  display: inline-block;
                  padding: 5px 5px 5px 70px;
                  width: 300px;
                  border: 1px solid black;
                  background: white url(https://en.js.cx/clipart/prompt.png) no-repeat left 5px;
                  vertical-align: middle;
                }
                
                #prompt-form-container {
                  position: fixed;
                  top: 0;
                  left: 0;
                  z-index: 9999;
                  width: 100%;
                  height: 100%;
                  text-align: center;
                }
                
                #prompt-form-container:before {
                  display: inline-block;
                  height: 100%;
                  content: '';
                  vertical-align: middle;
                }
                
                #prompt-form input[name="text"] {
                  display: block;
                  margin: 5px;
                  width: 180px;
                }
                </style>
            `);
        }
    }
})();