let buttons = document.querySelectorAll("button");
let results = document.querySelector("#result");
let playerScoreEl = document.querySelector("#playerscr");
let computerScoreEl = document.querySelector("#computerscr");
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        let result = playRound(button.id,computerPlay());
        results.textContent = result;

    });

});
function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Match Draw!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        playerScoreEl.style.color = "green"
        return `You Win ${playerSelection} beats ${computerSelection}`;
    } else{
        computerScore++;
        computerScoreEl.textContent = computerScore;
        computerScoreEl.style.color = "red";
        return `You lose ${computerSelection} beats ${playerSelection}`;
    }
}
