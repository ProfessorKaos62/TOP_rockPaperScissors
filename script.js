function getComputerChoice(randomChoice){
    return randomChoice[Math.floor(Math.random()*randomChoice.length)];
  }

const computerChoice = ['Rock', 'Paper', 'Scissors'];

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

const tieGame = 'Tie, No Points';
let playerWins = 0;
let computerWins = 0;



for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Choose your weapon',).toLowerCase();
    const computerSelection = getComputerChoice(computerChoice).toLowerCase();
    const perRoundScore = playRound(playerSelection, computerSelection);
    function game(player) {
        if (player === playerWins) {
        return ++playerWins;
        }
        else if (player === computerWins) {
            return ++computerWins;
        }
        else {
            return tieGame;
        }
    }
    
    const results = game(perRoundScore);
    console.log(results);
    console.log('Player score: ' + playerWins);
    console.log('Computer score: ' + computerWins);
}

function results(playerResults, computerResults) {
    if (playerResults === computerResults) {
        console.log('It was a tie game');
    }
    else if (playerResults > computerResults) {
        console.log('You win! Nice job!');
    }
    else if (playerResults < computerResults) {
        console.log('Computer Wins, you suck');
    }
}

const finalResults = results(playerWins, computerWins)
