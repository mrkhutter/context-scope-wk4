$(document).ready(function(){

// http://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language

function changeStuff(a, b, c) {
  a = a * 10;
  b.item = "changed";
  c = {item: "changed"};
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

// console.log(num);
// console.log(obj1.item);    
// console.log(obj2.item);


});