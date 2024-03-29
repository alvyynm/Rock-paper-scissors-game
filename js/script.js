let computerPick;
let playerSelection;
let computerSelection;
let userScore = 0;
let computerScore = 0;
let gameRound = 0;

//Creates new function that allows the player to play a 5 round game that keeps score and reports a winner or loser at the end.

const resetBtn = document.querySelector(".reset_btn");

function game() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playerSelection = button.id.toUpperCase();
      console.log(computerSelection);

      function computerPlay() {
        computerPick = Math.floor(Math.random() * 3);
        console.log(computerPick);

        if (computerPick === 0) {
          return "ROCK";
        } else if (computerPick === 1) {
          return "PAPER";
        } else if (computerPick === 2) {
          return "SCISSORS";
        }
      }

      computerSelection = computerPlay();

      // Plays one round of the game and determines who won the game: player or computer

      function playRound(playerSelection, computerSelection) {
        if (gameRound === 5) {
          document.querySelector("body").style.backgroundColor = "#60b347";
          if (computerScore === userScore) {
            document.querySelector(".message").textContent =
              "Game Over!! It's a draw";
          } else if (computerScore > userScore) {
            document.querySelector(".message").textContent =
              "Game Over!! You lose";
          } else {
            document.querySelector(".message").textContent =
              "Game Over!! You win 🏆";
          }
          document.querySelector("#rock").style.display = "none";
          document.querySelector("#paper").style.display = "none";
          document.querySelector("#scissors").style.display = "none";
          document.querySelector(".display_message").style.display = "none";
          return;
        } else {
          if (playerSelection === computerSelection) {
            gameRound++;
            return "It's a tie! Try again";
          } else if (
            computerSelection === "ROCK" &&
            playerSelection === "SCISSORS"
          ) {
            computerScore++;
            gameRound++;
            return "You Lose! Rock beats Scissors";
          } else if (
            computerSelection === "ROCK" &&
            playerSelection === "PAPER"
          ) {
            userScore++;
            gameRound++;
            return "You Win! Paper beats Rock";
          } else if (
            computerSelection === "SCISSORS" &&
            playerSelection === "PAPER"
          ) {
            computerScore++;
            gameRound++;
            return "You Lose! Scissors beats Paper";
          } else if (
            computerSelection === "SCISSORS" &&
            playerSelection === "ROCK"
          ) {
            userScore++;
            gameRound++;
            return "You Win! Rock beats Scissors";
          } else if (
            computerSelection === "PAPER" &&
            playerSelection === "ROCK"
          ) {
            computerScore++;
            gameRound++;
            return "You Lose! Paper beats Rock";
          } else if (
            computerSelection === "PAPER" &&
            playerSelection === "SCISSORS"
          ) {
            userScore++;
            gameRound++;
            return "You Win! Scissors beats Paper";
          }
        }
      }

      const div = document.querySelector("div");
      div.textContent = playRound(playerSelection, computerSelection);

      console.log(userScore);
      console.log(computerScore);

      function updateScore() {
        document.getElementById("pScore").textContent = computerScore;
        document.getElementById("cScore").textContent = userScore;
      }

      updateScore();
    });
  });
}

game();

// Game reset functionality
resetBtn.addEventListener("click", function () {
  gameRound = 0;
  computerScore = 0;
  userScore = 0;
  document.getElementById("pScore").textContent = 0;
  document.getElementById("cScore").textContent = 0;
});

/* TO-DOs 
  Make the game play a five round game
  Provide a way to restart the game after the fifth round
  DIsplay winner at the end of round five
*/
