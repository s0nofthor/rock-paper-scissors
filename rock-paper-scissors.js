const choices = document.getElementsByClassName('choice');
const outcome = document.getElementById('outcome');
const scoreboard = document.getElementById('scoreboard');

//Create scoreboard
let humanScore = 0;
let computerScore = 0;

for (i of choices) {
    i.addEventListener('click', function(e) {
        //Choose clicked value
        let humanChoice = e.target.id;
        //Pick a random number
        let computerChoice = Math.random() * 3;

        //Translate random number to value
        function getComputerChoice() {
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
        const matchup = document.createElement('div');
        outcome.appendChild(matchup);
        matchup.innerText = `${humanChoice} vs ${getComputerChoice()}`;

        //Quantify win/lose conditions
        function roundWinner() { 
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
        const lilWinner = document.createElement('div');
        outcome.appendChild(lilWinner);
        lilWinner.innerText = `${roundWinner()}`;
        scoreboard.innerText = `User: ${humanScore} Bot: ${computerScore}`;

        //Declare ultimate victor
        function finalResult(humanScore, computerScore) { 
            if (humanScore === 5) {
                result = "You've come out on top, you can stop!";
            } else if (computerScore === 5) {
                result = "Give it another shot if you don't want to be beat by a bot";
            };
            return result;
        };
        const bigWinner = document.createElement('div');

        if (humanScore === 5 || computerScore === 5) {
            outcome.appendChild(bigWinner);
            bigWinner.innerText = `${finalResult(humanScore, computerScore)}`;
        };
    })
}