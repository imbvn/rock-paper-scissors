let playerScore = 0;
let computerScore = 0;
let roundWinner = ' ';

const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'Tie';
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        roundWinner = 'Player';
    }
    else {
        roundWinner = 'Computer';
    }
}

function updateScore() {
    if (roundWinner == 'Tie') {
        return "It's a Tie!";
    }
    else if (roundWinner == 'Player') {
        return `You Win! ${playerSelection} beats ${computerSelection}!`
    }
    else {
        return `You Lost! ${computerSelection} beats ${playerSelection}!`
    }
}


const playerSelection = 'rock';
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);

console.log(roundWinner);