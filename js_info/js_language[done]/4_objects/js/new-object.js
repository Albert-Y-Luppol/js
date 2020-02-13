(function () {
    'use strict';

    //two func, one object

    // checkConvertion();

    //calculator;


    // calculatorFunc();


    //Accum;

    accum();

    function accum(){

        function Accumulator (startngValue){
            this.value = startngValue;
            this.read = function(){
                this.value += parseInt(prompt('add?'));
            }
        }

        let accumulator = new Accumulator(1); // initial value 1

        accumulator.read(); // adds the user-entered value
        accumulator.read(); // adds the user-entered value

        alert(accumulator.value); // shows the sum of these values
    }

    function calculatorFunc(){

        function Calculator(){
            
            this.read = function(){
                this.a = +prompt('enter a');
                this.b = +prompt('enter b');
            }

            this.sum = function(){
                return this.a + this.b;
            }

            this.mul = function(){
                return this.a * this.b;
            }
        }

        let calculator = new Calculator();
        calculator.read();

        alert( "Sum=" + calculator.sum() );
        alert( "Mul=" + calculator.mul() );
    }

    function checkConvertion(){
        function A() { 
            this.string = 'custom string';
            this.number = 10;
            this[Symbol.toPrimitive] = function (hint) {
                // alert(`hint: ${hint}`);
                return hint == "string" ? this.string : this.number;
            };
        }
        function B() { 
            this.nmbr = 10;
            this.strng = 'custom string';
            this[Symbol.toPrimitive] = function (hint) {
                // alert(`hint: ${hint}`);
                return hint == "string" ? this.strng : this.nmbr;
            }; 
         }
        
        let a = new A;
        let b = new B;
        // alert(a);
        alert(+a);
        alert(+b);
        // alert(`A - ${a}`);
        alert( a == b ); // true

    }

    
})();