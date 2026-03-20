//Create scoreboard
let humanScore = 0;
let computerScore = 0;

function playRound() { //Tie elements of round together
    let humanChoice = prompt("Rock, paper, or scissors?", "");
    let computerChoice = Math.random() * 3;

    function getHumanChoice() { //Standardize input
        return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    };
    console.log(getHumanChoice());

    function getComputerChoice() { //Translate random number to value
        let result;
        if (computerChoice < 1) {
            result = "Rock";
        } else if (computerChoice >= 1 && computerChoice <2) {
            result = "Paper";
        } else {
            result = "Scissors";
        }
        return result;
    };
    console.log(getComputerChoice());

    function roundWinner() { //Quantify win/lose conditions
        if ((getHumanChoice() === "Rock" && getComputerChoice() === "Scissors")
            || (getHumanChoice() === "Paper" && getComputerChoice() === "Rock")
            || (getHumanChoice() === "Scissors" && getComputerChoice() === "Paper")) {
            result = `You win! ${getHumanChoice()} beats ${getComputerChoice()}`;
            ++humanScore;
        } else if ((getHumanChoice() === "Rock" && getComputerChoice() === "Paper")
            || (getHumanChoice() === "Paper" && getComputerChoice() === "Scissors")
            || (getHumanChoice() === "Scissors" && getComputerChoice() === "Rock")) {
            result = `You lose! ${getComputerChoice()} beats ${getHumanChoice()}`;
            ++computerScore;
        } else {
            result = `It's a tie!`
        };
        return result;
    };
    console.log(roundWinner());
    console.log(`User: ${humanScore} Bot: ${computerScore}`);
};

do { //Loop gameplay for an entire game
    playRound();
} while (humanScore < 3 && computerScore < 3);

function finalResult(humanScore, computerScore) {
    if (humanScore === 3) {
        result = "You've come out on top, treat yourself!";
    } else if (computerScore === 3) {
        result = "Give it another shot if you don't want to be beat by a bot";
    };
    return result;
};
console.log(finalResult(humanScore, computerScore));