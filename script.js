

// Create the three choice options as an array and store in a variable
const choice = ["rock", "paper", "scissors"];

// Variables for targeting buttons
let btnRock = document.querySelector("#btn-rock");
let btnPaper = document.querySelector("#btn-paper");
let btnScissors = document.querySelector("#btn-scissors");
let btnNewGame = document.querySelector("#btn-restart");

// Variables for targeting dynamic texts
let roundWinner = document.querySelector("#round-winner");
let playerChoice = document.querySelector("#choice-player");
let computerChoice = document.querySelector("#choice-computer");

// Variables for score and round no. div's
let showPointsToWin = document.querySelector("#play-box-header-points");
let showPlayerScore = document.querySelector(".score-player");
let showComputerScore = document.querySelector(".score-computer");
let showRoundNumber = document.querySelector("#round-counter-no");

// Variables used for signaling the final winner of the game
let playerBorderWin = document.querySelector(".show-winner-player");
let computerBorderWin = document.querySelector(".show-winner-computer");
let playerTextWin = document.querySelector("#player-win");
let computerTextWin = document.querySelector("#computer-win");

// Variables to store score, round no. and needed points for winning
let playerScore = 0;
let computerScore = 0;
let whichRound = 1;
let pointsForWin = 5;

// Reset game UI upon page load/reload
document.getElementsByTagName("body").onload = newGame(); // Call newGame() when page (re)loads

// Function randomly chooses one of the three options from array and returns the choice
function getComputerChoice(choice) {
    return choice[Math.floor(Math.random()*choice.length)];
};

// Button event listeners
btnRock.addEventListener("click", function () {playRound(choice[0], getComputerChoice(choice))});
btnPaper.addEventListener("click", function () {playRound(choice[1], getComputerChoice(choice))});
btnScissors.addEventListener("click", function () {playRound(choice[2], getComputerChoice(choice))});
btnNewGame.addEventListener("click", newGame);

// This function finds the result of one game and returns the result, round number and new score
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === choice[0]) && (computerSelection === choice[1])) {
        playerChoice.textContent = choice[0];
        computerChoice.textContent = choice[1];
        roundWinner.textContent = `You loose! ${choice[1]} beats ${choice[0]}.`;
        computerScore++;
    }
    else if ((playerSelection === choice[1]) && (computerSelection === choice[2])) {
        playerChoice.textContent = choice[1];
        computerChoice.textContent = choice[2];
        roundWinner.textContent = `You loose! ${choice[2]} beats ${choice[1]}.`;
        computerScore++;
    }
    else if ((playerSelection === choice[2]) && (computerSelection === choice[0])) {
        playerChoice.textContent = choice[2];
        computerChoice.textContent = choice[0];
        roundWinner.textContent = `You loose! ${choice[0]} beats ${choice[2]}.`;
        computerScore++;
    }
    else if (playerSelection === computerSelection) {
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        roundWinner.textContent = `It is a tie! Try again.`;
    }
    else {
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        roundWinner.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
    }
    game();
    whichRound++;
}

// This function will restart the game when the page is loaded
// and it will enable the player to restart a game anytime
function newGame() {
    playerScore = 0;
    computerScore = 0;
    whichRound = 1;    
    showPointsToWin.textContent = pointsForWin;
    showPlayerScore.textContent = playerScore;
    showComputerScore.textContent = computerScore;
    showRoundNumber.textContent = whichRound;
    playerChoice.textContent = "";
    computerChoice.textContent = "";
    playerBorderWin.style.border = "none";
    computerBorderWin.style.border = "none";
    playerTextWin.textContent = "";
    computerTextWin.textContent = "";
    roundWinner.textContent = "";
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false; 
}


// Main function for playing a round and make output to scoreboards etc.
function game() {
    showRoundNumber.textContent = whichRound;
    showPlayerScore.textContent = playerScore;
    showComputerScore.textContent = computerScore;

    if ((computerScore === pointsForWin)) {
        computerBorderWin.setAttribute("style", "border: .2rem solid rgba(90, 211, 140, 1); border-radius: .5rem");
        computerTextWin.textContent = "Winner!";
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
    else if ((playerScore === pointsForWin)) {
        playerBorderWin.setAttribute("style", "border: .2rem solid rgba(90, 211, 140, 1); border-radius: .5rem");
        playerTextWin.textContent = "Winner!";
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
}