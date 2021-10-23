
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

// function playRound (playerSelection, computerSelecion) {

// }