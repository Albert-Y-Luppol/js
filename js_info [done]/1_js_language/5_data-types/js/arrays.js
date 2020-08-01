(function(){
    'use strict'

    // arrayOperations();
    
    // arrayContext();

    // arraySum();

    // maximalSubArray();
    // funcs

    function maximalSubArray(){
        alert(getMaxSubSum([-1, 2, 3, -9]));// = 5 (the sum of highlighted items)
        alert(getMaxSubSum([2, -1, 2, 3, -9]));// = 6
        alert(getMaxSubSum([-1, 2, 3, -9, 11]));// = 11
        alert(getMaxSubSum([-2, -1, 1, 2]));// = 3
        alert(getMaxSubSum([100, -9, 2, -3, 5]));// = 100
        alert(getMaxSubSum([1, 2, 3]));// = 6 (take all)

        function getMaxSubSum(array){
            let maxSum = 0;
            let currentSum = 0;
            for (let a of array) {
                if( currentSum + a >= 0){
                    currentSum += +a;
                    maxSum = maxSum >= currentSum ? maxSum : currentSum;
                } else {
                    currentSum = 0;
                }
            }
            return maxSum;
        }
    }


    function arraySum(){
        let array = [];
        fulfillArray(array);
        document.body.innerHTML = `The sum of array ${array} = ${getSum(array)};`;

        function fulfillArray(array) {
            let n = prompt('Insert new number in array:');
            if(Number(n) || n == "0"){
                array.push(n);
                fulfillArray(array);
            }
            return array;
        }
        function getSum(array) {
            let sum = 0;
            for (let a of array){
                sum += +a;
            }
            return sum;
        }
    }


    function arrayContext(){
        let arr = ["a", "b"];

        arr.push(function() {
        alert( this );
        })

        arr[2](); // ?
    }


    function arrayOperations(){
        let styles = ['Jazz', 'Blues'];
        alert(styles);
        styles.push('Rock-n-Roll');
        alert(styles);
        if(checkForOddArray(styles)){
            styles[getIndexOfTheMiidleOddArray(styles)] = 'Classics';
        }
        alert(styles);
        alert(styles.shift());
        alert(styles);
        styles.unshift('Rap','Reggae');
        alert(styles);


        //not Odd return null
        function getIndexOfTheMiidleOddArray(array){
            if(checkForOddArray(array)) {
                return (array.length - 1) / 2;
            }
            return null;
        }

        function checkForOddArray(array){
            return array.length % 2 !=0 ? true : false;
        }
    }
})();