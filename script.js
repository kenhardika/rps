    const btn = document.querySelector('.btn');
    btn.addEventListener("click", showScore);
    
    function showScore(te){
    let playerScore = document.getElementById("playerScore");
    if (playerScore.style.display === "none") {
        playerScore.style.display = "inline";
        playerResult.style.display = "inline";
        computerScore.style.display = "inline";
        computerResult.style.display = "inline";
    } else {}
    te.preventDefault();
    checkResult();
    }

    function computerChoice() {
    computerPlay( rpsArray= [
         "Rock",
         "Paper",
         "Scissors"
        ]);
    }
    
    //the computer randomize its options
    function computerPlay(rpsArray) { 
        return computerRandom = rpsArray[Math.floor(Math.random()*rpsArray.length)].toLowerCase(); 
        }

    //if the player choose the rock, then rock program will running etc etc
    function playRock () {
        computerChoice();
        if (computerRandom === "rock") {
            alert("It's a draw! both choose rock");
        }
        else if (computerRandom === "paper") {
            alert("You lose! rock lose to paper ");
            computerResult.innerHTML++;
        }
        else {
            alert("YOU WIN! rock win against scissors");
            playerResult.innerHTML++;
        }
        
    }
    function playPaper () {
    computerChoice();

        if (computerRandom === "rock") {
            alert("YOU WIN! paper beats rock");
            playerResult.innerHTML++;
        }
        else if (computerRandom === "paper") {
            alert("It's a draw! both choose paper");
        }
        else {
            alert("You lose! paper lose to scissors");
            computerResult.innerHTML++;
        }  
    }
    function playScissors () {
    computerChoice();

        if (computerRandom === "rock") {
            alert("You lose! scissors lose to rock");
            computerResult.innerHTML++;
        }
        else if (computerRandom === "paper") {
            alert("YOU WIN! scissors win against paper ");
            playerResult.innerHTML++;
        }
        else {
            alert("It's a draw! you both choose scissors");
        }  
    }
    //the result will show who won and counts it
    function checkResult() {
    if (parseInt(playerResult.innerHTML) === 5 ) {
    console.log("PLAYER WIN THE GAME, system restarted");
    alert("YOU WIN THE GAME! CONGRATULATION");
    
    computerResult.innerHTML = "0";
    playerResult.innerHTML = "0";

    }
    else if (parseInt(computerResult.innerHTML) === 5 ) {
    console.log("COMPUTER WIN THE GAME, system restarted");
    alert("Computer win the game, better luck next time");
    
    computerResult.innerHTML = "0";
    playerResult.innerHTML = "0";
        
    }
    else {
    }

    }
    //who finish with 5 wins, win the game 
