let humanScore = 0, computerScore = 0;
const choices = ["rock", "paper", "scissors"];
const maxRounds = 5;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    while (1) {
        let b = prompt("Choose between rock, paper or scissors").toLowerCase();

        if (choices.includes(b)) {
            return choices.indexOf(b);
        } else {
            console.log("Invalid input, try again")
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice-1 == computerChoice || humanChoice+2 == computerChoice) {
        humanScore++;
        console.log("You win! " + choices[humanChoice] + " beats " + choices[computerChoice]);
    } else if (computerChoice-1 == humanChoice || computerChoice+2 == humanChoice) {
        computerScore++;
        console.log("You lose! " + choices[computerChoice] + " beats " + choices[humanChoice]);
    } else {
        console.log("Draw!")
    }

    console.log("Human score: " + humanScore + "\nComputer score: " + computerScore);
}


for (let thisRound = 0; thisRound < maxRounds; thisRound++) {
    playRound(getHumanChoice(), getComputerChoice());
}