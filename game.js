

const box1 = document.getElementById('rll1');
const btn1 = document.getElementById('btn1');
const tScore = document.getElementById('totalScore');
const reaction = document.getElementById('end');
const box2 = document.getElementById('rll2');
const btn2 = document.getElementById('btn2');
const playAgainBtn = document.getElementById('playAgainBtn');
const reRollBtn = document.getElementById('reRollBtn');

let firstRoll, secondRoll;

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function die1() {
  firstRoll = rollDice();
  box1.innerHTML = firstRoll;
  btn2.disabled = false; // Enable the second die roll button
}

function die2() {
  secondRoll = rollDice();
  box2.innerHTML = secondRoll;
  const total = firstRoll + secondRoll;
  tScore.innerHTML = `Total Score: ${total}`;

  let outcomeText = 'UNLUCKY THIS TIME!!';
  
  if ((total > 6 && total < 8) || (total > 10 && total < 12)) {
    outcomeText = 'WINNER!!!';
    playAgainBtn.style.display = 'block';
  } else if ((total > 1 && total < 4) || (total > 11 && total < 13)) {
    outcomeText = 'YOU LOSE!!!';
    playAgainBtn.style.display = 'block';
  } else  
    reRollBtn.style.display = 'block';
  

  reaction.innerHTML = `Outcome: ${outcomeText}`;

  // Disable buttons to prevent multiple rolls before restarting
  btn1.disabled = true;
  btn2.disabled = true;
}

function startGame() {
  firstRoll = null;
  secondRoll = null;
  box1.innerHTML = '-';
  box2.innerHTML = '-';
  tScore.innerHTML = 'Total Score: -';
  reaction.innerHTML = 'Outcome: -';
  btn1.disabled = false;
  btn2.disabled = true;
  playAgainBtn.style.display = 'none';
  reRollBtn.style.display = 'none';
}

btn1.addEventListener('click', die1);
btn2.addEventListener('click', die2);
playAgainBtn.addEventListener('click', startGame);
reRollBtn.addEventListener('click', startGame);

// Start the initial game
startGame();

function startRps() {
  let playerScore = 0;
  let cpuScore = 0;
  const gameOutput = document.getElementById('gameOutput')
  const gameArea = doument.getElementById('gameArea')
  console.log('### BEST OF 5 CAN YOU BEAT THE COMPUTER?! ###');

  function getComputerChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      return choices[Math.floor(Math.random() * choices.length)];
  }

  while (playerScore < 3 && cpuScore < 3) {
      let player = prompt('Rock, Paper, Scissors. Make your move!').toLowerCase();
      let computer = getComputerChoice();

      if (player === ' ') {
          console.log('Please take your turn');
          continue;
      }

      if (player === computer) {
          console.log(`It's a Tie!! Computer played: ${computer}`);
      } else if (player === 'rock') {
          if (computer === 'scissors') {
              console.log(`You Win!! Computer played: ${computer}`);
              playerScore += 1;
          } else if (computer === 'paper') {
              console.log(`You lose!! Computer played: ${computer}`);
              cpuScore += 1;
          }
      } else if (player === 'paper') {
          if (computer === 'rock') {
              console.log(`You Win!! Computer played: ${computer}`);
              playerScore += 1;
          } else if (computer === 'scissors') {
              console.log(`You lose!! Computer played: ${computer}`);
              cpuScore += 1;
          }
      } else if (player === 'scissors') {
          if (computer === 'paper') {
              console.log(`You Win!! Computer played: ${computer}`);
              playerScore += 1;
          } else if (computer === 'rock') {
              console.log(`You lose!! Computer played: ${computer}`);
              cpuScore += 1;
          }
      } else {
          console.log('Something went wrong :(');
      }

      console.log('Player score:', playerScore);
      console.log('Computer score:', cpuScore);
  }

  if (playerScore > cpuScore) {
      console.log('YOU ARE THE WINNER!!');
  } else {
      console.log(`YOU HAVE LOST!! Computer played: ${computer}`);
  }
}
  



