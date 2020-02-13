(function (){
    'use strict';

    // searchAlgorithms();

    feedHamster();


    // functions
    
    function feedHamster(){
        let hamster = {
            stomach: [],
          
            eat(food) {
            //   this.stomach = this.stomach.push(food); 

              this.hasOwnProperty('stomach') ? this.stomach.push(food) : this.stomach = [food];
            }
        };
        
        let speedy = {
        __proto__: hamster
        };
        
        let lazy = {
        __proto__: hamster
        };
        
        // This one found the food
        speedy.eat("apple");
        speedy.eat("banana");
        alert( speedy.stomach ); // apple
        
        // This one also has it, why? fix please.
        alert( lazy.stomach ); // apple
    }


    function searchAlgorithms(){
        let head = {
            glasses: 1
        };
        
        let table = {
            pen: 3,
            __proto__: head
        };
        
        let bed = {
            sheet: 1,
            pillow: 2,
            __proto__: table
        };
        
        let pockets = {
            money: 2000,
            __proto__: bed
        };

        // alert(pockets.pen);
        // alert(bed.glasses);
        alert(timeDiff());

        function timeDiff(){
            let timeDiff = 0;
            for (let i = 0; i< 100; i++){
    
                let timeF1 = Date.now();
    
                for (let j = 0; j < 10000; j++){
                    document.write(pockets.glasses);
                }
    
                timeF1 = Date.now() - timeF1;
    
                let timeF2 = Date.now();
    
                for (let j = 0; j < 10000; j++){
                    document.write(head.glasses);
                }
    
                timeF2 = Date.now() - timeF2;
    
                timeDiff += (timeF1 - timeF2);
    
            }
    
            return timeDiff;
        }
    }
})();