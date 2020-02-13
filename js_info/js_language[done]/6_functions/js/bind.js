(()=>{
    'use strict';


    // loosingThis();

    // partialApplication();


    // functions

    function partialApplication(){
        function askPassword(ok, fail) {
            let password = prompt("Password?", '');
            if (password == "rockstar") ok();
            else fail();
        }
        
        let user = {
        name: 'John',
        
        login(result) {
            alert( this.name + (result ? ' logged in' : ' failed to log in') );
        }
        };
        
        askPassword(user.login.bind(user, true), user.login.bind(user, false)); // || ()=> user.login(true), ()=> user.login(false);
    }


    function loosingThis(){
        function askPassword(ok, fail) {
            let password = prompt("Password?", '');
            if (password == "rockstar") ok();
            else fail();
        }
        
        let user = {
        name: 'John',
        
        loginOk() {
            alert(`${this.name} logged in`);
        },
        
        loginFail() {
            alert(`${this.name} failed to log in`);
        },
        
        };
        
        askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); //<<<best practice || can be ()=>user.loginOk(), ()=>user.loginFail()
    }

})();
