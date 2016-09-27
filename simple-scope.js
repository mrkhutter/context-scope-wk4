$(document).ready(function(){

    var x = 10;
    var mark = { name: "mark" };

    function sayGoodBye(){
        return "goodbye " + mark.name;
    }

    function parentFunction(){
        var i = 10;
        function childFunction(){
            while(i > 0){
                console.log("what is i? " + i);
                i--;
            }
        }
        return { childFunction: childFunction }
    }

    function somethingElse(){
        parentFunction().childFunction();
    }

    function immediateDeeperNested(){
        var i = 10;
        deplete = function(){
            while(i > 0){
                console.log("what is i? " + i);
                i--;
            }
        }();
    }

    // parentFunction().childFunction();
    // deeperNested().deplete();
    // immediateDeeperNested().deplete;
    // console.log(sayGoodBye());

    
});