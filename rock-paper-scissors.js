//Have computer roll a random number between 0 and 3
let computerRoll = Math.random() * 3;
console.log(computerRoll);
//Take the number and assign it to a string inside a function. 0 through 0.99 is rock, 1 through 1.99 is paper, and 2 through 2.99 is scissors
function getComputerChoice() {
    let result;
    if (computerRoll < 1) {
        result = "Rock";
    } else if (computerRoll >= 1 && computerRoll < 2) {
        result = "Paper";
    } else {
        result = "Scissors";
    }
    return result;
}
console.log(getComputerChoice());
//Log the user's choice of either rock, paper, or scissors
//Create a scoreboard for the computer and user
//Compare the computer and user's choices to see who wins the round
//Give the winner a point on the scoreboard
//Set full game to play for 5 rounds