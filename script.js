const playerSelection = prompt('Choose your weapon',).toLowerCase();
console.log(playerSelection);


function getComputerChoice(randomChoice){
    return randomChoice[Math.floor(Math.random()*randomChoice.length)];
  }

const computerChoice = ['Rock', 'Paper', 'Scissors'];

const computerSelection = getComputerChoice(computerChoice).toLowerCase();
console.log(computerSelection);

const tieGame = 'Tie, No Points';
let playerWins = 0;
let computerWins = 0;

function playRound(playerGameChoice, computerGameChoice) {
    if (playerGameChoice === computerGameChoice) {
        return tieGame;
    }
    else if (
        (playerGameChoice === 'rock' && computerGameChoice === 'scissors') ||
        (playerGameChoice === 'paper' && computerGameChoice === 'rock') ||
        (playerGameChoice === 'scissors' && computerGameChoice === 'paper')) {
        return playerWins;
    }
    else if (
        (playerGameChoice === 'scissors' && computerGameChoice === 'rock') ||
        (playerGameChoice === 'rock' && computerGameChoice === 'paper') ||
        (playerGameChoice === 'paper' && computerGameChoice === 'scissors')) {
        return computerWins;
    }
    else {
        alert('Enter a Valid Choice');
    }
}

const perRoundScore = playRound(playerSelection, computerSelection)

function game(player) {
    if (player === playerWins) {
    console.log(++playerWins);
    }
    else if (player === computerWins) {
        console.log(++computerWins)
    }
    else {
        console.log('It was a tie, no points awarded');
    }
}

const results = game(perRoundScore);

