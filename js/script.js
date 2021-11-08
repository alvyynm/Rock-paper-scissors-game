// Variables

let computerPick;
let playerSelection;
let computerSelection;
let userScore = 0;
let computerScore = 0;

//Create and initialize a varible to store user score and computer score

//Creates new function that allows the player to play a 5 round game that keeps score and reports a winner or loser at the end. 

function game () {

        //Creates new constant and adds an event listener

        const buttons = document.querySelectorAll('button');

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                playerSelection = (button.id).toUpperCase();
                console.log(computerSelection);


                function computerPlay() {
    
                    // Create new variable and assign random number between 1 and 3 (incl.)
                    computerPick = Math.floor(Math.random() * 3);
                    console.log(computerPick);
                    //Assign Rock, Paper, Scissors to number 1, 2 and 3, respectively
                
                    if (computerPick === 0) {
                        return "ROCK";
                    } else if (computerPick === 1) {
                        return "PAPER";
                    } else if (computerPick === 2) {
                        return "SCISSORS";
                    }
                };
                
                //Create new variable to store player selection and computer selection
                
                computerSelection = computerPlay();
                
 // Plays one round of the game and determines who won the game: player or computer

        function playRound (playerSelection, computerSelection) {


            if (playerSelection === computerSelection) {  
                return "It's a tie! Try again";
                    
            } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
                computerScore++;    
                return "You Lose! Rock beats Scissors";
                    
            } else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
                userScore++;    
                return "You Win! Paper beats Rock";
                    
            } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
                computerScore++;    
                return "You Lose! Scissors beats Paper";
                    
            } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
                userScore++;    
                return "You Win! Rock beats Scissors";
                    
            } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
                computerScore++;   
                return "You Lose! Paper beats Rock";
                    
            } else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
                userScore++; 
                return "You Win! Scissors beats Paper";
                };
            };

            const div = document.querySelector('div');
            div.textContent = playRound(playerSelection, computerSelection);
            
            console.log(userScore);
            console.log(computerScore);

            function updateScore() {
                document.getElementById("pScore").textContent = computerScore;
                document.getElementById("cScore").textContent = userScore;
              }
              
              updateScore();
            // console.log(playRound(playerSelection, computerSelection));
            });
 // Determine who wins the game
     
    //   const finalScore = document.querySelector('.finalresults');
 
        // if (userScore > computerScore) {

        //     // finalScore.textContent = "Congratulations!! You win the game";
                
        //     alert("Congratulations!! You win the game");
        //     } else if (userScore = computerScore) {
        //         // finalScore.textContent = "Draw!! Play again.";
        //         alert("Draw!! Play again.");
        //     } else if (userScore < computerScore) {
        //         // finalScore.textContent = "You lose. Please try again.";
        //         alert("You lose. Please try again.");
        //     };

          });

    };    

game();