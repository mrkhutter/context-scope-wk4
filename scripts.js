$(document).ready(function(){

// http://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language

function changeStuff(a, b, c) {
  a = a * 10;
  b.item = "changed";
  c = {item: "changed"};
}

var num = 10; // memory_location 11223A
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

// num; memory location 33456B
changeStuff(num, obj1, obj2);

// console.log(num);
// console.log(obj1.item);    
// console.log(obj2.item);

  function alterThing(aThing){
    aThing.name = "mark";
    return aThing;
  }

  function addThing(number) {
    return number + 10;
  }

  var x = 35;
  console.log("result of addThing: " + addThing(x));
  console.log("value of x: " + x);

  var person = { name: "stacy" };
  var stacey = Object.assign({}, person);

  console.log("result of alterThing: " + alterThing(person).name);
  console.log("value of person.name " + stacey.name);

});