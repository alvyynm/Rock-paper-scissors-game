
function computerPlay() {
    
    // Create new variable and assign random number between 1 and 3 (incl.)

    let computerPick;
    computerPick = Math.floor(Math.random()*3) + 1;

    // console.log(computerPick);

    //Assign Rock, Paper, Scissors to number 1, 2 and 3, respectively

    if (computerPick === 1) {
        return "Rock";
    } else if (computerPick === 2){
        return "Paper";
    } else {
        return "Scissors";
    }

}

// console.log(computerPlay()); 

//Create new variable to store player selection

let playerSelection;

playerSelection = prompt("Enter your selection: Rock, Scissors, or Paper:");

console.log(playerSelection);

//Creates new variable to store computer selection

let computerSelection = computerPlay();


// Determines who won the game, player or computer

function playRound (playerSelection, computerSelecion) {

    if (playerSelection === computerSelecion) {
        return "It's a tie! Try again";
    } else if (computerSelecion === "Rock" && playerSelection === "Scissors") {
        return "You Lose! Rock beats Scissors";
    } else if (computerSelecion === "Rock" && playerSelection === "Paper") {
        return "You Win! Paper beats Rock";
    } else if (computerSelecion === "Scissors" && playerSelection === "Paper") {
        return "You Lose! Scissors beats Paper";
    } else if (computerSelecion === "Scissors" && playerSelection === "Rock") {
        return "You Win! Rock beats Scissors";
    } else if (computerSelecion === "Paper" && playerSelection === "Rock") {
        return "You Lose! Paper beats Rock";
    } else if (computerSelecion === "Paper" && playerSelection === "Scissors") {
        return "You Win! Scissors beats Paper";
    }


}