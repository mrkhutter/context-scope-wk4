$(document).ready(function(){

    var ticketMasterAccountCredits = [0, 5, 70, 100, 45];
    var resultAmounts = [];
    ticketMasterAccountCredits.map(function(amount){
        var intervalAmount = amount / 5;
        resultAmounts.push(((intervalAmount * 5) + amount));
    });

    console.log(resultAmounts);
});