$(document).ready(function(){
    var targetNum = Math.floor(Math.random()*101+19);
    //generate random number at beginning
     $("#randomNumber").html(targetNum);
     //add the random number to the target number box

    //variables for the counters
    var totalScore= 0;
    var wins= 0;
    var losses= 0;
    
    //variables for random button values
    var hv1= Math.floor(Math.random()*11+1)
    var hv2= Math.floor(Math.random()*11+1)
    var hv3= Math.floor(Math.random()*11+1)
    var hv4= Math.floor(Math.random()*11+1)
    
    //variables to update the counters
    $("#win").text(wins);
    $("#lose").text(losses);
    $("#totalscore").html(totalScore);
    
    //the reset function
    function reset(){
        targetNum=Math.floor(Math.random()*101+19);
        $("#randomNumber").html(targetNum);
        //make a new random target number and display it
        hv1= Math.floor(Math.random()*11+1);
        hv2= Math.floor(Math.random()*11+1);
        hv3= Math.floor(Math.random()*11+1);
        hv4= Math.floor(Math.random()*11+1);
        totalScore= 0;
        $("#totalscore").html(totalScore);
        } 
        //make new random values for each button
        //reset the total score and display it 
        
    //assign click values for each button
    //button1(red button)
    $("#redbutton").on ('click', function(){
        totalScore = totalScore + hv1;
        $("#totalscore").html(totalScore);
        if(totalScore === targetNum) {
            youWon();
        } else if(totalScore > targetNum) {
            youLost();
        }       
      })
    
    //button2(blue button)
    $("#bluebutton").on ('click', function(){
        totalScore = totalScore + hv2;
        $("#totalscore").html(totalScore);
        if(totalScore === targetNum) {
            youWon();
        } else if(totalScore > targetNum) {
            youLost();
        }       
      })

    //button3(yellow button)
    $("#yellowbutton").on ('click', function(){
        totalScore = totalScore + hv3;
        $("#totalscore").html(totalScore);
        if(totalScore === targetNum) {
            youWon();
        } else if(totalScore > targetNum) {
            youLost();
        }       
      })

    //button4(green button)
    $("#greenbutton").on ('click', function(){
        totalScore = totalScore + hv4;
        $("#totalscore").html(totalScore);
        if(totalScore === targetNum) {
            youWon();
        } else if(totalScore > targetNum) {
            youLost();
        }       
      })

    //if total score = random number : You Win!
        //wins counter goes up
        //wins display gets updated
        //game resets
    //if total score > random number : You Lose!
        //loss counter goes up
        //loss display updated
        //game resets
        if(totalScore === targetNum) {
            youWon();
        } else if(totalScore > targetNum) {
            youLost();
        } 

        function youWon() {
            alert("You Win!!!");
            wins++;
            $("#win").html(wins);
            reset();    
        }
        function youLost() {
            alert("You've Lost =(");
            losses++;
            $("#lose").html(losses);
            reset();    
        }   
});