// B
// Quiz / Short Questions
// Answer in one word, one line, or a short expression.

// What is the output of:
// 0.1 + 0.2 === 0.3
//Ans: false  -JavaScript uses binary floating-point numbers. Some decimals like 0.1 and 0.2 cannot be represented exactly,

// What will this return?
// Number.parseFloat("45px")
// Ans: 45

// True or False: Number.isNaN("NaN") returns true.
//Ans: False

// Find the output:
// Math.floor(-3.2)
//Ans: -4

// What does (200).toFixed(3) return?
//Ans: '200.000'

// Which one is a valid BigInt?
// A. 20
// B. 20n
// C. BigInt("20.5")
//Ans: B

// What does this produce?
// new Date(0)
//Ans: 1 january 1970

// True or False: Intl.NumberFormat can format currency values.
//Ans: True

// How do you stop a running interval created by setInterval()?
//Ans: By using clearInteval() we will stop the setInterval . We have to pass timerID to the clearInterval().

// What is the remainder of:
// 17 % 4
//Ans: 1

// C
// Problem-Solving Questions
// Write code or describe clearly how you would solve each of the following tasks.
// Parsing & Conversion
// Given:
// const values = ["40px", "101", "9.81m", "x200", "75.9kg"];
// Tasks:
// Extract all valid integers.
// Extract all valid floating-point numbers.
// Convert all numeric parts into actual numbers, ignoring completely invalid items.

const values = ['40px', '101', '9.81m', 'x200', '75.9kg'];

//1.
const allInt = values.filter(value => {
  return Number.parseInt(value, 10);
});
console.log(allInt);

//1.
const allFloat = values.filter(value => {
  return Number.parseFloat(value, 10);
});
console.log(allFloat);

//2. Number Checks
// Given:

// const nums = [20, "20", NaN, Infinity, -5, 0, 3.14];

// Return three separate arrays:
// All integer values.
// All finite numbers.
// All values that are NaN.

const nums = [20, '20', NaN, Infinity, -5, 0, 3.14];
console.log(
  nums.filter(num => {
    if (Number.isInteger(num)) {
      return num;
    }
  })
);

console.log(
  nums.filter(num => {
    if (Number.isFinite(num)) {
      return num;
    }
  })
);

console.log(
  nums.filter(num => {
    if (Number.isNaN(num)) {
      return num;
    }
  })
);

//3. Rounding Practice
// For each of the following values:

// [4.7, 4.3, -4.7, -4.3]

// Determine:
// The nearest integer (using standard rounding).
// The value rounded up.
// The value rounded down.
// The value with decimals removed (truncated).

const val1 = [4.7, 4.3, -4.7, -4.3];

const nearestInt = val1.map(val => {
  return Math.round(val);
});
console.log('Rounded', nearestInt);

const roundedUp = val1.map(val => {
  return Math.ceil(val);
});
console.log('Rounded Up', roundedUp);

const roundedDown = val1.map(val => {
  return Math.floor(val);
});
console.log('Rounded Down', roundedDown);

const noDecimal = val1.map(val => {
  return Math.trunc(val);
});
console.log('No Decimal', noDecimal);

// 4. Decimal Formatting
// Given:

// const prices = [49.99, 2.5, 120.456, 5];

// Return a new array where each price is formatted to exactly two decimal places as strings.

const prices = [49.99, 2.5, 120.456, 5];
console.log(
  prices.map(price => {
    return price.toFixed(2);
  })
);

// 5. BigInt Operations
// Given:

// const a = 950000000000000000000n;
// const b = 65000000000000000000n;

// Compute:
// a + b
// a * b
// b / a (integer result only).

const a = 950000000000000000000n;
const b = 65000000000000000000n;

console.log(a + b);
console.log(a * b);
console.log(b / a);
