// Rock Paper Scissors

// users picks Rock Paper or Scissors
// computer picks between same 3 variables at random ****
// Rock beats Scissors
// Scissors beats Paper
// Paper beats Rock
// return results



const playerSelection = prompt('Choose your weapon', '');
console.log(playerSelection);

function getComputerChoice(randomChoice) {
    let item = randomChoice[Math.floor(Math.random()*randomChoice.length)];
    console.log(item)
    if (
        (playerSelection === 'Rock' && item === 'Rock') ||
        (playerSelection === 'Scissors' && item === 'Scissors') ||
        (playerSelection === 'Paper' && item === 'Paper')) {
            alert('It\'s a draw!');
        }
    else if (
        (playerSelection === 'Paper' && item === 'Rock') ||
        (playerSelection === 'Rock' && item === 'Scissors') ||
        (playerSelection === 'Scissors' && item === 'Paper')) {
            alert('You win!');
        }
    else if (
        (playerSelection === 'Rock' && item === 'Paper') ||
        (playerSelection === 'Scissors' && item === 'Rock') ||
        (playerSelection === 'Paper' && item === 'Scissors')) {
            alert('You lose!');
        }
}

getComputerChoice(Array('Rock', 'Paper', 'Scissors'));

// YOU GOT IT DUDE GOOD SHIT

// play a round
// compare playerSelection to computerSelection

// if (playerSelection === 'Rock' && item === 'Rock') {
//         alert('Tie');
//     }