$(document).ready(function(){ 

    // example 1
    var arr = [];
    for(var i = 0; i < 3; i++) {
        arr.push(function() {
            console.log(i);
        });
    }

    // var arr = [];
    // var createFunction = function(v) {
    //     return function() {
    //         console.log(v);
    //     }
    // }
    // for(var i = 0; i < 3; i++) {
    //     var logger = createFunction(i);
    //     arr.push(logger);
    // }

    console.log(arr[0]());
    console.log(arr[1]());
    console.log(arr[2]());

    // great article: https://medium.freecodecamp.com/lets-learn-javascript-closures-66feb44f6a44#.88izvone0

    // example 2
    function numberGenerator() {
    // Local “free” variable that ends up within the closure
    var num = 1;
    function checkNumber() { 
        console.log(num);
    }
    num++;
    return checkNumber;
    }

    var number = numberGenerator();
    number(); // 2
});
