$(document).ready(function(){

    var ticketMasterAccountCredits = [0, 5, 70, 100, 45];

    var resultAmounts = [];

    function doubleAmount(amounts){
        for(var i = 0; i < amounts.length; i++){
            resultAmounts.push(amounts[i] * 2);
        }
    }

    doubleAmount(ticketMasterAccountCredits);
    
    ticketMasterAccountCredits.map(function(amount){
        var intervalAmount = amount / 5;
        resultAmounts.push(((intervalAmount * 5) + amount));
    });

    console.log(resultAmounts);

});