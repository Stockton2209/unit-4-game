$(document).ready(function(){
    var targetNum = Math.floor(Math.random()*101+19);
    //generate random number at beginning
     $("#randomNumber").text(targetNum);
     //add the random number to the target number box

    var totalScore: 0;
    var wins: 0;
    var losses: 0;
    //variables for the counters

    var hv1= Math.floor(Math.random()*11+1)
    var hv2= Math.floor(Math.random()*11+1)
    var hv3= Math.floor(Math.random()*11+1)
    var hv4= Math.floor(Math.random()*11+1)
    //variables for random button values

    $("#win").text(wins);
    $("#lose").text(losses);
    $("#totalscore").text(totalScore);
    //variables to update the counters

    //the reset function
    function reset(){
        targetNum=Math.floor(Math.random()*101+19);
        $("#randomNumber").text(targetNum);
        //make a new random target number and display it
        hv1= Math.floor(Math.random()*11+1);
        hv2= Math.floor(Math.random()*11+1);
        hv3= Math.floor(Math.random()*11+1);
        hv4= Math.floor(Math.random()*11+1);
        totalScore= 0;
        $("#totalscore").text(totalScore);
        } 
        //make new random values for each button
        //reset the total score and display it
        
 
//if total score = random number : You Win!
    //wins counter goes up
    //game resets (without refreshing)
        //new random number, new button values, total score back to 0,
    if(totalScore === targetNum) {
        alert("You Win!!!");
        wins++;
        $(".win").html(win);
        reset();
    }
//if total score > random number : You Lose!
    //loss counter goes up
    //game resets (without refreshing)
        //new random number, new button values, total score back to 0,
}