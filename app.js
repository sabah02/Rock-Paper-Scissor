
let count = 0;

//Player Selection

let playerSelection;

let select = document.querySelectorAll('.body .buttons button');
console.log(select);

select.forEach(function(button) {
    button.addEventListener('click',function() {
        if(count >= 4) {
            showWinner();
        }
        playRound(button.textContent.toLowerCase());
        count++;
    })
});

//Computer Selection

function getComSelection() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    let beats = {
        'rock': 'paper',
        'paper': 'scissors',
        'scissors': 'rock'
    };
    return beats[computerChoice];
}

let round = document.querySelector('.round');
function playRound(playerSelection) {
    round.textContent = 'Round ' + (count+1);
    let computerSelection = getComSelection();
    let winner;
    console.log(computerSelection);
    if(computerSelection == playerSelection) {
        winner = 'draw';
    } else if((computerSelection == 'rock' && playerSelection == 'paper') || 
               (computerSelection == 'paper' && playerSelection == 'scissor') ||
               (computerSelection == 'scissor' && playerSelection == 'rock')) {
                winner = 'player';
               } else {
                winner = 'computer';
               }
    updateScore(winner);
    showScore();
}

//Score

let playerScore = 0;
let computerScore = 0;

function updateScore(winner) {
    if(winner == 'player') {
        playerScore++;
    } else if(winner == 'computer') {
        computerScore++;
    } 
}

let showPlayerScore = document.querySelector('.playerScore');
let showComputerScore = document.querySelector('.computerScore');

function showScore() {
    showPlayerScore.textContent = playerScore;
    showComputerScore.textContent = computerScore;
}

//Winner

let choose = document.querySelector('.display');
let winner = document.querySelector('.winner');
function showWinner() {
    if(computerScore > playerScore) {
        winner.textContent = 'Offo!! You Lose';
    } else if(computerScore < playerScore) {
        winner.textContent = 'Wohoo!! You Win';
    } else {
        winner.textContent = 'It\'s a tie'; 
    }
    choose.textContent = 'Click to Restart';
}

choose.addEventListener('click', function() {
    restart();
});



function restart() {
    computerScore = 0;
    playerScore = 0;
    count = 0;
    winner.textContent = '';
    showComputerScore.textContent = 0;
    showPlayerScore.textContent = 0;
    round.textContent = 'Round 0';
}
