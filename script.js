
//Creating the three choice options as an array and store in a variable
let choice = ["rock", "paper", "scissors"]



// This function randomly chooses one of the three options from array "choice" and returns the choice
function getComputerChoice(choice) {
    return choice[Math.floor(Math.random()*choice.length)]
}


// The random choice from function "getComputerSelection" is stores in a new variable
let computerSelection = console.log(getComputerChoice(choice));

