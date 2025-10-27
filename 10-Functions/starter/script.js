'use strict';

const bookings = [];

const createBookings = function (
  flightNum,
  passengersNum = 2,
  price = 3000 * passengersNum
) {
  // ES5
  //   passengersNum = passengersNum || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    passengersNum,
    price,
  };
  console.log(booking);
};

createBookings('LH298');
createBookings('LH298', 2, 2010);
createBookings('LH2510', undefined, 6000);

const flight = 'LH2925';
const nivi = {
  name: 'Nivedita Watpade',
  passportNum: '23456789',
};

function checkIn(flightNum, passengerName) {
  flightNum = 'LH1234';
  passengerName.name = 'Miss ' + passengerName.name;
}

checkIn(flight, nivi);

//checkIn(flight, { ...nivi });
console.log(flight);
console.log(nivi);

function count() {
  let counter = 0;
  return function () {
    return counter++;
  };
}

const counterValue = count();
console.log(counterValue());

function oneWord(str) {
  return str.replaceAll(' ', '');
}

function upperFirstWord(str) {
  const [firstWord, ...other] = str.split(' ');
  const finalArr = [firstWord.toUpperCase(), ...other];
  return finalArr.join(' ');
}

//console.log(upperFirstWord('Nivedita Watpade'));

//Higher Order Function
function transformer(str, fn) {
  return fn(str);
}

// upperFirstWord & oneWord are the callback functions
console.log(transformer('My name is Nivi', upperFirstWord));
console.log(transformer('My name is Nivi', oneWord));

function greet(greetings) {
  return function (name) {
    console.log(`${greetings} ${name}`);
  };
}

const greeter = greet('Hello');
greeter('Nivedita');

//or
greet('Hello')?.('Nivi');

const greetArrow = greetings => {
  return name => console.log(`${greetings} ${name}`);
};

const greetArrow1 = greetings => name => console.log(`${greetings} ${name}`);

greetArrow('Shutup')('Pranit');
greetArrow1('Shut your mouth')('PC');

const luftansa = {
  airline: 'Luftansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

luftansa.book(239, 'Nivi Watpade');

const euroWing = {
  airline: 'Eurowings',
  iataCode: 'EU',
  bookings: [],
};

const book = luftansa.book;

//This will NOT work
//book(239, 'Nivi Watpade');

//call Method
book.call(euroWing, 2529, 'Pranit');
console.log(euroWing);

//apply meyhod
const flightData = [2908, 'Gabuli'];
book.apply(euroWing, flightData);
console.log(euroWing);

//Using spread operator
book.call(euroWing, ...flightData);
console.log(euroWing);

const bookLF = book.bind(luftansa);
const bookEW = book.bind(euroWing);
//console.log(bookLF);
bookLF(298, 'Nivedita Watpade');
bookEW(1111, 'Testing');

//for preset argument
const bookeEW29 = book.bind(euroWing, 29);
bookeEW29('Niviiiiiiiiiii');

//With Event Listeners
luftansa.planes = 300;
luftansa.buyPlane = function () {
  //console.log(this);
  this.planes++;
  //console.log(this.planes);
};

const buyBtn = document.querySelector('.buy');
buyBtn.addEventListener('click', luftansa.buyPlane.bind(luftansa));

//partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.23, 100));

//set default value to rate argument
const addGST = addTax.bind(null, 0.18);
console.log(addGST(20000));

//Function returning function
function addTaxRate(rate) {
  return function (value) {
    console.log(value + value * rate);
  };
}

const addTax1 = addTaxRate(0.18);
addTax1(20000);
