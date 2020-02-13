(function (){
    'use strict'

    // unreadFlagFunction();

    whenWasRead();

    // functions

    function whenWasRead(){
        let messages = [
            {text: "Hello", from: "John"},
            {text: "How goes?", from: "John"},
            {text: "See you soon", from: "Alice"}
        ];

        let wasRead = new WeakMap();

        read(messages[2]);

        read(messages[0]);

        read(messages[2]);

        alert('M - 2 ' + wasRead.get(messages[1]));

        alert('M - 3 ' + wasRead.get(messages[2]));

        alert('M - 1 ' + wasRead.get(messages[0]));

        messages.pop();

        alert('M - 3 after removal from array ' + wasRead.get(messages[2]));


        function read(messageObj){
            let dateStamp = wasRead.get(messageObj) || [];
            dateStamp.push(new Date);
            wasRead.set(messageObj, dateStamp);
        }
    }


    function unreadFlagFunction(){
        let messages = [
            {text: "Hello", from: "John"},
            {text: "How goes?", from: "John"},
            {text: "See you soon", from: "Alice"}
        ];

        let readMessages = new WeakSet();
        let copy = {};
        Object.assign(copy, messages[1]);
        readMessages.add(messages[0]);
        readMessages.add(messages[1]);
        alert(readMessages.has(messages[1]));
        messages.splice(1,1);
        alert(readMessages.has(copy));

        
    }

})();