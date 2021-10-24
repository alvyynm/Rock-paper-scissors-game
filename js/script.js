
function computerPlay() {
    
    // Create new variable and assign random number between 1 and 3 (incl.)

    let computerPick;
    computerPick = Math.floor(Math.random()*3) + 1;

    // console.log(computerPick);

    //Assign Rock, Paper, Scissors to number 1, 2 and 3, respectively

    if (computerPick === 1) {
        return "ROCK";
    } else if (computerPick === 2){
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

console.log(computerPlay()); 

//Create new variable to store player selection

let playerSelection;

playerSelection = prompt("Enter your selection: Rock, Scissors, or Paper:").toUpperCase();

console.log(playerSelection);

//Creates new variable to store computer selection

let computerSelection = computerPlay();

// console.log(computerSelection);

//Create new function game that allows the player to play a 5 round game that keeps score and reports a winner or loser at the end. 

function game () {

    // Plays one round of the game and determines who won the game: player or computer

function playRound (playerSelection, computerSelecion) {

    if (playerSelection === computerSelecion) {
        return "It's a tie! Try again";
    } else if (computerSelecion === "ROCK" && playerSelection === "SCISSORS") {
        return "You Lose! Rock beats Scissors";
    } else if (computerSelecion === "ROCK" && playerSelection === "PAPER") {
        return "You Win! Paper beats Rock";
    } else if (computerSelecion === "SCISSORS" && playerSelection === "PAPER") {
        return "You Lose! Scissors beats Paper";
    } else if (computerSelecion === "SCISSORS" && playerSelection === "ROCK") {
        return "You Win! Rock beats Scissors";
    } else if (computerSelecion === "PAPER" && playerSelection === "ROCK") {
        return "You Lose! Paper beats ROCK";
    } else if (computerSelecion === "PAPER" && playerSelection === "SCISSORS") {
        return "You Win! Scissors beats Paper";
    }
}

   
}

console.log(playRound(playerSelection, computerSelection));