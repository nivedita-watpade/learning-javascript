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

// Date Creation
// Create Date objects for:
// 15 August 2027, 9:30 AM (local time).
// The current moment (now).
// A date that is exactly 10 days from now.

const aug15Date = new Date(2027, 7, 15, 9, 30, 0);
console.log('15 August 2027, 9:30 AM:', aug15Date);

const now = new Date();
console.log('Current time:', now);

const newDate = new Date();
newDate.setDate(newDate.getDate() + 10);
console.log('10 days from now:', newDate);

// Date Operations
// Given:

// const d1 = new Date(2029, 4, 12);
// const d2 = new Date(2029, 4, 20);

// Find:
// The difference between d2 and d1 in milliseconds.
// The difference in whole days.
// A message like "Today", "Yesterday", "X days ago" based on the difference.

const d1 = new Date(2029, 4, 12);
const d2 = new Date(2029, 4, 20);

const diffBetweenDate = d2 - d1;
console.log(diffBetweenDate);

const wholeDay = diffBetweenDate / (1000 * 60 * 60 * 24);
console.log(wholeDay);

if (wholeDay === 0) {
  console.log('Today');
} else if (wholeDay < 0) {
  console.log('Yesterday');
} else if (wholeDay > 0) {
  console.log(`${wholeDay} days ago`);
}

// Intl – Date Formatting
// Format the following date:

// const dt = new Date(2030, 10, 5, 18, 45);

// For the following locales:
// "en-IN"
// "en-US"
// "hi-IN"
// Use:
// Long weekday
// Numeric day
// Long month
// Numeric year

const dt = new Date(2030, 10, 5, 18, 45);

const options = {
  week: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

console.log('India:', new Intl.DateTimeFormat('en-IN', options).format(dt));
console.log('US:', new Intl.DateTimeFormat('en-US', options).format(dt));
console.log('Hindi:', new Intl.DateTimeFormat('hi-IN', options).format(dt));

// Intl – Number Formatting
// Given:

// const amount = 9876543.21;

// Format this number as:
// Indian currency (INR).
// US currency (USD).
// A percentage.
// A plain number with exactly three decimal places.

const amount = 9876543.21;

console.log(
  'India:',
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount)
);

console.log(
  'US:',
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
);

// console.log(
//   'US:',
//   new Intl.NumberFormat('en-IN', {
//     style: 'percentage',
//   }).format(amount)
// );

const plainNum = Math.trunc(amount);
const plainNum1 = plainNum.toFixed(3);
console.log(plainNum1);

// Timer Logic
// Implement:
// A timeout that logs "Loading user data..." after 3 seconds.
// A timeout that is created but then cancelled before it executes.
// An interval that prints the current time every second, formatted using Intl.DateTimeFormat.

setTimeout(function () {
  console.log('Loading...');
}, 3000);

const timeoutToCancel = setTimeout(() => {
  console.log('This will not run.');
}, 5000);

clearTimeout(timeoutToCancel);

// setInterval(() => {
//   console.log(
//     new Intl.DateTimeFormat('en-IN', {
//       dateStyle: 'medium',
//       timeStyle: 'medium',
//     }).format(new Date())
//   );
// }, 1000);

// D
// Real-World Scenario-Based Problems
// Use the concepts above to solve these story-based challenges.

// Scenario 1 – E-Commerce Price Engine
// A shopping website logs raw product prices in different formats:

// const rawPrices = ["₹1,299.50", "2499.99", "5600", "12.5%", "4,999"];

// Extract the numeric value from each entry.
// Convert the percentage value into a decimal number.

// Round all numeric values to two decimal places.
// Format all cleaned numbers as Indian currency using Intl.NumberFormat.
// Compute the total price of all valid numeric values.

const rawPrices = ['₹1,299.50', '2499.99', '5600', '12.5%', '4,999'];
//1.
const numericValue = rawPrices.map(price => Number.parseInt(price, 10));
console.log(numericValue.filter(num => Number.isFinite(num)));

// Scenario 2 – Fitness App Streak Calculation
// A user's workout dates are stored as:

// const logs = [
//   "2025-01-01",
//   "2025-01-03",
//   "2025-01-04",
//   "2025-01-10",
//   "2025-01-11"
// ];

// Convert each log string into a Date object.
// Calculate the gap in days between each consecutive workout.
// Identify the longest gap between any two workouts.
// For the most recent workout, output a message like "Yesterday", "2 days ago", or "X days ago".

const logs = [
  '2025-01-01',
  '2025-01-03',
  '2025-01-04',
  '2025-01-10',
  '2025-01-11',
];

//1
const datesObj = logs.map(log => new Date(log));
console.log(datesObj);

// Scenario 3 – Banking App Statement Generator
// A banking app stores transaction timestamps as:

// const txDates = [
//   "2025-07-01T10:15",
//   "2025-07-03T14:20",
//   "2025-07-03T14:25",
//   "2025-07-10T09:00"
// ];

// Convert each timestamp string into a Date object.
// Compute the time difference (in hours or minutes) between each consecutive transaction.
// Format each timestamp in the user's locale (assume "en-IN").
// For each transaction, display a relative message such as "Today", "Yesterday", or "X days ago".

const txDates = [
  '2025-07-01T10:15',
  '2025-07-03T14:20',
  '2025-07-03T14:25',
  '2025-07-10T09:00',
];
