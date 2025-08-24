// =============== Commented code after refactoring =====================

'use strict';

// const showModalBtn = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const allModalBtns = document.querySelectorAll('.show-modal');

// function displayModal() {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// }

// function hideModal() {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// }

function toggleModal() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}

for (let i = 0; i <= allModalBtns.length - 1; i++) {
  allModalBtns[i].addEventListener('click', toggleModal);
}

closeBtn.addEventListener('click', toggleModal);
overlay.addEventListener('click', toggleModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     displayModal();
//   }
// });

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    toggleModal();
  }
});
