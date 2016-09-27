$(document).ready(function() {
    
// directly copied from: https://gist.github.com/branneman/5814160
var fn = function(arg1, arg2) {
    var str = '<p>aap ' + this.noot + ' ' + arg1 + ' ' + arg2 + '</p>';
    // document.body.innerHTML += str;
    return str;
};
var context = {
    'noot': 'noot'
};
var args = ['mies', 'wim'];

// Calls a function with a given 'this' value and arguments provided individually.
// Support: everywhere
var callResult = fn.call(context, args[0], args[1]);
console.log("call result: " + callResult);

// Calls a function with a given 'this' value and arguments provided as an array
//  (or an array like object).
// Support: everywhere
var applyResult = fn.apply(context, args);
console.log("apply result: " + applyResult);

// Creates a new function that, when called, has its 'this' keyword set to the
//  provided value, with a given sequence of arguments preceding any provided
//  when the new function was called.
// Support: ECMAScript >= 5 (thus >= IE9)
var boundFn1 = fn.bind(context, args[0], args[1]);
var bindResult = boundFn1();
console.log("bind result: " + bindResult);

// a good bind reference: http://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind

});