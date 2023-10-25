let playerScore = 0;
let computerScore = 0;
let result = '';

const rockbtn = document.getElementById('rockbtn');
const paperbtn = document.getElementById('paperbtn');
const scissorsbtn = document.getElementById('scissorsbtn');
const restartbtn = document.getElementById('restartbtn');

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}

function disableButtons() {
    rockbtn.disabled = true;
    paperbtn.disabled = true;
    scissorsbtn.disabled = true;
    restartbtn.disabled = false;
}

function restartGame() {
    rockbtn.disabled = false;
    paperbtn.disabled = false;
    scissorsbtn.disabled = false;
    restartbtn.disabled = true;

    playerScore = 0;
    computerScore = 0;
    result = '';

    document.getElementById('result').innerHTML = result;
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    

    if (playerSelection === computerSelection) {
        result = `it\'s a tie!<br><br>player - ${playerScore}<br><br>computer - ${computerScore}`;
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        playerScore += 1
        result = `you won! ${playerSelection} beats ${computerSelection}!<br><br>player - ${playerScore}<br><br>computer - ${computerScore}`;

        if (playerScore == 5) {
            result += '<br><br>you won the game! press the restart button to play again!'
            disableButtons();
        }
    }
    else {
        computerScore += 1
        result = `you lost! ${computerSelection} beats ${playerSelection}!<br><br>player - ${playerScore}<br><br>computer - ${computerScore}`;

        if(computerScore == 5) {
            result += '<br><br>you lost the game! press the restart button to play again!';
            disableButtons();
        }
    }

    document.getElementById('result').innerHTML = result;

    return;
}

rockbtn.addEventListener('click', () => playRound('rock'));
paperbtn.addEventListener('click', () => playRound('paper'));
scissorsbtn.addEventListener('click', () => playRound('scissors'));

restartbtn.addEventListener('click', () => restartGame());

//function updateScore() {
//    if (roundWinner == 'tie') {
//        return `it's a tie! current score: player - ${playerScore} / computer - ${computerScore}`;
//    }
//    else if (roundWinner == 'player') {
//        playerScore++;
//        return `you win! ${playerSelection} beats ${computerSelection}! current Score: player - ${playerScore} / computer - ${computerScore}`
//    }
//    else {
//        computerScore++;
//        return `you lost! ${computerSelection} beats ${playerSelection}! current score: player - ${playerScore} / computer - ${computerScore}`
//    }
//}