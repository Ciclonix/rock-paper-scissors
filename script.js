let humanScore = 0, computerScore = 0
const choices = ["rock", "paper", "scissors"];
const maxPoints = 5;
const choice = document.querySelector("#choice");
const result = document.querySelector("#result");
const points = document.querySelector("#points");


function updateScore() {
    points.textContent = "Human score: " + humanScore + " Computer score: " + computerScore;
}


function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice-1 == computerChoice || humanChoice+2 == computerChoice) {
        humanScore++;
        result.textContent = "You win! " + choices[humanChoice] + " beats " + choices[computerChoice];
    } else if (computerChoice-1 == humanChoice || computerChoice+2 == humanChoice) {
        computerScore++;
        result.textContent = "You lose! " + choices[computerChoice] + " beats " + choices[humanChoice];
    } else {
        result.textContent = "Draw!";
    }

    if (humanScore == 5) {
        humanScore = 0;
        computerScore = 0;
        alert("You won the game!");
    } else if (computerScore == 5) {
        humanScore = 0;
        computerScore = 0;
        alert("The computer won the game!");
    }

    updateScore()
}


choice.addEventListener("click", (event) => {
    playRound(event.target.id, getComputerChoice())
})