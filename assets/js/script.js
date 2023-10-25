console.log("Connected!")

const choices = document.querySelectorAll(".choice");
const roundResult = document.getElementById("round-result");

choices.forEach(choice => {
    choice.addEventListener("click", playGame);
});

function playGame(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();

    const winner = getWinner(playerChoice, computerChoice);

    displayResult(playerChoice, computerChoice, winner);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

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

function displayResult(playerChoice, computerChoice, winner) {
    roundResult.innerText = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${winner}`;
}
