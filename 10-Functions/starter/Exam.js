// Section A – Theory (10%)
// 1. Higher-Order Functions
// What are higher-order functions in JavaScript? Explain with an example.
// Ans: Higher-Order function that receives another function as an argument, that returns a new function, or both
//Ex. btnClose.addEventListener('click', greet);
// addEventListener is a Higher-order function
// greet is a  Callback function

// 2. Pass by Value vs Pass by Reference
// Describe how JavaScript handles “pass by value” and “pass by reference”.
//Ans: Pass by value: When a variable is passed by value, a copy of the variable’s value is sent to the function. Any change made inside the function does not affect the original variable.
//Primitive data types are passed by value.
// Pass by Reference:
//    When a variable is passed by reference, a reference (address) to the actual data is sent to the function.
//    Any change made inside the function affects the original object or array.
//    Non-primitive data types (like objects and arrays) are passed by reference.

// 3. Closures
// What is a closure, and how does it preserve access to variables?
//A closure is created when a function remembers and accesses variables from its outer scope, even after that outer function has finished executing.

// 4. 'this' in Arrow vs Regular Functions
// Explain how this behaves differently in regular functions and arrow functions.
//Ans: In regular function this refers to the 'undefined and arrow functions this refer to the its parent

// 5. IIFE
// Why might developers use an Immediately Invoked Function Expression (IIFE)?
//When we want to used function only one time in that case we can used IIFE
// Ans: Immediately Invovked Function Expression (IIFE) : An IIFE is a function expression that is immediately executed after it is created.

// Section B – Quiz (15%)

let total = 5;
(function () {
  let total = 10;
  console.log(total);
})();
console.log(total);
//Ans: B. 10, 5

// 2. Function Facts
// Which statement is true about JavaScript functions?
//Ans: B. Functions can be assigned to variables

// 3. call() vs apply()
// What is the main difference?
// A. call() runs asynchronously
// B. apply() takes arguments as an array
// C. apply() cannot change this context
// D. call() returns undefined
//Ans: B. apply() takes arguments as an array

// 4. What happens if you call a function without a default parameter value?
// A. Error B. undefined C. Skips execution D. 0
// Ans: B. undefined

// 5. Closure Concept
// Which statement about closures is correct?
// A. Closures only work with arrow functions
// B. A closure can access variables from its parent scope even after the parent has finished executing
// C. Closures prevent variable mutation
// D. Closures are created manually using new Closure()
//Ans: B. A closure can access variables from its parent scope even after the parent has finished executing

// Section C – Problem Solving (45%)

// 1. Flexible Greeting Function
// Write a function that greets the person whose name is passed as an argument. If no name is given, it should still display a message like “Hello!” without any error.

function greets(name = '') {
  console.log(`Hello ${name}!`);
}
greets('Nivi');
greets();

// 2. Object Modifier
// Create a function that takes an object and a new value for one of its properties. Inside the function, change that property’s value and print it. Then, log the object outside the function to see whether it changed or not.

const info = {
  firstName: 'Nivedita',
  lastName: 'Watpade',
};

function changeName(infoObj) {
  infoObj.firstName = 'Rani';
}
changeName(info);
console.log(info);

// 3. Text Transformer
// Write a function transformText(text, operation) that takes a string and another function as input. The second function decides how to modify the text.
function addStars(str) {
  return '*** ' + str + ' ***';
}
// console.log(transformText('JavaScript', addStars));
// Output: *** JavaScript ***

function transformText(text, operation) {
  return operation(text);
}

console.log(transformText('Nivedita', addStars));

// 4. Dynamic Math Function
// Write a function createOperator(type) that returns another function capable of performing addition, subtraction, or multiplication.
// const multiply = createOperator('multiply');
// console.log(multiply(3, 4)); // 12

function createOperator(type) {
  return function (a, b) {
    if (type === 'multiply') {
      console.log(`${a * b}`);
    } else if (type === 'addition') {
      console.log(`${a + b}`);
    } else if (type === 'subtraction') {
      console.log(`${a - b}`);
    }
  };
}

const multiply = createOperator('multiply');
multiply(3, 4);
const addition = createOperator('addition');
addition(25, 4);
const substraction = createOperator('subtraction');
substraction(29, 4);

// 5. Context Switcher
// You have two objects:
// const playerA = { name: "Asha" };
// const playerB = { name: "Ravi" };
// Write one function that says “Hello, my name is <name>”. Then, make that same function run for both objects.

const playerA = { name: 'Asha' };
const playerB = { name: 'Ravi' };

function greetingsMsg() {
  console.log(`Hello, ${this.name}`);
}

greetingsMsg.call(playerA);
greetingsMsg.call(playerB);

// 6. Private Counter
// Create a function that returns another function — this inner function should increase a private counter each time it’s called and show the updated value.
// const countSteps = createCounter();
// countSteps(); // 1
// countSteps(); // 2
// countSteps(); // 3

function createCounter() {
  let sum = 0;
  return function () {
    sum++;
    console.log(sum);
  };
}
const countSteps = createCounter();
countSteps();
countSteps();
countSteps();
countSteps();
countSteps();

// Section D – Scenario-Based Problems (30%)

// 1. Single-Use Promo Code
// Create a function generatePromo() that returns another function allowing a discount to be applied only once. After the first use, it should show “Promo code already used”.
function generatePromo(discount) {
  let isPromoApplied = false;

  return function (value) {
    if (isPromoApplied) {
      console.log('Promo code already used');
    } else {
      console.log(value * discount);
      isPromoApplied = true;
    }
  };
}

const promo = generatePromo(0.18);
promo(200);
promo(3600);

// 2. Bank Account Module
// Design a function createAccount(initialBalance) that returns methods to deposit and withdraw money, but keeps the balance private.

function createAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      balance = balance + amount;
      console.log(`Deposited ${amount}, balance: ${balance}`);
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance = balance - amount;
        console.log(`Withdrew ${amount}, balance: ${balance}`);
      } else {
        console.log('Insufficient funds');
      }
    },
  };
}

const account = createAccount(2500);
account.deposit(3200);
account.withdraw(700);

// const balance = getBalance();
// console.log(balance);

// 3. Event Simulation
// Create an object with a click-counting method that still updates the correct object even when used as a callback.

const counterObj = {
  count: 0,
};
function updateCounter() {
  console.log(`${this.count++}`);
}
const counterBtn = document.querySelector('.counterBtn');
counterBtn.addEventListener('click', updateCounter.bind(counterObj));

// 4. Custom Logger System
// Build a function createLogger(prefix) that returns a new function which logs messages in this format:
// [INFO] Server started
// [ERROR] Invalid input

function createLogger(prefix) {
  return function (msg) {
    console.log(
      `[${prefix.toUpperCase()}]: ${new Date().toLocaleTimeString()} ${msg}`
    );
  };
}

const infoLogger = createLogger('info');
infoLogger('Server started');

const errorLogger = createLogger('error');
errorLogger('Invalid input');

// 5. Auto-Cleanup Function
// Create a function that runs only once during initialization and cannot be called again, without using flags or globals.
const numbers = [1, 2, 3, 4, 5];
(function () {
  numbers.length = 0;
})();

console.log(numbers);
