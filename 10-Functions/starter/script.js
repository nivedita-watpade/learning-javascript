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
