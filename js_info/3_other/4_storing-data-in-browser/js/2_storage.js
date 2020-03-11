(()=>{
    'use strict';

    document.body.innerHTML = `
        <textarea id="saveMessage" placeholder="Write here" style="width: 300px height: 200px; margin: 50px;"></textarea>
        <br>
        <button onclick="clearTextarea()">Clear</button>
    `;

    if(localStorage.getItem('message')) document.getElementById('saveMessage').value = localStorage.getItem('message');

    document.getElementById('saveMessage').addEventListener('input', (e)=>{
        localStorage.setItem('message', e.target.value);
    });
})();

function clearTextarea(){
    localStorage.removeItem('message');
    document.getElementById('saveMessage').value = "";
}    