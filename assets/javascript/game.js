$(document).ready(function(){
    var targetNum = Math.floor(Math.random()*101+19);
    //generate random number at beginning
     $("#randomNumber").text(targetNum);
     //add the random number to the target number box

    var totalScore= 0;
    var wins= 0;
    var losses= 0;
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
        
    //assign click values for each button
    //button1(red button)
    $("#redbutton").on ('click', function(){
        totalScore = totalScore + hv1;
        $("#totalscore").text(totalScore);       
      })
    
    //button2(blue button)
    $("#bluebutton").on ('click', function(){
        totalScore = totalScore + hv2;
        $("#totalscore").text(totalScore);       
      })

    //button3(yellow button)
    $("#yellowbutton").on ('click', function(){
        totalScore = totalScore + hv3;
        $("#totalscore").text(totalScore);       
      })

    //button4(green button)
    $("#greenbutton").on ('click', function(){
        totalScore = totalScore + hv4;
        $("#totalscore").text(totalScore);       
      })

      //if total score = random number : You Win!
        //wins counter goes up
        //wins display gets updated
        //game resets 
    if(totalScore === targetNum) {
        alert("You Win!!!");
        wins++;
        $("#win").html(wins);
        reset();
    }

    //if total score > random number : You Lose!
        //loss counter goes up
        //loss display updated
        //game resets 
    if(totalScore > targetNum) {
        alert("You've Lost =(");
        losses++;
        $("#lose").html(losses);
        reset();
    }
});