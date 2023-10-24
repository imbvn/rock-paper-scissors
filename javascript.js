let playerScore = 0;
let computerScore = 0;
let roundWinner = ' ';
let playerSelection;
let computerSelection;

const rockbtn = document.getElementById('rockbtn');
const paperbtn = document.getElementById('paperbtn');
const scissorsbtn = document.getElementById('scissorsbtn');

const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        roundWinner = 'player';
    }
    else {
        roundWinner = 'computer';
    }
}

function updateScore() {
    if (roundWinner == 'tie') {
        return `it's a tie! current score: player - ${playerScore} / computer - ${computerScore}`;
    }
    else if (roundWinner == 'player') {
        playerScore++;
        return `you win! ${playerSelection} beats ${computerSelection}! current Score: player - ${playerScore} / computer - ${computerScore}`
    }
    else {
        computerScore++;
        return `you lost! ${computerSelection} beats ${playerSelection}! current score: player - ${playerScore} / computer - ${computerScore}`
    }
}

