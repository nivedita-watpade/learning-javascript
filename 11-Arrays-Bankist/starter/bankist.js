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

function displayMovements(movements) {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const movementsType = mov > 0 ? 'deposit' : 'withdrawal';

    const html = ` <div class="movements__row">
          <div class="movements__type movements__type--${movementsType}">${
      i + 1
    } ${movementsType}</div>
          <div class="movements__value">${mov}€</div>
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
  labelBalance.textContent = `${balance} €`;
}

function calcDisplaySummary(movements) {
  const totalDeposits =
    movements?.filter(mov => mov > 0)?.reduce((acc, curr) => acc + curr, 0) ??
    '0';
  labelSumIn.textContent = `${totalDeposits}€`;

  const totalWithdrawls =
    movements?.filter(mov => mov < 0)?.reduce((acc, curr) => acc + curr, 0) ??
    '0';
  labelSumOut.textContent = `${Math.abs(totalWithdrawls)}€`;

  const interest = movements
    ?.filter(mov => mov > 0)
    .map(mov => (currentLoggedInAccount.interestRate / 100) * mov)
    .filter(interest => interest >= 1)
    .reduce((acc, mov, i, arr) => {
      return acc + mov;
    }, 0);
  labelSumInterest.textContent = `${interest}€`;
}

let currentLoggedInAccount;

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
  displayMovements(currentLoggedInAccount.movements);
  calculateAndDisplayTotalBalance(currentLoggedInAccount.movements);
  calcDisplaySummary(currentLoggedInAccount.movements);
}

btnLogin.addEventListener('click', loginUser);
