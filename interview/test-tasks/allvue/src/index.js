import {server} from './server'

(function (){
  'use strict';
  let form = document.getElementById('stockForm');
  let operation = document.getElementById('operation');
  let amount = document.getElementById('amount');
  let price = document.getElementById('price');
  let userId = 'initUser';
  let history = document.getElementById('history')

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    const li = document.createElement('li');
    li.innerText = `${operation.value.toUpperCase()}: amount = ${amount.value}; price  ${price.value} `;
    history.append(li);
    server.handleAction(userId, operation.value, Number(amount.value), Number(price.value)).then(console.log);
    amount.value = '';
    price.value = '';
  });

  //hardcode
  server.createUser(userId).then(()=>{
    server.handleAction(userId, 'buy', 100, 20);
    server.handleAction(userId, 'buy', 150, 30);
    server.handleAction(userId, 'buy', 120, 10)
      .then(console.log);
  });
})();
