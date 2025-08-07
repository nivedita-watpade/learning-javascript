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

const randomNum = 20;

//Using function declaration
function handleGuessBtnClick() {
  const guess = Number(inputNumber.value);
  if (!guess) {
    statusMsg.textContent = 'No Number!!!';
  } else if (randomNum === guess) {
    statusMsg.textContent = 'You Win!!!';
    // body.style.backgroundColor = 'Green';
    body.classList.add('win');
  }
}
checkBtn.addEventListener('click', handleGuessBtnClick);
