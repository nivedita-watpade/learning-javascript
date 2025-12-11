'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btnModal => {
  btnModal.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// SELECTING ELEMENTS

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// INSERTING & CREATING ELEMENTS
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We used cookies for improved functionality and analytics, <button class="btn btn--close-cookie">Got it!</button>';

// create a child
// header.prepend(message);
header.append(message);

// create a siblings
// header.before(message);
// header.after(message);

// create a clone/copy
// header.append(message.cloneNode(true));

//REMOVE ELEMENT
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//STYLE
message.style.backgroundColor = '#312e2e';
message.style.width = '120%';

console.log(message.style.backgroundColor);
console.log(message.style.height);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 25 + 'px';

//Attribute
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful Logo';

//Non-standard
console.log(logo.designer); //undefined
console.log(logo.setAttribute('compnay', 'Nivi'));

console.log(logo.src); //http://127.0.0.1:5502/13-Advanced-DOM-Bankist/starter/img/logo.png
console.log(logo.getAttribute('src')); //img/logo.png

//Data attributes
console.log(logo.dataset.versionNumber);

//classList
logo.classList.add('test', 'dummy');
