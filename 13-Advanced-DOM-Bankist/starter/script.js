'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

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

//Buttton Scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log(
    `height/width viewport`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //scrolling
  // window.scrollTo(s1coords.left, s1coords.top);

  section1.scrollIntoView({ behavior: 'smooth' });
});

//Page Navigation

// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const sectionID = this.getAttribute('href');
//     document.querySelector(sectionID)?.scrollIntoView({ behavior: 'smooth' });
//   });
// });

//Event Delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching Stategy
  if (e.target.classList.contains('nav__link')) {
    const sectionId = e.target.getAttribute('href');
    if (sectionId === '#') return;
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
});

const tabsBtn = document.querySelectorAll('.operations__tab');
const operationsContent = document.querySelectorAll('.operations__content');
const tabContainer = document.querySelector('.operations__tab-container');

tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //Gaurd Clause
  if (!clicked) return;

  //Remove Active class
  tabsBtn.forEach(btn => {
    btn.classList.remove('operations__tab--active');
  });
  //Activate tab btn
  clicked.classList.add('operations__tab--active');

  operationsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  const tabId = clicked.dataset.tab;
  const selectedTab = document.querySelector(`.operations__content--${tabId}`);

  //Activate tab content
  selectedTab.classList.add('operations__content--active');
});

//Added animation to the nav links

const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

// const handleHover = function (e, opacity) {
//   if (e.target.classList.contains('nav__link')) {
//     navLinks.forEach(navLink => (navLink.style.opacity = opacity));
//     e.target.style.opacity = 1;
//     const logo = e.target.closest('.nav__links')?.previousElementSibling;
//     logo ? (logo.style.opacity = opacity) : null;
//   }
// };

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    navLinks.forEach(navLink => (navLink.style.opacity = this));
    e.target.style.opacity = 1;
    const logo = e.target.closest('.nav__links')?.previousElementSibling;
    logo ? (logo.style.opacity = this) : null;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

//Sticky Navigation:
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) nav.classList.remove('sticky');
    if (!entry.isIntersecting) nav.classList.add('sticky');
  });
};

const obsOptions = {
  root: null, //relative to viewport
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver(obsCallback, obsOptions).observe(
  header
);

// Revealing Sections on the scroll

const sections = document.querySelectorAll('.section');

function obsSectionCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    }
  });
}

const obsSectionOpt = {
  root: null,
  threshold: 0.1,
};

const sectionObserver = new IntersectionObserver(
  obsSectionCallback,
  obsSectionOpt
);

sections.forEach(section => {
  sectionObserver.observe(section);
});

//Lazy Load effect

const allImages = document.querySelectorAll('.features__img');

function obsImgCallback(entries, observe) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const dataImg = entry.target.getAttribute('data-src');
      entry.target.setAttribute('src', dataImg);
      entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
      });

      observe.unobserve(entry.target);
    }
  });
}

const obsImgOpt = {
  root: null,
  threshold: 0,
  rootMargin: '200px',
};

const imgObserver = new IntersectionObserver(obsImgCallback, obsImgOpt);

allImages.forEach(img => {
  imgObserver.observe(img);
});

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// SELECTING ELEMENTS

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

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

//TYPE OF EVENTS
// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('You are reading the mouseenter events!');
//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// h1.onclick = function (e) {
//   alert('You are reading the onClick events!');
// };

//rgb(255,255,255)

// const randomInt = function (min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Link', e.target);
//   console.log('Link', e.currentTarget);
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target);
//   console.log('Container', e.currentTarget);
//   //STOP PROPOGATION
//   //e.stopPropagation();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Nav', e.target);
//   console.log('Nav', e.currentTarget);
// });

// DOM Traversing

const h1 = document.querySelector('h1');

//Going downwards: Child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'red';

//Going upwards: Parent

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-primary)';
h1.closest('h1').style.background = 'var(--gradient-secondary)';

//Going sideways: Siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.5)';
//   }
// });
