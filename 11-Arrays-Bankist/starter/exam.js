// B
// Quiz / Short Questions
// Answer in one word, one line, or a short expression.

// What is the result of accessing an array element with an index that is out of range (for example, arr[999])?
// Ans: undefined;

// What is returned if a search operation does not find any match?
// Ans: false;

// True or False: forEach can be stopped using break.
// Ans: False;

// What is the output of "hello".at(-2)?
// Ans: l;

// Create an array of size 4 filled with the value 9.
// Ans: const arr = [1,2,3,4]
// arr.fill(9)
// OR
// const arr = Array.from({ length: 4 }, () => 9);

// Convert [1, 2, 3] into ["1", "2", "3"] without using explicit loops.
// Ans:

// What will this expression produce?
// Array.from({ length: 5 }, (_, i) => i * 2)
// Ans: [0,2,4,6,8,]

// ================================================================================================

// C
// Problem-Solving Questions
// Write code or describe the steps clearly to perform each task.

// Extracting & Copying
// Given:

// let data = ["x", "y", "z", "p", "q", "r"];

// Extract items from index 2 to 4 without modifying the original array.
// Create a copy of the whole array.
// Extract the last three items using negative indexing.

let data = ['x', 'y', 'z', 'p', 'q', 'r'];
data.slice(2, 4);
const data1 = data.slice();
console.log(data1);
console.log(data1.slice(-3));

// Modifying Lists
// Given:

// let points = [10, 20, 30, 40, 50];

// Remove the value at index 2.
// Insert 25 after 20.
// Replace 50 with 500.

let points = [10, 20, 30, 40, 50];

console.log(points.splice(2, 1));
console.log(points);
console.log(points.splice(2, 0, 25));
console.log(points);
console.log(points.with(-1, 500));

// Transforming Values
// Given:
// let temps = [30, 35, 40, 25, 20];
// Return a new array where each value is converted from Celsius to Fahrenheit.

let temps = [30, 35, 40, 25, 20];

const fahrenheitTemp = temps.map(temp => {
  return 59 * temp + 32;
});

console.log(fahrenheitTemp);

// Filtering Values
// Given:
// let marks = [12, 55, 98, 22, 41, 75, 5];
// Return an array containing only the passing marks (greater than or equal to 40).

let marks = [12, 55, 98, 22, 41, 75, 5];

const marksGreater40 = marks.filter(mark => mark >= 40);
console.log(marksGreater40);

// Accumulating Result
// Given:
// let salaries = [20000, -1500, 25000, -700, 18000];
// Compute the total net income..

let salaries = [20000, -1500, 25000, -700, 18000];

const totalIncome = salaries.reduce((acc, salary) => acc + salary, 0);
console.log(totalIncome);

// Search Tasks
// Using the same salaries array:

// let salaries = [20000, -1500, 25000, -700, 18000];

// Find the first negative salary.
// Find the index of the first salary greater than 20000.
// Find the last salary below 0.

console.log(salaries.find(salary => salary < 0));
console.log(salaries.findIndex(salary => salary > 20000));
console.log(salaries.findLastIndex(salary => salary < 0));

// Flattening
// Flatten the following structure to a single-level array:

console.log([1, [2, 3], [4, [5, 6]]].flat(2));

// Sorting
// Given:
// [45, 3, 99, 12, 5]
// Sort the numbers in ascending order.
// Sort the numbers in descending order without changing the original array.

console.log([45, 3, 99, 12, 5].sort((a, b) => a - b));
console.log([45, 3, 99, 12, 5].toSorted((a, b) => b - a));

// Filling / Generating
// Create an array of length 6 filled with the string "pending".
// Create an array containing the numbers from 1 to 20.

console.log(Array.from({ length: 6 }, () => 'pending'));
console.log(Array.from({ length: 20 }, (_, i) => i + 1));

// Non-Mutating Edits
// Given:
// ["red", "blue", "green", "yellow"]
// Create a new array where "green" is replaced with "lime", but the original array must remain unchanged.

const colors = ['red', 'blue', 'green', 'yellow'];
const colors1 = colors.with(2, 'lime');
console.log(colors);
console.log(colors1);

// ===================================================================================================

// D
// Real-World Scenario-Based Problems
// Use array methods and concepts to solve the following story-based challenges.

// Scenario 1 – Online Course Platform (Video Completion Tracker)
// A learning platform tracks how long each student watched a video:

// const minutesWatched = [5, 42, 12, 60, 3, 90];

// Return only the students who watched more than 30 minutes.
// Convert all watch times from minutes to hours (decimal form).
// Calculate the total minutes watched overall.
// Find the first student who watched less than 10 minutes.
// Sort the watch times from highest to lowest without altering the original array

const minutesWatched = [5, 42, 12, 60, 3, 90];

const updatedMinutesWatched = minutesWatched
  .filter(minute => minute > 30)
  .map(minute => minute / 60);
console.log(updatedMinutesWatched);

const totalMinutes = minutesWatched.reduce((acc, curr) => acc + curr, 0);
console.log(totalMinutes);

const lessThan10 = minutesWatched.find(minute => minute < 10);
console.log(lessThan10);

const sortedMinutes = minutesWatched.toSorted((a, b) => b - a);
console.log(minutesWatched);
console.log(sortedMinutes);

// Scenario 2 – Grocery Store (Inventory Cleanup)
// The inventory manager has product quantities recorded as:

// let stock = [12, 0, 5, 0, 8, 14, 0, 3];

// Remove all zero-quantity items.
// Increase each remaining quantity by 10% as a restock update.
// Find the last product with quantity below 10.
// Compute the total number of items in stock. ---- Pending
// Produce a new version of the list where the 3rd item is replaced with 99 but the original array remains unchanged.

let stocks = [12, 0, 5, 0, 8, 14, 0, 3];

console.log(
  stocks
    .filter(stock => stock > 0)
    .map(stock => stock + stock * 0.1)
    .findLast(stock => stock < 10)
);

console.log(stocks.with(2, 99));
