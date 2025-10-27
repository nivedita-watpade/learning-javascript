//Section A: Theory (15%)

// 1. Explain how destructuring makes it easier to extract values from arrays or objects.
//Ans. Array and object destructuring is a short and clean way to unpack values from an array or objectinto separate variables.

// 2. What are the key differences between the spread operator and rest operator?
// Ans: Spread operator is used to unpack from array and its on the right side of the assignment(=).
// Rest operator is used to collect multiple values into the single array and its on the left side of the assignment(=).And its the last element.

// Section B: Quiz (20%)

// 1.  What will console.log(0 || 'Code') output?
//     Ans: ‘Code’

// 2.  What will console.log(5 && 10 && null && 'JS') output?
//     Ans: null

// 3.  Which of these correctly merges two arrays into one?
//     Ans: [...a, ...b]

// 4.  The rest operator must always appear:
//     Ans: Last in destructuring

// 5.  What does Object.entries() return?
//     Ans: Array of [key, value] pairs

// 6.  What will new Set([1, 2, 2, 3]).size return?
//     Ans: 3

// 7.  Which statement about the ?? operator is correct?
//     Ans: IIt returns the first non-nullish value

// 8.  What does "hello".padStart(8, "\*") return?
//     Ans: "\*\*\*hello"

// 9.  Which operator only considers null and undefined as falsy values?
//     Ans: ??

// 10. In a for...of loop, what does the loop variable represent?
//     Ans: Value

//===================Section C: Problem Solving (35%)================================

// You're given an array of car brands. Extract the first, third, and fifth brands into separate variables and print them.
// Sample data: ['Honda', 'Tesla', 'Toyota', 'BMW', 'Audi']

const carBrands = ['Honda', 'Tesla', 'Toyota', 'BMW', 'Audi'];
const [firstCarBrand, , thirdCarBrand, , fifthCarBrand] = carBrands;
console.log(firstCarBrand, thirdCarBrand, fifthCarBrand);

// Merge two arrays of product IDs into a single array without changing the originals.
// Sample data: [101, 102, 103] and [104, 105]

const prod1ID = [101, 102, 103];
const prodID2 = [104, 105];
const prodID = [...prod1ID, ...prodID2];
console.log(prodID);

//Create a function that accepts any number of student scores and returns both the total and the average.

function calculateStudentScore(...scores) {
  sum = 0;
  for (const score of scores) {
    sum = sum + score;
  }
  const avg = sum / scores.length;
  console.log(sum);
  console.log(avg);
}

calculateStudentScore(80, 60, 60);

//From the following nested array, extract all numbers into separate variables and print them individually.
const values = [5, 10, [15, 20]];
const [a, b, [c, d]] = values;
console.log(a, b, c, d);

// You have an object storing user details (name, age, email). Use object destructuring to store these values in separate variables.
const data = { name: 'Ava', age: 22, email: 'ava@mail.com' };
const { name, age, email } = data;
console.log(name, age, email);

// A manager object stores work hours for multiple days. Safely access the opening time for Sunday, providing a default message if it doesn't exist.
// Sample data: { mon: {open: 9, close: 18}, fri: {open: 10, close: 17} }

const managerObj = {
  mon: { open: 9, close: 18 },
  fri: { open: 10, close: 17 },
};

console.log(managerObj.mon.close);

// Write a program that takes two arrays of employees and prints all unique employee names.
// Sample data: ['Mia', 'Noah', 'Liam'] and ['Liam', 'Emma', 'Olivia']
const employee1 = ['Mia', 'Noah', 'Liam'];
const employee2 = ['Liam', 'Emma', 'Olivia'];
const allEmployess = new Set([...employee1, ...employee2]);
console.log(allEmployess);

// Create a copy of an existing object but add a new property lastUpdated set to the current date.
// Sample data: { task: 'Report Review', status: 'Pending' }

const oldObj = { task: 'Report Review', status: 'Pending' };
const updatedObj = structuredClone(oldObj);
updatedObj.lastUpdated = new Date().toLocaleDateString();
console.log(oldObj);
console.log(updatedObj);

// From the following object of department salaries, print each department and its salary using Object.entries().
// Sample data: { HR: 35000, IT: 50000, Finance: 42000 }

const deptData = { HR: 35000, IT: 50000, Finance: 42000 };

for (const [key, value] of Object.entries(deptData)) {
  console.log(`Department: ${key}, Salaries: ${value}`);
}

// Write a function that counts how many vowels appear in a string. Ignore case and spaces.
// Sample data: 'Innovation Lab'
function vowelCount(str) {
  console.log(str.length);
}

vowelCount('Innovation Lab');

// Given two strings, check if they are anagrams of each other (contain the same characters in any order).
// Sample data: "listen" and "silent"
