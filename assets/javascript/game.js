$(document).ready(function(){
    var targetNum = Math.floor(Math.random()*101+19);
    //generate random number at beginning
     $('#randomNumber').text(targetNum);
     //add the random number to the target number box

    var totalScore: 0;
    var wins: 0;
    var losses: 0;
    //variables for the counters
 


 //reset function
    //targetNum generate new random
    //button values reset
    //totalScore = 0

    var totalScore: 0;
    var wins: 0;
    var losses: 0;



 //random number generated between 19-120
 //each button needs random value assigned between 1-12
    //each button clicked adds to total score
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