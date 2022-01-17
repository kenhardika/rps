const playerChoice = document.getElementById('playerChoice');
const startGame = document.querySelector('.startGame')

function computerPlay(rpsArray) { 
        return computerRandom = rpsArray[Math.floor(Math.random()*rpsArray.length)]; 
    }
computerPlay( rpsArray= [
            "Rock",
            "Paper",
            "Scissors"
        ]);
console.log(computerRandom);

startGame.addEventListener('click', result);

function result() {
    const choice = playerChoice.value;

    if (choice === "Rock") {
    console.log("your choice is rock")
    }
    else {
    console.log("ah you're choosing another thing")
    }
    return result
}