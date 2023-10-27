/* */
const choices = document.querySelectorAll(".choice");
const roundResult = document.getElementById("round-result");

choices.forEach(choice => {
    choice.addEventListener("click", playGame);
});

/* Script to display Player choice and Computer choice */
function playGame(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();

    const winner = getWinner(playerChoice, computerChoice);

    displayResult(playerChoice, computerChoice, winner);
}

/* Random number generator to select choice for Computer (3 options) */
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

/* How the system determines which value is greater than to select winning value */
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a draw!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

/* Result text that displays choices from both users and who won */
function displayResult(playerChoice, computerChoice, winner) {
    roundResult.innerText = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${winner}`;
}

/* Script to show the updated and running score for Player and Computer */
let 