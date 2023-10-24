let playerScore = 0;
let computerScore = 0;
let roundWinner = ' ';
let playerSelection;
let computerSelection;

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
        return `It's a Tie! Current Score: Player - ${playerScore} / Computer - ${computerScore}`;
    }
    else if (roundWinner == 'Player') {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}! Current Score: Player - ${playerScore} / Computer - ${computerScore}`
    }
    else {
        computerScore++;
        return `You Lost! ${computerSelection} beats ${playerSelection}! Current Score: Player - ${playerScore} / Computer - ${computerScore}`
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(updateScore())
    }
}

game();