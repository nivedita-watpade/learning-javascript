'use strict';

const btnRoll = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const currentScoreEl0 = document.querySelector('#current--0');
const currentScoreEl1 = document.querySelector('#current--1');

let current = 0;
let activePlayer = 0;
let isPlayerWon = false;
const playerScores = {
  playerOne: 0,
  playerTwo: 0,
};

function switchPlayer() {
  current = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = current;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
}

function displayDice() {
  if (isPlayerWon) {
    return;
  }
  diceImg.classList.remove('hidden');
  const randomNum = Math.trunc(Math.random() * 6) + 1;
  diceImg.src = `dice-${randomNum}.png`;

  if (randomNum === 1) {
    switchPlayer();
  } else {
    current = current + randomNum;
    document.querySelector(`#current--${activePlayer}`).textContent = current;
  }
}

function displayPlayerScore() {
  if (isPlayerWon) {
    return;
  }
  if (activePlayer === 0) {
    playerScores.playerOne = playerScores.playerOne + current;
    document.querySelector(`#score--${activePlayer}`).textContent =
      playerScores.playerOne;
  }

  if (activePlayer === 1) {
    playerScores.playerTwo = playerScores.playerTwo + current;
    document.querySelector(`#score--${activePlayer}`).textContent =
      playerScores.playerTwo;
  }

  if (playerScores.playerOne >= 20 || playerScores.playerTwo >= 20) {
    diceImg.classList.add('hidden');
    isPlayerWon = true;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    switchPlayer();
  }
}

btnRoll.addEventListener('click', displayDice);
btnHold.addEventListener('click', displayPlayerScore);

document.addEventListener('keypress', function (e) {
  if (e.code === 'Enter') displayDice();
  if (e.code === 'Space') displayPlayerScore();
});

function resetGame() {
  current = 0;
  activePlayer = 0;
  playerScores.playerOne = 0;
  playerScores.playerTwo = 0;
  isPlayerWon = false;
  diceImg.classList.add('hidden');
  currentScoreEl0.textContent = 0;
  currentScoreEl1.textContent = 0;
  document.querySelector(`#score--0`).textContent = 0;
  document.querySelector(`#score--1`).textContent = 0;
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document
    .querySelector('.player--1')
    .classList.remove('player--active', 'player--winner');
}

btnNew.addEventListener('click', resetGame);
