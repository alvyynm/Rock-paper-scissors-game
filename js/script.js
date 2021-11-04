
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

//Creates new variable to store computer selection

let computerSelection = computerPlay();

//Create new function game that allows the player to play a 5 round game that keeps score and reports a winner or loser at the end. 

function game () {

    // playerSelection = prompt("Enter your selection: Rock, Scissors, or Paper:").toUpperCase();

    for (let i = 1; i <= 5; i++) {
        //Creates new constant and adds an event listener

        const buttons = document.querySelectorAll('button');

        buttons.forEach((button) => {

            // and for each one we add a 'click' listener
            button.addEventListener('click', () => {
                playerSelection = (button.id).toUpperCase();
                // console.log(playerSelection);
                
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
                return "You Lose! Paper beats Rock";
                    
            } else if (computerSelecion === "PAPER" && playerSelection === "SCISSORS") {
                userScore++; 
                return "You Win! Scissors beats Paper";
                    
            } else {
                return "Please input 'Rock, Scissors, or 'Paper' without quotation marks";
            }
            };

            const div = document.querySelector('div');
            div.textContent = playRound(playerSelection, computerSelection);
            
            console.log(userScore);
            console.log(computerScore);

            // console.log(playRound(playerSelection, computerSelection));
            });
          });

        };
        
        // Determine who wins the game
        const finalScore = document.querySelector('.finalresults');

        
        if (userScore > computerScore) {

            finalScore.textContent = "Congratulations!! You win the game";
                
            // alert("Congratulations!! You win the game");
            } else if (userScore = computerScore) {
                finalScore.textContent = "Draw!! Play again.";
                // alert("Draw!! Play again.");
            } else {
                finalScore.textContent = "You lose. Please try again.";
                // alert("You lose. Please try again.");
            };
        
    };

    console.log(game());