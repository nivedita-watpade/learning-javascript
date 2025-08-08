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
const body = document.querySelector('.gamepage-body');
const scoreElement = document.querySelector('.score');
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

console.log(secretNumber);

//Using function declaration
function handleGuessBtnClick() {
  const guess = Number(inputNumber.value);

  if (!guess) {
    statusMsg.textContent = 'No Number!!!';
  } else if (secretNumber === guess) {
    statusMsg.textContent = 'You Win !!!';
  } else if (guess > secretNumber) {
    statusMsg.textContent = 'Number is too high!!!';
    score--;
  } else if (guess < secretNumber) {
    statusMsg.textContent = 'Number is too low!!!';
    score--;
  }
  scoreElement.textContent = score;
}
checkBtn.addEventListener('click', handleGuessBtnClick);
