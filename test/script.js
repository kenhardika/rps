const playerChoice = document.getElementById('playerChoice');
const startGame = document.querySelector('.startGame')
let countNum = document.querySelector('.gamesPlayed');

startGame.addEventListener('click', game);

function game(){
    
    function computerPlay(rpsArray) { 
        return computerRandom = rpsArray[Math.floor(Math.random()*rpsArray.length)].toLowerCase(); 
        }
    computerPlay( rpsArray= [
        "Rock",
        "Paper",
        "Scissors"
    ]);
console.log(computerRandom);
result();
document.getElementById('playerChoice').value = "";
countNum.innerHTML++;

function result() {
    const playerSelection = playerChoice.value.toLowerCase();

    if (playerSelection === "rock" && computerRandom === "rock") {
    console.log("Both choose Rock, so Draw")
    alert("Draw! both choose Rock");
    }
    else if (playerSelection === "rock" && computerRandom === "paper") {
    console.log("ah rock lose against paper") 
    alert("Lose! rock lose against paper")
    }
    else if (playerSelection === "rock" && computerRandom === "scissors") {
    console.log("ROCK WIN AGAINST SCISSORS")
    alert("WIN! rock win against scissors")
    }
    else if (playerSelection === "paper" && computerRandom === "rock") {
    console.log("PAPER WIN AGAINST ROCK")
    alert("WIN! paper win against rock")
    } 
    else if (playerSelection === "paper" && computerRandom === "paper") {
    console.log("Both choose Paper, so Draw")
    alert("Draw! both choose paper")
    }
    else if (playerSelection === "paper" && computerRandom === "scissors") {
    console.log("ah paper lose against scissors")
    alert("Lose! paper lose against scissors")
    }
    else if (playerSelection === "scissors" && computerRandom === "rock") {
    console.log("ah scissors lose against rock")
    alert("Lose, scissors lose against rock")
    }
    else if (playerSelection === "scissors" && computerRandom === "paper") {
    console.log("SCISSORS WIN AGAINST PAPER")
    alert("WIN! scissors win against paper")
    }
    else if (playerSelection === "scissors" && computerRandom === "scissors") {
    console.log("Both choose scissors, so Draw")
    alert("Draw! both choose scissors")
    }
    else
    {
    console.log( "what is this word? " + playerSelection + " it is invalid")
    }
    return result
    }
}