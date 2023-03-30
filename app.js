
let count = 0;

//Player Selection

let playerSelection;

let select = document.querySelectorAll('.buttons button');

select.forEach(function(button) {
    button.addEventListener('click',function() {
        playerSelection = button.getAttribute('class');
        playRound(playerSelection);
        count++;
        if(count > 4) {
            choose.textContent = 'Click to Restart';
            showWinner();
        }
    })
});

//Play round

let round = document.querySelector('.round');
let winner;
let tieCount = 0;
let tieDis = document.querySelector('.tie');
function playRound(playerSelection) {
    round.textContent = 'Round ' + (count+1); //Update current round
    let computerSelection = getComSelection(); //Get computer's choice
    if(computerSelection == playerSelection) {
        winner = 'draw';
        tieCount++;
        tieDis.textContent = 'Tie : ' + tieCount; 
    } else if((computerSelection == 'rock' && playerSelection == 'paper') || 
               (computerSelection == 'paper' && playerSelection == 'scissors') ||
               (computerSelection == 'scissors' && playerSelection == 'rock')) {
                winner = 'player';
               } else {
                winner = 'computer';
               }
    updateScore(winner);
    showScore();
    
}

//Computer Selection

function getComSelection() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


//Update Score

let playerScore = 0;
let computerScore = 0;

function updateScore(winner) {
    if(winner == 'player') {
        playerScore++;
    } else if(winner == 'computer') {
        computerScore++;
    } 
}

//Show score

let showPlayerScore = document.querySelector('.playerScore');
let showComputerScore = document.querySelector('.computerScore');

function showScore() {
    showPlayerScore.textContent = playerScore;
    showComputerScore.textContent = computerScore;
}

//Winner

let choose = document.querySelector('.display');
let winnerDisp = document.querySelector('.winner');
function showWinner() {
    if(computerScore == playerScore) {
        console.log('comp ' + computerScore + ' player ' + playerScore);
        winnerDisp.textContent = 'It\'s a tie'; 
    } else if(computerScore > playerScore) {
        console.log('comp ' + computerScore + ' player ' + playerScore);
        winnerDisp.textContent = 'You Lose';
    } else{
        console.log('comp ' + computerScore + ' player ' + playerScore);
        winnerDisp.textContent = 'You Win';
    } 
}

choose.addEventListener('click', function() {
    restart();
});


let change = document.getElementsByClassName('display').style;
function restart() {
    computerScore = 0;
    playerScore = 0;
    count = 0;
    winnerDisp.textContent = '';
    showComputerScore.textContent = 0;
    showPlayerScore.textContent = 0;
    round.textContent = 'Round 0';
    tieCount = 0;
    tieDis.textContent = 'Tie : ' + tieCount;
}
