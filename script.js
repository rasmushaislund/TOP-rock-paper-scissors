
//Create the three choice options as an array and store in a variable
const choice = ["rock", "paper", "scissors"]

// Create prompt for player's choice and make case-insensitive
let PlayerChoice = prompt("Choose \"rock\", \"paper\" or \"scissors\"").toLowerCase();
let playerSelection = PlayerChoice.toLowerCase();
console.log(playerSelection);


// Function randomly chooses one of the three options from array and returns the choice
function getComputerChoice(choice) {
    return choice[Math.floor(Math.random()*choice.length)]
}


// The random choice from function is stored in a new variable
let computerSelection = getComputerChoice(choice);
console.log(computerSelection);


// This function finds the result of one game and returns the result
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === choice[0]) && (computerSelection === choice[1])) {
        return `You loose! ${choice[1]} beats ${choice[0]}.`;
    }
    else if ((playerSelection === choice[1]) && (computerSelection === choice[2])) {
        return `You loose! ${choice[2]} beats ${choice[1]}.`;
    }
    else if ((playerSelection === choice[2]) && (computerSelection === choice[0])) {
        return `You loose! ${choice[0]} beats ${choice[2]}.`;
    }
    else if ((playerSelection === computerSelection)) {
        return `It is a tie! Try again.`;
    }
    else if ((playerSelection !== choice[0, 1, 2])) {
        return `You misspelled your choice. Please try again`
    }
    else {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
}

console.log(playRound(playerSelection, computerSelection));

// These variables will store the current score for player and computer and keep track of how many rounds have been played
let playerScore = 0;
let computerScore;
let whichRound = 0;


