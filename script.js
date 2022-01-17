const playerChoice = document.getElementById('playerChoice');
const startGame = document.querySelector('.startGame')

function computerPlay(rpsArray) { 
        return computerRandom = rpsArray[Math.floor(Math.random()*rpsArray.length)].toLowerCase(); 
    }
computerPlay( rpsArray= [
            "Rock",
            "Paper",
            "Scissors"
        ]);
console.log(computerRandom);

startGame.addEventListener('click', result);

function result() {
    const playerSelection = playerChoice.value.toLowerCase();

    if (playerSelection === "rock" && computerRandom === "rock") {
    console.log("Both choose Rock, so Draw")
    }
    else if (playerSelection === "rock" && computerRandom === "paper") {
    console.log("ah rock lose against paper") 
    }
    else if (playerSelection === "rock" && computerRandom === "scissors") {
    console.log("ROCK WIN AGAINST SCISSORS")
    }
    else if (playerSelection === "paper" && computerRandom === "rock") {
    console.log("PAPER WIN AGAINST ROCK")
    } 
    else if (playerSelection === "paper" && computerRandom === "paper") {
    console.log("Both choose Paper, so Draw")
    }
    else if (playerSelection === "paper" && computerRandom === "scissors") {
    console.log("ah paper lose against scissors")
    }
    else if (playerSelection === "scissors" && computerRandom === "rock") {
    console.log("ah scissors lose against rock")
    }
    else if (playerSelection === "scissors" && computerRandom === "paper") {
    console.log("SCISSORS WIN AGAINST PAPER")
    }
    else if (playerSelection === "scissors" && computerRandom === "scissors") {
    console.log("Both choose scissors, so Draw")
    }
    else
    {
    console.log( "what is this word? " + playerSelection )
    }
    return result
    }