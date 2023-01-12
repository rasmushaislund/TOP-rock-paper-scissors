
// Create the three choice options as an array and store in a variable
const choice = ["rock", "paper", "scissors"];


// Function randomly chooses one of the three options from array and returns the choice
function getComputerChoice(choice) {
    return choice[Math.floor(Math.random()*choice.length)];
};


// These variables will store the current score for player and computer and keep track of how many rounds have been played
let playerScore = 0;
let computerScore = 0;
let whichRound = 1;


// This function finds the result of one game and returns the result, round number and new score
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === choice[0]) && (computerSelection === choice[1])) {
        return `You loose! ${choice[1]} beats ${choice[0]}.
        After round ${whichRound},
        the score is computer ${++computerScore} : ${playerScore} player`;
    }
    else if ((playerSelection === choice[1]) && (computerSelection === choice[2])) {
        return `You loose! ${choice[2]} beats ${choice[1]}.
        After round ${whichRound},
        the score is computer ${++computerScore} : ${playerScore} player`;
    }
    else if ((playerSelection === choice[2]) && (computerSelection === choice[0])) {
        return `You loose! ${choice[0]} beats ${choice[2]}.
        After round ${whichRound},
        the score is computer ${++computerScore} : ${playerScore} player`;
    }
    else if (playerSelection === computerSelection) {
        return `It is a tie! Try again.
        After round ${whichRound},
        the score is computer ${computerScore} : ${playerScore} player`;
    }
    else if ((playerSelection !== choice[0]) && (playerSelection !== choice[1]) &&
        (playerSelection !== choice[2])) {
        return `You misspelled your choice.
        Please try again. After round ${whichRound},
        the score is computer ${computerScore} : ${playerScore} player`;
    }
    else {
        return `You win! ${playerSelection} beats ${computerSelection}.
        After round ${whichRound},
        the score is computer ${computerScore} : ${++playerScore} player`;
    }
}




// This function will enable player to play a new game after the game has finished
function newGame() {
    let playerRestart = confirm("Do you wish to play another game?");
    playerScore = 0;
    computerScore = 0;
    whichRound = 1;
    game();
}


// This function drives a loop to create a number of games with the choices 
// and result. It also calls the function which keeps track of score and declares
// a final winner
function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Choose \"rock\", \"paper\" or \"scissors\"").toLowerCase();
        console.log("Player chose: " + playerSelection);

        let computerSelection = getComputerChoice(choice);
        console.log("Computer chose: " + computerSelection);
        
        console.log(playRound(playerSelection, computerSelection));

        console.log("This is whichRound: " + whichRound++);
        console.log("This is i: " + i);
    }    

    if ((computerScore > playerScore)) {
        console.log("Sorry, the computer won :-(")
    }
    else if ((computerScore < playerScore)) {
        console.log("Congratulations! You won the game.")
    }
    else if ((computerScore === playerScore)) {
        console.log("It is a tie. Nobody won the game")
    }
    else {
        console.log("Something went wrong! Sorry.")
    }
}

game(); // run game
newGame(); // run a new game


