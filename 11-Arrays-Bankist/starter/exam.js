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

console.log(
  stocks.filter(stock => stock > 0).reduce((acc, curr) => acc + curr, 0)
);

console.log(stocks.with(2, 99));

// Scenario 3 – Travel App (Daily Step Tracking)
// A fitness travel group logs steps as:

// let steps = [3500, 12000, 5500, 18000, 9000, 4000];

// Extract the last three days of step data.
// Filter the days where they walked more than 8000 steps.
// Convert all step counts into kilometers, assuming 1 km = 1312 steps.
// Find the first day with fewer than 4000 steps.
// Sort the steps in ascending order.

let steps = [3500, 12000, 5500, 18000, 9000, 4000];

console.log(steps.slice(-3));
console.log(steps.filter(step => step > 8000));
console.log(steps.map(step => Math.trunc(step / 1312)));
console.log(steps.find(step => step < 4000));
console.log(steps.sort((a, b) => a - b));

// Scenario 4 – Movie Streaming App (User Rating Analysis)
// User movie ratings (1–10 scale) are stored as:

// const ratings = [9, 4, 7, 10, 6, 8, 3];

// Split the ratings into two groups: “good” ratings (greater than or equal to 7) and “bad” ratings (below 7).
// Return a single score by summing all ratings.
// Generate an array of review codes like "R1", "R2", "R3", ... matching the number of ratings.
// Create a new array where the rating at index 2 is replaced with 100, while keeping the original unchanged.
// Flatten this nested data into a single array:
// [ratings, [11, 12]]

const ratings = [9, 4, 7, 10, 6, 8, 3];
console.log(Object.groupBy(ratings, rating => (rating >= 7 ? 'Good' : 'Bad')));
console.log(ratings.reduce((acc, rating) => acc + rating, 0));
console.log(Array.from({ length: ratings.length }, (_, i) => `R${i + 1}`));
console.log(ratings);
console.log(ratings.with(2, 100));
console.log([ratings, [11, 12]].flat());

// Scenario 5 – Banking App (Account Categorization)
// A bank tracks user accounts as:

// const accounts = [
//   { owner: "Alice", balance: 5000, transactions: [200, -50, 400, -100, 300] },
//   { owner: "Bob",   balance: 12000, transactions: [5000, -2000, 200, -400] },
//   { owner: "Charlie", balance: 800, transactions: [100, -50] }
// ];

// Create a grouped structure categorizing accounts as:
// "high" for balance > 5000
// "medium" for balance between 2000 and 5000 (inclusive)
// "low" for balance below 2000
// Create a single array containing all transactions from all accounts together.
// Calculate the total sum of all transactions.
// Return the first account with balance below 1000.
// Create a new version of the accounts data where Charlie’s balance becomes 2000, without changing the original data.

const accounts = [
  { owner: 'Alice', balance: 5000, transactions: [200, -50, 400, -100, 300] },
  { owner: 'Bob', balance: 12000, transactions: [5000, -2000, 200, -400] },
  { owner: 'Charlie', balance: 800, transactions: [100, -50] },
];

console.log(
  Object.groupBy(accounts, account => {
    if (account.balance > 5000) return 'high';
    if (account.balance >= 2000) return 'medium';
    return 'low';
  })
);

console.log(accounts.flatMap(acc => acc.transactions));
console.log(
  accounts.flatMap(acc => acc.transactions).reduce((acc, curr) => acc + curr)
);
console.log(accounts.find(acc => acc.balance < 1000));

console.log(
  accounts.with(2, {
    owner: 'Charlie',
    balance: 2000,
    transactions: [100, -50],
  })
);

// Scenario 6 – Food Delivery App (Order Processing)
// Daily order values are recorded as:

// const orders = [120, 450, 90, 320, 50, 600, 200];

// Extract the first three and the last three orders.
// Identify the first “small” order (order value below 100).
// Convert all order values into “food points” where 1 rupee = 2 points.
// Remove the lowest order value from the list in a new array version.
// Group orders into two categories: "large" (value > 300) and "regular" (value ≤ 300).

const orders = [120, 450, 90, 320, 50, 600, 200];

console.log(orders.toSpliced(0, 3));
console.log(orders.toSpliced(-3));
console.log(orders.find(order => order < 100));
console.log(orders.map(order => order * 2));

// A
// Theory Questions
// Answer the following questions in brief or with suitable examples where needed.

//1. Explain the difference between extracting part of an array vs modifying an array. Provide examples for both.
// Ans: Extracting part of an array means creating a new array with selected elements, without modifying the original array. Ex. slice()
// Modifying an array means changing the contents of the original array, such as updating, adding, or removing elements. Ex. pop(), push(), splice()

//2. What is a shallow copy? Which array operations can create one?
//Ans: Shallow copy means duplicates the structure like array, object etc. Slice method is used to create a shallow copy of array

//3. Describe how callback-based iteration works. What arguments can the callback receive in different data structures (Array, Map, Set)?
//Ans: Map(): The callback takes three arguments: value, key, and the map itself.
// Set(): A Set only stores unique values — no keys.
// The second argument (valueAgain) is redundant; it’s just there to match the Map API format.

//4. Compare transforming an array, filtering an array, and reducing an array into a single value.
// Ans: map():returns a new array of the transformed values.
// filter(): keeps only the elements that pass the test condition.
// reduce(): The reduce() method is used to reduce an array to a single value — like a number, string, object, or another array.

//5. What does it mean when a method “mutates” the original array? List five mutating and five non-mutating methods.
//Ans: Method “mutates” the original array means methods change the original array
//Mutating array method = splice, sort, reverse, push, pop
//Non-Mutating array method = toSpliced, toSorted, toReversed, with, map, filter

//6. Explain lexicographical sorting. Why do numbers not sort correctly by default?
//Ans: By default sort lexicographical(means a-z). it sorts elements as strings lexicographically. If numbers sort lexicographical its not sort properly.For number we have to compare a, b number and as per we sort number

//7. What is the purpose of grouping data? How does programmatically grouping items help in real-world applications?
//Ans: Groups array items into an object based on a grouping function.

//8. What is flattening? How is it useful when handling nested data structures?
//Ans: flattening means flatten nested arrays, meaning it removes inner array levels and returns a new array with all elements at the specified depth.

//9. Explain why some array methods return booleans. Give examples.
// Ans: Checks if at least one element in the array satisfies the condition.
//    It returns true if any element matches; otherwise false.
// Ex.const anyWithdrawl = movements.some(mov => mov < 0);
// console.log(anyWithdrawl);

//10. What is the advantage of newer non-mutating methods like toReversed, toSorted, toSpliced, and with compared to older ones?
//Ans: New one method did not muating original array It keep original array same as before and they create a new array with the required changes.

//11. Describe the difference between pre-increment and post-increment with a use case.
//Ans:
// Post-increment: count++
// Returns the current value first, then increments the variable.
// let count = 5;
// let x = count++;
// // x = 5, count becomes 6

// Pre-increment: ++count
//    Increments the variable first, then returns the updated value.
//    let count = 5;
//    let x = ++count;
//    // count becomes 6, x = 6
