const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2025-12-07T21:31:17.178Z',
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

function formattingNumbers(num) {
  return new Intl.NumberFormat(currentLoggedInAccount.locale, {
    style: 'currency',
    currency: currentLoggedInAccount.currency,
  }).format(num);
}

function displayMovements(accObj, sort = false) {
  //console.log(accObj.movementsDates);
  containerMovements.innerHTML = '';

  const combinedMovsDates = accObj.movements.map((mov, i) => ({
    movement: mov,
    movementDate: accObj.movementsDates.at(i),
  }));

  console.log(combinedMovsDates);

  if (sort) combinedMovsDates.sort((a, b) => a.movement - b.movement);

  // const movs = sort
  //   ? accObj.movements.slice().sort((a, b) => a - b)
  //   : accObj.movements;

  combinedMovsDates.forEach((obj, i) => {
    const { movement, movementDate } = obj;

    const movementsType = movement > 0 ? 'deposit' : 'withdrawal';

    const html = ` <div class="movements__row">
          <div class="movements__type movements__type--${movementsType}">${
      i + 1
    } ${movementsType}</div> 

    <span> ${getMovementDisplayDate(new Date(movementDate))}</span>

          <div class="movements__value">
          ${formattingNumbers(movement)}
          </div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

function getMovementDisplayDate(movDate) {
  const currDate = new Date();

  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };
  const diffDate = Math.round(
    Math.abs(currDate - movDate) / (1000 * 60 * 60 * 24)
  );
  if (diffDate === 0) return 'Today';
  if (diffDate === 1) return 'Yesterday';
  if (diffDate === 2) return '2 days ago';
  // return movDate.toLocaleDateString();
  return new Intl.DateTimeFormat(currentLoggedInAccount.locale, options).format(
    movDate
  );
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
  labelBalance.textContent = `${formattingNumbers(balance)}`;
  return balance;
}

function calcDisplaySummary(movements) {
  const totalDeposits =
    movements?.filter(mov => mov > 0)?.reduce((acc, curr) => acc + curr, 0) ??
    '0';
  labelSumIn.textContent = formattingNumbers(totalDeposits);

  const totalWithdrawls =
    movements?.filter(mov => mov < 0)?.reduce((acc, curr) => acc + curr, 0) ??
    '0';
  labelSumOut.textContent = formattingNumbers(Math.abs(totalWithdrawls));

  const interest = movements
    ?.filter(mov => mov > 0)
    .map(mov => (currentLoggedInAccount.interestRate / 100) * mov)
    .filter(interest => interest >= 1)
    .reduce((acc, mov, i, arr) => {
      return acc + mov;
    }, 0);
  labelSumInterest.textContent = formattingNumbers(interest);
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

// const currDate = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long',
//   year: 'numeric',
//   weekday: 'long',
// };

// const locale = navigator.language;
// console.log(locale);

// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
//   currDate
// );

// const hrs = `${new Date().getHours()}`.padStart(2, 0);
// const minutes = `${new Date().getMinutes()}`.padStart(2, 0);

// labelDate.textContent = `${currDate.getDate()}/${
//   currDate.getMonth() + 1
// }/${currDate.getFullYear()}, ${hrs}:${minutes}`;

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

  //create a date and time
  const currDate = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    // weekday: 'long',
  };

  //locale coming from browser
  // const locale = navigator.language;
  // console.log(locale);

  console.log(currentLoggedInAccount.locale);

  labelDate.textContent = new Intl.DateTimeFormat(
    currentLoggedInAccount.locale,
    options
  ).format(currDate);

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

  setTimeout(() => {
    updateUI(currentLoggedInAccount);
  }, 5000);

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

function changeColorRow() {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    if (i % 2 === 0) {
      row.style.backgroundColor = '#dddddd';
    }
  });
}
