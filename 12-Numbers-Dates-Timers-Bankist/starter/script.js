'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];
/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

console.log(29 === 29.0); // true

// string to number
console.log(Number('29'));
console.log(+'29');

//Parsing
console.log(Number.parseInt('29px', 10)); //29  10 means decimal (0-9)
console.log(Number.parseInt('29.5')); // 29
console.log(Number.parseInt('29px', 2)); //NaN   2 means binary (0 & 1)

console.log(Number.parseFloat('29px')); //29
console.log(Number.parseFloat('29.5px')); //29.5
console.log(parseFloat(' 2.5rem ')); //2.5

// Checking if value is NaN
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20X')); //true
console.log(Number.isNaN(23 / 0)); //false

// Checking if value is number
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20X')); //false
console.log(Number.isFinite(23 / 0)); //false

// Checking the number is an integer or not
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(-5)); // true
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(20.0)); // true
console.log(Number.isInteger(10.5)); // false (not an integer)
console.log(Number.isInteger('10')); // false (string)
console.log(Number.isInteger(NaN)); // false
console.log(Number.isInteger(Infinity)); // false

console.log('=================== Math & Rounding  ========================');

// find square root and cubic root
console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5
console.log(8 ** (1 / 3)); //2 (to find cubic root)

//to find MAX
console.log(Math.max(1, 29, 9, 17, 25)); //29
console.log(Math.max(1, '29', 9, 17, 25)); //29 (Did type coersion)
console.log(Math.max(1, '29px', 9, 17, 25)); //NaN(Did not parsing it(Means to do not remove the character))

//to find MIN
console.log(Math.min(1, 29, 9, 17, 25)); //1

//find area of circle
console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.15

// generate random number (Math.random generate num between 0 to 1)
console.log(Math.trunc(Math.random() * 6 + 1)); //1-6 (We want to number between 1-6 thats why we multiply by 6. It generate number between 1-5 thats why we add + 1. )

// create a function for random number

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));
console.log(randomInt(0, 3));

//Rounding integers

console.log(Math.round(29.3)); //29
console.log(Math.round(29.5)); //30
console.log(Math.round(29.9)); //30

//remove decimal part
console.log(Math.trunc(29.3)); //29
console.log(Math.trunc(29.9)); //29

//round to the UP
console.log(Math.ceil(29.3)); //30
console.log(Math.ceil(29.9)); //30

//round to the DOWN
console.log(Math.floor(29.3)); //29
console.log(Math.floor(29.9)); //29

//used floor instead of trunc bcoz it properly work for positive and negative numbers
console.log(Math.floor(-29.3)); //-30
console.log(Math.trunc(-29.3)); //-29

//Rouding decimals(floating point number)
console.log((2.7).toFixed(0)); //3
console.log((2.7).toFixed(3)); //2.700
console.log((2.345).toFixed(2)); // 2.35
console.log(+(2.343).toFixed(2)); //2.34

//Remainder operator

console.log(5 % 2); // 1
console.log(5 / 2); // 2*2+1

console.log(4 % 2); //0 // Even
console.log(99 % 2); //1 //Odd

const isEven = num => num % 2 === 0;
console.log(isEven(24));
console.log(isEven(57));
console.log(isEven(324));

const huge = 123456789012345678901234567890n;
console.log(huge);

const num = BigInt('123456789012345678901234567890');
console.log(num);

console.log(huge + ' is REALLY BIG number'); // string

//create a dates
const now = new Date();
console.log(now);

console.log(new Date('Aug 29 2025 18:05:06'));
console.log(new Date('25 December 2025'));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2025, 10, 29)); //Nov 29 2025
console.log(new Date(2025, 10, 12, 45, 2, 2));
console.log(new Date(0));

// working with dates

const future = new Date(2027, 10, 25, 15, 23);
console.log(future);
console.log(future.getFullYear()); //2037(Get the year)
console.log(future.getMonth()); //10(Nov - month is zero based)
console.log(future.getDay()); // get day of the week
console.log(future.getHours()); //15 - get hours
console.log(future.getMinutes()); //23 - get minutes
console.log(future.getSeconds()); //00 - get second

console.log(future.getTime()); // get the time in miliseocnds from the date 1st jan 1970

console.log(Date.now()); //get the time in miliseocnds from the date 1st jan 1970 to till date or current time

//set the dates method - we can set all the methods of month, day, hrs etc.

console.log(future.setFullYear(2035));
console.log(future);

console.log('================ operation with string =========================');

const futureDate = new Date(2037, 10, 19, 15, 23);
console.log(Number(futureDate));
console.log(+futureDate);
console.log(futureDate);

const calcDaysPassed = (date1, date2) => {
  return Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);
};

const Day1 = calcDaysPassed(new Date(2037, 10, 19), new Date(2037, 10, 29));
console.log(Day1);

console.log(
  '============ Numbers with Internationalizatio (Intl) API=========='
);

const num1 = 29256708.45;

const options = {
  style: 'currency',
  unit: 'mile-per-hour',
  currency: 'INR',
};

console.log('US:', new Intl.NumberFormat('en-US', options).format(num1));
console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(num1));
console.log('Syria:', new Intl.NumberFormat('ar-SY', options).format(num1));
console.log('India:', new Intl.NumberFormat('en-IN', options).format(num1));

console.log(
  '=================setTimeout & setInterval ========================'
);

//setTimeout
// setTimeout(
//   (ing1, ing2) => {
//     console.log(`Here is your Pizza with ${ing1} & ${ing2} 🍕`);
//   },
//   5000,
//   'corn',
//   'cheese'
// );

// console.log('Waiting...............');

setInterval(() => {
  const now = new Date();
  // console.log(
  //   `${now.getDate()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
  // );

//   console.log(
//     new Intl.DateTimeFormat('en-IN', {
//       dateStyle: 'medium',
//       timeStyle: 'medium',
//     }).format(new Date())
//   );
// }, 1000);
