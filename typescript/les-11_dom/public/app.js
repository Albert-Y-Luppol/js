"use strict";
var anchor = document.querySelector("a");
// console.log(anchor.href);
if (anchor) {
    console.log(anchor.href);
}
var link = document.querySelector("a"); //mean not null
console.log(link.href);
// const form = document.querySelector("form")!;
var form = document.querySelector("form.new-item-form");
console.log(form.children);
// inputs
var type = document.querySelector("#type");
var toform = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
