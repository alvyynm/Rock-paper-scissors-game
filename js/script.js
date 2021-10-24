
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


//Create new variable to store player selection

let playerSelection;

//Create and initialize a varible to store user score and computer score

let userScore = 0;
let computerScore = 0;

//Create new function game that allows the player to play a 5 round game that keeps score and reports a winner or loser at the end. 

function game () {

   // A for loop that calls function playRound 5 times
    
   for (let i = 1; i <= 5; i++) {


    playerSelection = prompt("Enter your selection: Rock, Scissors, or Paper:").toUpperCase();


    //Creates new variable to store computer selection

    let computerSelection = computerPlay();

        // Plays one round of the game and determines who won the game: player or computer

    function playRound (playerSelection, computerSelecion) {

                if (playerSelection === computerSelecion) {
                    userScore+=(1/2); 
                    computerScore+=(1/2);   
                    return "It's a tie! Try again";
                        
                 } else if (computerSelecion === "ROCK" && playerSelection === "SCISSORS") {
                    computerScore++;    
                    return "You Lose! Rock beats Scissors";
                        
                 } else if (computerSelecion === "ROCK" && playerSelection === "PAPER") {
                    userScore++;    
                    return "You Win! Paper beats Rock";
                        
                 } else if (computerSelecion === "SCISSORS" && playerSelection === "PAPER") {
                    computerScore++;    
                    return "You Lose! Scissors beats Paper";
                        
                 } else if (computerSelecion === "SCISSORS" && playerSelection === "ROCK") {
                    userScore++;    
                    return "You Win! Rock beats Scissors";
                        
                 } else if (computerSelecion === "PAPER" && playerSelection === "ROCK") {
                    computerScore++;   
                    return "You Lose! Paper beats ROCK";
                        
                 } else if (computerSelecion === "PAPER" && playerSelection === "SCISSORS") {
                    userScore++; 
                    return "You Win! Scissors beats Paper";
                        
                 } else {
                     return "Please input 'Rock, Scissors, or 'Paper' without quotation marks";
                 }
                }

                console.log(playRound(playerSelection, computerSelection));
            }
        
            if (userScore > computerScore) {
                
                alert("Congratulations!! You win the game");
            } else if (userScore = computerScore) {
                alert("Draw!! Play again.");
            } else {
                alert("You lose. Please try again.");
            }
        console.log(score);
        
    }

    console.log(game());