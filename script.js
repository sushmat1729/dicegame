//Author: Sushma Telagamsetti
//ID: C0901939

const diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

// Starting with Player 1
let currentPlayer = 1; 
let player1Score = 0;
let player2Score = 0;

document.getElementById('rollButton').addEventListener('click', rollDice);

//function to roll dice
function rollDice() {
  const dice1Value = rollDie();
  const dice2Value = rollDie();
  
  document.getElementById('dice1').src = diceImages[dice1Value - 1];
  document.getElementById('dice2').src = diceImages[dice2Value - 1];
  
  const scoreDifference = Math.abs(dice1Value - dice2Value);
  updateScore(scoreDifference);
  
  // Switch to the next player
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function updateScore(scoreDifference) {
  const scoreDisplay = document.getElementById('scoreDisplay');
  scoreDisplay.textContent = `Score Difference: ${scoreDifference}`;
  
  // Update player scores
  if (currentPlayer === 1) {
    player1Score += scoreDifference;
    document.getElementById('player1Score').textContent = `Player 1 Score: ${player1Score}`;
  } else {
    player2Score += scoreDifference;
    document.getElementById('player2Score').textContent = `Player 2 Score: ${player2Score}`;
  }
  
  // Check for winner
  if (player1Score >= 20) {
    displayWinner(1);
  } else if (player2Score >= 20) {
    displayWinner(2);
  }
}

function displayWinner(player) {
  const winnerDisplay = document.getElementById('winnerDisplay');
  winnerDisplay.textContent = `Player ${player} wins!`;
  document.getElementById('rollButton').disabled = true; // Disable button after winning
}
