'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

//slice() method
console.log(arr.slice(2)); //['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e'] --- Creates a shallow copy

//splice() method
// arr.splice(-1); //  ['a', 'b', 'c', 'd']
// arr.splice(2); //(2) ['a', 'b']
arr.splice(1, 2); //['a', 'd', 'e']
console.log(arr);

//reverse
let arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//concat
let first = [1, 2, 3, 4, 5];
let second = [6, 7, 8, 9, 10];
const numbers = first.concat(second);
console.log(numbers);
console.log([...first, ...second]);

//join
console.log(numbers.join('*'));

//at
console.log(first.at(0)); //1
console.log(first.at(-1)); //5

console.log('Nivi'.at(0));
console.log('Nivi'.at(-1));

// =========================== foreach loop =====================================

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`Deposit Amount is ${movement}`);
  } else {
    console.log(`Withdrawal Amount is ${movement}`);
  }
}

console.log('====================================');

movements.forEach((movement, i) => {
  if (movement > 0) {
    console.log(
      `Movement is ${i + 1}:Deposit Amount is ${movement} Index is ${i}`
    );
  } else {
    console.log(
      `Movement is ${i + 1}:Withdrawal Amount is ${movement} Index is ${i}`
    );
  }
});

console.log('============ Map =================');

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

console.log('============ Set =================');

const uniqueCurrencies = new Set(['USD', 'EUR', 'GBP', 'EUR', 'USD']);

uniqueCurrencies.forEach((value, _, set) => {
  console.log(`${value}`);
});
