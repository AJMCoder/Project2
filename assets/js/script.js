/* Global Variables */
const choices = document.querySelectorAll(".choice");
const roundResult = document.getElementById("round-result");
let wins = 0;
let loses = 0;

choices.forEach(choice => {
    choice.addEventListener("click", playGame);
});

/* Script to display Player choice and Computer choice */
function playGame(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();

    /**
     * Sends player choice and computer choice
     * Updates scores for wins and loses
     * Returns winner string
     */
    const winner = getWinner(playerChoice, computerChoice);


    /**
     * Updates the user on the winner
     * Shows player and computer choices
     */
    displayResult(playerChoice, computerChoice, winner);
}

/* Random number generator to select choice for Computer (3 options) */
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

/* Code adapted from tutorial by Bro Code on YouTube */

/* How the system determines which value is greater than to select winning value */
function getWinner(playerChoice, computerChoice) {
    let string = '';
    switch (playerChoice) {
        case 'rock':
            if (computerChoice === 'scissors') {
                wins++;
                string = 'You win!';
            } else if(computerChoice === 'rock') {
                string = 'Tie!';
            }
            else {
                string = 'Computer wins!';
                loses++;
            }
            break;
        case 'paper':
            if (computerChoice === 'rock') {
                string = 'You win!';
                wins++;
            } else if(computerChoice === 'paper') {
                string = 'Tie!';
            }
            else {
                string = 'Computer wins!';
                loses++;
            }
            break;
        case 'scissors':
            if (computerChoice === 'paper') {
                string = 'You win!';
                wins++;
            } else if (computerChoice === 'scissors') {
                string = 'Tie!';
            }
            else {
                string = 'Computer wins!';
                loses++;
            }
            break;
    }
    /* Script to show the updated and running score for Player and Computer */
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loses").innerHTML = loses;

    return string;
}

/* Result text that displays choices from both users and who won */
function displayResult(playerChoice, computerChoice, winner) {
    roundResult.innerText = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${winner}`;
}