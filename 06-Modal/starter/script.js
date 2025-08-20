'use strict';

// const showModalBtn = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const allModalBtns = document.querySelectorAll('.show-modal');

function displayModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i <= allModalBtns.length - 1; i++) {
  allModalBtns[i].addEventListener('click', displayModal);
}

closeBtn.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal();
  }
});
