(()=>{
    'use strict';

    interestCalculationg();

    // functions

    function interestCalculationg(){
        
        insertHTMLAndCSS();

        countInterest();
        
        handleEvents();


        // functions

        function handleEvents(){

            let form = document.forms.calculator;

            form.addEventListener('input', countInterest);
        }


        function countInterest(){

            let money = document.forms.calculator.money.value > 0 ? document.forms.calculator.money.value : 0,
                months = document.forms.calculator.months.value > 0 ? document.forms.calculator.months.value : 0,
                interest = document.forms.calculator.interest.value > 0 ? document.forms.calculator.interest.value : 0,
                sum = Math.round(money * (1 + interest/100 * months / 12));

            let table = document.getElementById('diagram');

            table.rows[1].cells[0].innerHTML = money;
            table.rows[1].cells[1].innerHTML = sum;
            table.rows[2].cells[1].querySelector('div').style.height =  sum / money * 100 + 'px';

            
        }


        function insertHTMLAndCSS(){
            document.body.insertAdjacentHTML('afterbegin', `
                Deposit calculator.

                <form name="calculator">
                <table>
                    <tr>
                    <td>Initial deposit</td>
                    <td>
                        <input name="money" type="number" value="10000" required>
                    </td>
                    </tr>
                    <tr>
                    <td>How many months?</td>
                    <td>
                        <select name="months">
                        <option value="3">3 (minimum)</option>
                        <option value="6">6 (half-year)</option>
                        <option value="12" selected>12 (one year)</option>
                        <option value="18">18 (1.5 years)</option>
                        <option value="24">24 (2 years)</option>
                        <option value="30">30 (2.5 years)</option>
                        <option value="36">36 (3 years)</option>
                        <option value="60">60 (5   years)</option>
                        </select>
                    </td>
                    </tr>
                    <tr>
                    <td>Interest per year?</td>
                    <td>
                        <input name="interest" type="number" value="5" required>
                    </td>
                    </tr>
                </table>
            
            
                </form>
            
            
                <table id="diagram">
                    <tr>
                        <th>Was:</th>
                        <th>Becomes:</th>
                    </tr>
                    <tr>
                        <th id="money-before"></th>
                        <th id="money-after"></th>
                    </tr>
                    <td>
                        <div style="background: red;width:40px;height:100px"></div>
                    </td>
                    <td>
                        <div style="background: green;width:40px;height:0px" id="height-after"></div>
                    </td>
                </table>
            `);

            document.head.insertAdjacentHTML('beforeend', `
                <style>
                    td select,
                    td input {
                        width: 150px;
                    }

                    #diagram td {
                        vertical-align: bottom;
                        text-align: center;
                        padding: 10px;
                    }

                    #diagram div {
                        margin: auto;
                    }
                </style>
            `);
        }
    }
})();