(function() {
    'use strict'
    // my code start


    // main 

    // methodBind();

    // secondBind ();

    // whatRunFirst ();

    // setValueIntoFunc();

    // checkPassword();

    partialAplication()


    // functions

    function partialAplication() {
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
          
          askPassword(user.login.bind(user, true), user.login.bind(user,false)); // ?
    }


    function checkPassword() {
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
          
          askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
    }


    function setValueIntoFunc () {
        
        function sayHi() {
            alert( this.name );
          }
          alert(sayHi.test);
          sayHi.test = 5;
          
          let bound = sayHi.bind({
            name: "John"
          });
          
          alert( bound.test ); // what will be the output? why?
    }


    function whatRunFirst(){
        let sequence = {
            a: 2,
            plus() {
                this.a += 2;
                return sequence;
            },
            mult(){
                this.a *=2;
                return sequence;
            }
            
        }
        sequence.plus().mult();
        alert(sequence.a);
    }

    function secondBind () {
        function f() {
            alert(this.name);
          }
          
        f = f.bind({name:"Me"}).bind( {name: "John"} ).bind( {name: "Ann" } );
        // alert(f.name);
        let l = f.bind({name: "You"});
        f(); //
        l();
    }


    function methodBind () {
        function f() {
            alert( this ); // ?
        }
          
        let user = {
            g: f.bind(null)
        };
          
        user.g();
    }



    // my code end
})();