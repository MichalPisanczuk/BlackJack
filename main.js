const dice = document.querySelector('.dice');
const diceNumber = document.querySelector('div[data-number="no"]');
const playerScore = document.querySelector('div .player-score');
const playerDiv = document.querySelectorAll('div.player');
const computerScore = document.querySelector('div .computer-score');
const playerStop = document.querySelector('button.player-stop');
const score = document.querySelector('.score');
let playerSum = 0;
let computerSum = 0;
let diceValue = 0;
let indexInterval = "";
let flag = true;

function playerTurn() {
    if (flag) { 
    diceValue = Math.floor(Math.random() * (7-1) + 1);
    diceNumber.className = `dice-number-${diceValue}`
    playerScore.textContent = `Your score is: ${playerSum += diceValue}`;
    if (playerSum > 21) gameScore();
    }
}

function computerTurn() {
    diceValue = Math.floor(Math.random() * (7-1) + 1);
    diceNumber.className = `dice-number-${diceValue}`;
    computerScore.textContent = `Computer score is: ${computerSum += diceValue}`;
    if (computerSum > 18) gameScore();
}

playerStop.addEventListener('click', () => {
    playerDiv.forEach(pDiv => pDiv.classList.toggle("active-player"));
    playerStop.style.display = "none";
    indexInterval = setInterval(computerTurn, 1000);
    flag = false;
});


function gameScore() {
    clearInterval(indexInterval);
    dice.style.display = "none";
    if (playerSum > 21) {
        score.textContent = "You lose";
        dice.style.display = "none";
        playerStop.style.display = "none";
    } else if (computerSum > 21) {
        score.textContent = "You win";
    } else if (playerSum > computerSum) {
        score.textContent = "You win";
    } else if (playerSum < computerSum) {
        score.textContent = "Computer win";
    } else {
        score.textContent = "Draw";
    }
}

dice.addEventListener('click', playerTurn);