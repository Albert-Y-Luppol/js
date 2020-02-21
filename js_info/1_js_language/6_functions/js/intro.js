(function (){
    'use strict';
    
    ask ('Are you Agree?', showOk, showCancel);

})();

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

function showOk() {
    alert('You are agree!');
}

function showCancel() {
    alert('You are canceled execution!');
}


(function() {
    'use strict';
    function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
      }
      
      ask(
        "Do you agree?",
        () => alert("You agreed."),
        () => alert("You canceled the execution.")
      );
})();
