'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

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

function displayMovements(accObj, sort = false) {
  //console.log(accObj.movementsDates);
  containerMovements.innerHTML = '';

  const movs = sort
    ? accObj.movements.slice().sort((a, b) => a - b)
    : accObj.movements;

  movs.forEach((mov, i) => {
    const movementsType = mov > 0 ? 'deposit' : 'withdrawal';

    const html = ` <div class="movements__row">
          <div class="movements__type movements__type--${movementsType}">${
      i + 1
    } ${movementsType}</div> 

    <span>${new Date(accObj.movementsDates[i]).toLocaleDateString(
      'pt-PT'
    )}</span>

          <div class="movements__value">${mov.toFixed(2)}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

function getUserName(userName) {
  return userName
    .toLowerCase()
    .split(' ')
    .map(word => word[0])
    .join('');

  // const usersInitials = user.map(word => {
  //   return word[0];
  // });

  // const loginUserName = usersInitials.join('');
  // return loginUserName;
}

function computeUserName(usersArr) {
  usersArr.forEach(userObj => {
    userObj.userName = getUserName(userObj.owner);
  });
}

computeUserName(accounts);

function calculateAndDisplayTotalBalance(movArr) {
  const balance = movArr.reduce((acc, curr) => {
    const sum = acc + curr;
    return sum;
  }, 0);
  labelBalance.textContent = `${balance.toFixed(2)} €`;
  return balance;
}

function calcDisplaySummary(movements) {
  const totalDeposits =
    movements?.filter(mov => mov > 0)?.reduce((acc, curr) => acc + curr, 0) ??
    '0';
  labelSumIn.textContent = `${totalDeposits.toFixed(2)}€`;

  const totalWithdrawls =
    movements?.filter(mov => mov < 0)?.reduce((acc, curr) => acc + curr, 0) ??
    '0';
  labelSumOut.textContent = `${Math.abs(totalWithdrawls).toFixed(2)}€`;

  const interest = movements
    ?.filter(mov => mov > 0)
    .map(mov => (currentLoggedInAccount.interestRate / 100) * mov)
    .filter(interest => interest >= 1)
    .reduce((acc, mov, i, arr) => {
      return acc + mov;
    }, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
}

function updateUI(acc) {
  displayMovements(acc);
  calculateAndDisplayTotalBalance(acc.movements);
  calcDisplaySummary(acc.movements);
  changeColorRow();
}

let currentLoggedInAccount;

//FAKE LOGIN
currentLoggedInAccount = account1;
updateUI(currentLoggedInAccount);
containerApp.style.opacity = 1;

const currDate = new Date();
const hrs = `${new Date().getHours()}`.padStart(2, 0);
const minutes = `${new Date().getMinutes()}`.padStart(2, 0);

labelDate.textContent = `${currDate.getDate()}/${
  currDate.getMonth() + 1
}/${currDate.getFullYear()}, ${hrs}:${minutes}`;

function loginUser(e) {
  e.preventDefault();
  const userName = inputLoginUsername.value;
  const pin = Number(inputLoginPin.value);

  if (!userName || !pin) {
    alert('Please Enter the details');
    return;
  }

  currentLoggedInAccount = accounts.find(account => {
    return userName === account.userName && pin === account.pin;
  });

  if (!currentLoggedInAccount) {
    alert('Inavlid Login');
    return;
  }

  containerApp.style.opacity = 1;
  inputLoginUsername.value = null;
  inputLoginPin.value = null;
  inputLoginPin.blur();
  labelWelcome.textContent = `Welcome, ${currentLoggedInAccount.owner}!`;
  // labelDate.textContent = `${new Date().getDate()} / ${
  //   new Date().getMonth() + 1
  // } / ${new Date().getFullYear()}`;
  updateUI(currentLoggedInAccount);
}

btnLogin.addEventListener('click', loginUser);

function transferMoney(e) {
  e.preventDefault();
  if (!currentLoggedInAccount) {
    return;
  }

  const transferTo = inputTransferTo.value;
  const transferAmt = inputTransferAmount.value;

  if (!transferTo || !transferAmt) {
    alert('Enter transfer details!');
    return;
  }

  const currAccountValance = calculateAndDisplayTotalBalance(
    currentLoggedInAccount.movements
  );

  if (Number(transferAmt) > currAccountValance) {
    alert('Insufficient Balance!');
    return;
  }

  const amtTransferAccount = accounts.find(account => {
    return transferTo === account.userName;
  });

  if (!amtTransferAccount) {
    alert('User not found !');
    return;
  }

  if (currentLoggedInAccount.userName === amtTransferAccount.userName) {
    alert("You can't transfer money to yourself");
    return;
  }

  amtTransferAccount.movements.push(Number(transferAmt));
  amtTransferAccount.movementsDates.push(new Date());

  currentLoggedInAccount.movements.push(Number(-transferAmt));
  currentLoggedInAccount.movementsDates.push(new Date());

  updateUI(currentLoggedInAccount);

  inputTransferTo.value = null;
  inputTransferAmount.value = null;
}

btnTransfer.addEventListener('click', transferMoney);

function requestLoan(e) {
  e.preventDefault();

  if (!currentLoggedInAccount) {
    return;
  }
  // const loanAmt = inputLoanAmount.value;
  const loanAmt = Math.floor(inputLoanAmount.value);

  if (!loanAmt) {
    alert('Please enter the amount!');
    return;
  }

  if (loanAmt < 0) {
    alert('Please enter a valid amount !');
    return;
  }

  const isEligibleForLoan = currentLoggedInAccount.movements.some(mov => {
    return mov >= loanAmt * 0.1;
  });

  if (isEligibleForLoan) {
    currentLoggedInAccount.movements.push(loanAmt);
    currentLoggedInAccount.movementsDates.push(new Date());
  } else {
    alert('You are not eligible for the loan');
  }

  updateUI(currentLoggedInAccount);

  inputLoanAmount.value = null;
}

btnLoan.addEventListener('click', requestLoan);

function closeAccount(e) {
  e.preventDefault();

  if (!currentLoggedInAccount) {
    return;
  }

  const userName = inputCloseUsername.value;
  const userPin = inputClosePin.value;
  if (!userName || !userPin) {
    alert('Enter the account details !');
    return;
  }

  if (userName !== currentLoggedInAccount.userName) {
    alert('You cant close other user account !');
    return;
  }

  const currAccountIndex = accounts.findIndex((account, index) => {
    return userName === account.userName && Number(userPin) === account.pin;
  });

  if (currAccountIndex < 0) {
    alert('Account is not exist!');
    return;
  }

  accounts.splice(currAccountIndex, 1);
  alert(`This account is closed!`);
  inputCloseUsername.value = null;
  inputClosePin.value = null;
  containerApp.style.opacity = 0;
}

btnClose.addEventListener('click', closeAccount);

let isSorted = false;
function sortMovements() {
  displayMovements(currentLoggedInAccount, !isSorted);
  isSorted = !isSorted;
}

btnSort.addEventListener('click', sortMovements);

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

function changeColorRow() {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    if (i % 2 === 0) {
      row.style.backgroundColor = '#dddddd';
    }
  });
}

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
