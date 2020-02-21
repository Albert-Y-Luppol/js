(()=>{
    'use strict';

    // alert(sumAllTill(10));

    // alert(factorial(5));

    // fibonachiFn();

    // linkedListFn();

    // reverseLinkedListFn();

    // functions

    function reverseLinkedListFn(){
        let list = {
            value: 1,
            next: {
              value: 2,
              next: {
                value: 3,
                next: {
                  value: 4,
                  next: null
                }
              }
            }
        };

        // printReverseLLRecursion(list);
        // printReverseLLLoop(list);
        // printReverseLLLoopFast(list);


        alert(executeTimeCompare(printReverseLLRecursion, printReverseLLLoopFast, list));

        function printReverseLLRecursion(linkedList){

            if(linkedList.next != null) printReverseLLRecursion(linkedList.next);
            
            return  document.write(`${linkedList.value} `);
        }

        function printReverseLLLoop(linkedList){
            let arr = [];
            while(linkedList != null){

                arr.unshift(linkedList.value)

                linkedList = linkedList.next;
            }
            
            arr.forEach(a => document.write(`${a} `));
        }

        function printReverseLLLoopFast(linkedList){
            let arr = [];
            let tmp = linkedList;
            while(tmp){
                arr.push(tmp.value);
                tmp = tmp.next;
            }

            for(let i = arr.length - 1; i >=0; i--){
                document.write(`${arr[i]} `);
            }
        }

    }


    function linkedListFn(){
        let list = {
            value: 1,
            next: {
              value: 2,
              next: {
                value: 3,
                next: {
                  value: 4,
                  next: null
                }
              }
            }
        };
        alert(executeTimeCompare(printLLRecursion, printLLLoop, list));

        function printLLRecursion(linkedList){

            document.write(`${linkedList.value} `);

            if(linkedList.next == null) return;

            return printLLRecursion(linkedList.next);
        }

        function printLLLoop(linkedList){

            while(linkedList != null){

                document.write(`${linkedList.value} `);

                linkedList = linkedList.next;
            }
            
        }
    }


    function executeTimeCompare(fnA, fnB, argument){
        let timeDiff = 0; //time(a) - time(b);
        for(let i = 0; i < 50; i++){

            let timeA = Date.now();

            for(let j = 0; j < 10000; j++){
                fnA(argument);
            }

            timeA = Date.now() - timeA;

            let timeB = Date.now();

            for(let j = 0; j < 10000; j++){
                fnB(argument);
            }

            timeB = Date.now() - timeB;
            timeDiff += timeA - timeB;
        }
        return timeDiff;
    }


    function fibonachiFn(){
        
        alert(executeTimeCompare(fib, fibFast, 10));

        function fib(n) {
            let arrayOfFib = [0, 1];
            while(arrayOfFib.length <= n+1){
                arrayOfFib.push(arrayOfFib[arrayOfFib.length - 1] +  arrayOfFib[arrayOfFib.length - 2]);
            }
            return arrayOfFib[n];

        }

        function fibFast(n) {
            let a = 1;
            let b = 1;
            for(let i = 3; i <= n; i++){
                let c = a + b;
                a = b;
                b = c;
            }
            return b;

        }
    }


    function factorial(n){
        if(n == 1) return n;
        return n * (factorial(n - 1));
    }


    function sumAllTill(a){
        if(a == 1) return a;
        return a + sumAllTill(a-1);
    }

})();