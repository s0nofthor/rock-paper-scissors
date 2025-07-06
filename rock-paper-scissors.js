//Create a scoreboard for the computer and user
let humanScore = 0;
let computerScore = 0;

//Set full game to play for 5 rounds
function playGame() {
    //Ask user what choice they want
    let humanChoice = prompt("Rock, paper, or scissors?", "");
        //Have computer roll a random number between 0 and 3
    let computerChoice = Math.random() * 3;

    //Take the number and assign it to a string inside a function. 0 through 0.99 is rock, 1 through 1.99 is paper, and 2 through 2.99 is scissors
    function getComputerChoice() {
        let result;
        if (computerChoice < 1) {
            result = "Rock";
        } else if (computerChoice >= 1 && computerChoice < 2) {
            result = "Paper";
        } else {
            result = "Scissors";
        }
        return result;
    }
    console.log(getComputerChoice());
    //Log the user's choice of either rock, paper, or scissors
    function getHumanChoice() {
        return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    }
    console.log(getHumanChoice());
    
    //Compare the computer and user's choices to see who wins the round and give them the point
    function playRound(humanChoice, computerChoice) {
        if ((getHumanChoice() === "Rock" && getComputerChoice() === "Paper") 
            || (getHumanChoice() === "Paper" && getComputerChoice() === "Scissors") 
            || (getHumanChoice() === "Scissors" && getComputerChoice() === "Rock")) {
            result = `You lose! ${getComputerChoice()} beats ${getHumanChoice()}`;
        } else if ((getHumanChoice() === "Rock" && getComputerChoice() === "Scissors") 
            || (getHumanChoice() === "Paper" && getComputerChoice() === "Rock") 
            || (getHumanChoice() === "Scissors" && getComputerChoice() === "Paper")) {
            result = `You win! ${getHumanChoice()} beats ${getComputerChoice()}`;
        } else {
            result = `It's a tie!`
        }
        return result;
    };
    console.log(playRound());

    //Give the winner a point on the scoreboard
    if (playRound() === `You win! ${getHumanChoice()} beats ${getComputerChoice()}`) {
        humanScore += 1;
    } else if (playRound() === `You lose! ${getComputerChoice()} beats ${getHumanChoice()}`) {
        computerScore += 1;
    }
    console.log(`User: ${humanScore} Bot: ${computerScore}`)
};

do {
    playGame.call();
} while (humanScore < 3 && computerScore < 3);