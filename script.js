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
            alert("It's a draw!");
        }
        else if (computerRandom === "paper") {
            alert("You lose!");
            computerResult.innerHTML++;
        }
        else {
            alert("YOU WIN!");
            playerResult.innerHTML++;
        }
        
    }
    function playPaper () {
    computerChoice();

        if (computerRandom === "rock") {
            alert("YOU WIN!");
            playerResult.innerHTML++;
        }
        else if (computerRandom === "paper") {
            alert("It's a draw!");
        }
        else {
            alert("You lose!");
            computerResult.innerHTML++;
        }  
    }
    function playScissors () {
    computerChoice();

        if (computerRandom === "rock") {
            alert("You lose!");
            computerResult.innerHTML++;
        }
        else if (computerRandom === "paper") {
            alert("YOU WIN!");
            playerResult.innerHTML++;
        }
        else {
            alert("It's a draw!");
        }  
    }
    //the result will show who won and counts it
    function checkResult() {
    if (parseInt(playerResult.innerHTML) === 5 ) {
    console.log("PLAYER WIN THE GAME");
    
    computerResult.innerHTML = "0";
    playerResult.innerHTML = "0";

    }
    else if (parseInt(computerResult.innerHTML) === 5 ) {
    console.log("COMPUTER WIN THE GAME");
    
    computerResult.innerHTML = "0";
    playerResult.innerHTML = "0";
        
    }
    else {
    }

    }
    //who finish with 5 wins, win the game 
