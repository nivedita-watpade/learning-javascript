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

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

function checkDogs(juliasDogData, katesDogData) {
  const juliasDogDataCopy = [...juliasDogData];

  juliasDogDataCopy.splice(-2);
  juliasDogDataCopy.splice(0, 1);

  const allCorrectedData = juliasDogDataCopy.concat(katesDogData);

  allCorrectedData.forEach((age, i) => {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
}

checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// =============================== map and filter method =============================

const numbers1 = [1, 2, 3, 4, 5];

const squares = numbers1.map(num => {
  return num * num;
});
console.log(squares);

const greaterthanThree = numbers1.filter(num => {
  return num > 3;
});
console.log(greaterthanThree);

const users = [
  { name: 'Tushar', age: 25 },
  { name: 'Meera', age: 22 },
  { name: 'Raj', age: 28 },
];

const usersName = users.map(user => {
  return user.name.toUpperCase();
});

console.log(usersName);

const users1 = [
  { name: 'Tushar', active: true },
  { name: 'Meera', active: false },
  { name: 'Raj', active: true },
];

const activeUsers = users1.filter(user => {
  return user.active;
});

console.log(activeUsers);

const movementsEuros = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementsUSD = movementsEuros.map(mov => mov * euroToUsd);

console.log(movementsUSD);

const deposits = movementsEuros.filter(mov => {
  return mov > 0;
  // return mov > 0 ? true : false;
});

console.log(deposits);

const withdrawls = movementsEuros.filter(mov => mov < 0);
console.log(withdrawls);

console.log('=================== Reduce Method ====================');
// console.log(movements);

const balance = movements.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(balance);

const maxMovValue = movementsEuros.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
}, movementsEuros[0]);

console.log(maxMovValue);

console.log('================ Challenge 2 ======================');

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉) sumofAllValues/length 

4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

function calcAverageHumanAge(...ages) {
  const dogAges = ages.map(age => {
    if (age <= 2) {
      const humanAge = 2 * age;
      return humanAge;
    } else if (age > 2) {
      const humanAge = 16 + age * 4;
      return humanAge;
    }
  });
  console.log(dogAges);

  const adultDogs = dogAges.filter(age => {
    return age >= 18;
  });
  console.log('AdultDogs:', adultDogs);

  const avgHuman = adultDogs.reduce((acc, curr) => {
    return acc + curr;
  });
  const avg = avgHuman / adultDogs.length;
  console.log(avg);
}

calcAverageHumanAge(5, 2, 4, 1, 15, 8, 3);

function getTotalDepositsInDollars(movements) {
  return movements
    .filter(mov => mov > 0)
    .map(mov => mov * 1.1)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0)
    .toFixed();
}

console.log(getTotalDepositsInDollars(movementsEuros));

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

console.log('=============challenge 3 =============');

const calcAverageHumanAgeArrow = ageArr => {
  return ageArr
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, curr, i, adultDogsArr) => {
      return acc + curr / adultDogsArr.length;
    }, 0);
};

console.log(calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]));

console.log('===================== find method ====================');

const firstWithdrawls = movements.find(mov => mov < 0);
console.log(firstWithdrawls);

const interestRateOneAccount = accounts.find(account => {
  return account.interestRate === 1;
});

console.log(interestRateOneAccount);

//using for of loop
let interestRateSccount;
for (const account of accounts) {
  if (account.interestRate === 1) {
    interestRateSccount = account;
  }
}

console.log(interestRateSccount);
