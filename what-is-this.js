$(document).ready(function(){

    alterBody = function(){
        document.body.innerHTML += "<p>some stuff</p>";
        console.log("immediately executing function accesses the world! " + this);
    }();

    function addMoreTextToBody(){
        document.body.innerHTML += " even more text";
        
        function innerFunction(){
            console.log(this);
        };
        return {
            innerFunction: innerFunction
        };
    }

    var bankAccount = { balance: 10, accountNumber: '12345', routingNumber: '00987', startingBalance: this };

    function Person(name, age, jobTitle){
        console.log("is it a person here: " + this);
        this.name = name;
        this.age = age;
    }

    Person("mark", 30, "aslfkjsdf");

    var anotherPerson = new Person("stacey", 29, "helper");

    var person = {  
    name: "Brendan Eich",
    hello: function(thing) {
            console.log(this + " says hello " + thing);
            console.log(this.name === name);
        }
    }

    var person = {  
    name: "Mark Hutter",
    hello: function(thing) {
            console.log(this + " says hello " + thing);
            console.log(this.name === name);
        }
    }

    // this:
    person.hello("world"); 

    console.log("this is a starting balance: " + bankAccount.startingBalance);



    addMoreTextToBody().innerFunction();
    console.log("this is the document:  " + this);

});