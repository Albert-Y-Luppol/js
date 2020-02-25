(()=>{
    "use strict";

    runOnKeys(
        () => alert("Hello!"),
        "KeyQ",
        "KeyW"
    );


    // functions


    function runOnKeys(fn, ...keys){

        // array of pressed keys, event listener keydown, eventener keyup

        let keysSet = new Set();

        document.addEventListener('keydown', (e)=>{
            if(e.repeat) return;

            keysSet.add(e.code);

            // console.log(keysSet);

            checkAndRun();
        });

        document.addEventListener('keyup', (e)=>{
            keysSet.delete(e.code);

            // console.log(keysSet);
        });


        //function to check pressed keys to call the fn

        function checkAndRun(){

            for (let key of keys){
                if(!keysSet.has(key)) return;
            }
            
            for (let key of keysSet){
                if(!keys.includes(key)) return;
            }
            
            keysSet.clear();
            fn.call(this);
    
            // console.log(keysSet);
        }
    }
    
})();
