publish.onsubmit = function(){

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "/publish", true);

    // console.log(JSON.stringify({message: this.elements.message.value}));

    xhr.send(JSON.stringify({message: this.elements.message.value}));

    this.elements.message.value = '';

    return false;
};

subscribe();

function subscribe(){
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "/subscribe", true);

    xhr.onload = function () {
        let li = document.createElement('li');
        li.textContent = this.responseText;
        messages.appendChild(li);

        subscribe();
    };

    xhr.onerror = xhr.onabort = function(){
        setTimeout(subscribe, 500);
    };

    xhr.send('');
}