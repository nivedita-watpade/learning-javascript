'use strict';

// const againBtn = document.querySelector('.btn.again');
// againBtn.textContent = 'Repeat';
// // console.log(againBtn);

// againBtn.style.backgroundColor = 'Purple';

// againBtn.classList.add('repeatBtn');

// const betweenTxt = document.querySelector('.between');
// betweenTxt.textContent = 'Between 1 and 30';

// const inputNumber = document.querySelector('.guess');
// inputNumber.value = 69;
// console.log(Number(inputNumber.value));
// inputNumber.value = 25;
// function changeBetweenTxt(txt) {
//   betweenTxt.textContent = txt;
// }

// changeBetweenTxt('Between 12 and 20');

//Using Function Expression
// checkBtn.addEventListener('click', function () {
//   console.log(inputNumber.value);
// });

////Using Arrow Function
// checkBtn.addEventListener('click', () => {
//   console.log(inputNumber.value);
// });

const checkBtn = document.querySelector('.check');
const inputNumber = document.querySelector('.guess');
const statusMsg = document.querySelector('.message');
const body = document.querySelector('body');
const scoreElement = document.querySelector('.score');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displaySecretNumber = document.querySelector('.number');
const againBtn = document.querySelector('.btn.again');
const highscoreElement = document.querySelector('.highscore');
let score = 20;
let highscore = 0;

console.log(secretNumber);

//Using function declaration
function handleGuessBtnClick() {
  const guess = Number(inputNumber.value);
  if (!score) {
    return;
  }
  if (!guess) {
    statusMsg.textContent = 'No Number!!!';
  } else if (secretNumber === guess) {
    statusMsg.textContent = 'You Win !!!';
    body.style.backgroundColor = 'green';
    displaySecretNumber.style.width = '25rem';
    displaySecretNumber.textContent = secretNumber;
    if (score > highscore) {
      highscoreElement.textContent = score;
      highscore = score;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      statusMsg.textContent = 'Number is too high!!!';
      score--;
    } else {
      score--;
      statusMsg.textContent = 'You lost the game!!!';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      statusMsg.textContent = 'Number is too low!!!';
      score--;
    } else {
      score--;
      statusMsg.textContent = 'You lost the game!!!';
    }
  }
  scoreElement.textContent = score;
}
checkBtn.addEventListener('click', handleGuessBtnClick);

function handleReset() {
  statusMsg.textContent = 'Start guessing...';
  body.style.backgroundColor = '#222';
  displaySecretNumber.style.width = '15rem';
  displaySecretNumber.textContent = '?';
  inputNumber.value = '';
  score = 20;
  scoreElement.textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

againBtn.addEventListener('click', handleReset);
