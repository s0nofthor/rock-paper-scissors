const choices = document.getElementsByClassName('choice');

//Create scoreboard
let humanScore = 0;
let computerScore = 0;

for (i of choices) {
    i.addEventListener('click', function(e) {
        let humanChoice = e.target.id; //Choose clicked value
        let computerChoice = Math.random() * 3; //Pick a random number

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
        console.log(`${humanChoice} vs ${getComputerChoice()}`);

        function roundWinner() { //Quantify win/lose conditions
            if ((humanChoice === "Rock" && getComputerChoice() === "Scissors")
                || (humanChoice === "Paper" && getComputerChoice() === "Rock")
                || (humanChoice === "Scissors" && getComputerChoice() === "Paper")) {
                result = `You win! ${humanChoice} beats ${getComputerChoice()}`;
                ++humanScore;
            } else if ((humanChoice === "Rock" && getComputerChoice() === "Paper")
                || (humanChoice === "Paper" && getComputerChoice() === "Scissors")
                || (humanChoice === "Scissors" && getComputerChoice() === "Rock")) {
                result = `You lose! ${getComputerChoice()} beats ${humanChoice}`;
                ++computerScore;
            } else {
                result = `It's a tie!`
            };
            return result;
        };
        console.log(roundWinner());
        console.log(`User: ${humanScore} Bot: ${computerScore}`);
    })
}

function finalResult(humanScore, computerScore) { //Declare ultimate victor
    if (humanScore === 3) {
        result = "You've come out on top, treat yourself!";
    } else if (computerScore === 3) {
        result = "Give it another shot if you don't want to be beat by a bot";
    };
    return result;
};
console.log(finalResult(humanScore, computerScore));