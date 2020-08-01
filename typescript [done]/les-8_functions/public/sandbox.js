"use strict";
var greet = function () {
    console.log("Hello!");
};
// greet = 'hello';
var hey;
// hey = 'Hey';
hey = function () {
    console.log("Hey!");
};
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
// add(5, 'hey');
add(4, 6);
add(4, 6, "Hey");
// add(4,6, false);
// add(4);
var mult = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a * b);
    console.log(c);
};
mult(4, 2);
var minus = function (a, b) {
    return a - b;
};
var result = minus(7, 2);
console.log(result);
// result = 'Oups';
var div = function (a, b) {
    return a / b;
};
