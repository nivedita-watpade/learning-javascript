//Section A: Theory (15%)

// 1. Explain how destructuring makes it easier to extract values from arrays or objects.
//Ans. Array and object destructuring is a short and clean way to unpack values from an array or objectinto separate variables.

// 2. What are the key differences between the spread operator and rest operator?
// Ans: Spread operator is used to unpack from array and its on the right side of the assignment(=).
// Rest operator is used to collect multiple values into the single array and its on the left side of the assignment(=).And its the last element.

// 4. How does the ?? (nullish coalescing) operator differ from the || operator?
// Ans: ?? (nullish coalescing) is ame as || operator but ?? (nullish coalescing) does not consider empty string " " and 0 falsy value.

// 5. Describe the purpose of logical assignment operators and give one real-world use case.
// Ans: Logical OR Assignment Operator
// It set the deafult value to the varibale.
// rest1.numGuests ||= 25;
// rest2.numGuests ||= 25;

// Logical AND Assignment Operator assigns the truthy value to the varibale
// rest1.owner = rest1.owner && 'Test';
// rest2.owner = rest2.owner && 'Test';

//6. What are enhanced object literals, and how do they simplify object creation?
// Ans: Property Shorthand
//    When the property name matches the variable name, you can omit the value:
//    const person = {
//       name,
//       age
//       };

//    Method Shorthand
//    You can define methods without the function keyword:
//    const obj = {
// sayHello() {
// return 'Hello!';
// }
// };

// 8. How is a Set different from an array in JavaScript?
// Ans: Set is data structure and its just a collection of unique values.

//9. Describe two advantages of using a Map over a plain object.
// Ans: A Map is a built-in data structure it stores data in key–value pairs, similar to an object, but with some differences:
// -Keys can be of any data type (object, function, primitive).
// -Provides built-in methods to easily get the size, iterate, and manage key-value pairs.

//10. Explain how the optional chaining operator (?.) prevents runtime errors when accessing nested properties.
// Ans: Optional chaining (?.) in JavaScript is a safe way to access deeply nested properties of an object without having to check if each property exists.
// If the value before ?. is null or undefined, the whole expression short-circuits and returns undefined instead of throwing an error.

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

console.log(managerObj?.sun?.close ?? "it doesn't exist");

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
  let counter = 0;
  const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
  for (const letter of str.toLowerCase()) {
    // if (
    //   letter === 'a' ||
    //   letter === 'e' ||
    //   letter === 'i' ||
    //   letter === 'o' ||
    //   letter === 'u'
    // ) {
    //   counter++;
    // }

    if (vowelsArr.includes(letter)) {
      counter++;
    }
  }
  console.log(`Vowels: ${counter}`);
}

vowelCount('Innovation Lab');

//  ================ Section D: Scenario-Based Problem Solving (30%) ===========================
// 1. E-commerce Inventory
// You have multiple supplier objects containing lists of items they sell.

// Some suppliers don't include a discounts property.
// Merge all item lists into one.
// Ensure duplicate items appear only once.
// Print a message for suppliers missing the discounts property.
// Sample data:

const supplierA = { items: ['Keyboard', 'Mouse'], discounts: true };
const supplierB = { items: ['Mouse', 'Monitor'] };
const supplierC = { items: ['Printer', 'Monitor'], discounts: false };

const allData = [...supplierA.items, ...supplierB.items, ...supplierC.items];
const uniqueItems = new Set(allData);
console.log(uniqueItems);

const suppliers = [supplierA, supplierB, supplierC];
console.log(suppliers);

for (const supplier of suppliers) {
  supplier.discounts ??
    console.log(supplier, 'Suppliers missing the discounts');
}

// 2. Company Attendance Tracker
// A company stores daily attendance times for each employee in a nested object.

// Print which employees checked in before 9 AM.
// Safely skip missing data without causing errors.
// Sample data:

const attendance = {
  emp1: { monday: 8.45, tuesday: 9.1 },
  emp2: { monday: null },
  emp3: { tuesday: 8.55 },
};

for (const [emp, data] of Object.entries(attendance)) {
  data?.monday < 9 && console.log(emp);
}

// 3. Student Portal
// Each course object contains details like course name, instructor, and optional lab sessions.

// Print all course names with instructors.
// For missing lab sessions, print "No lab scheduled."
// Sample data:

const courses = [
  { name: 'Physics', instructor: 'Dr. Singh', lab: 'Room 12' },
  { name: 'Maths', instructor: 'Dr. Lee' },
  { name: 'Chemistry', instructor: 'Dr. Patel', lab: 'Room 9' },
];

for (const course of courses) {
  console.log(`Course: ${course.name} with instructor ${course.instructor}`);
  if (!course.lab) {
    console.log('No lab scheduled.');
  } else {
    console.log(`${course.lab}`);
  }
}

// 4. Gadget Store Management
// You store product categories in two Sets — one for electronics and one for accessories.

// Find items common to both Sets.
// Find items only in electronics.
// Find all unique items across both.
// Sample data:

const electronics = new Set(['Phone', 'Laptop', 'Earphones']);
const accessories = new Set(['Case', 'Earphones', 'Charger']);

const commonItems = electronics.intersection(accessories);
console.log(commonItems);

// Find items only in electronics.
const uniqueItems0 = electronics.difference(accessories);
console.log(uniqueItems0);

// Find all unique items across both.
const uniqueItems1 = electronics.symmetricDifference(accessories);
console.log(uniqueItems1);

// 5. Customer Data Cleanup
// You receive a list of customer names with inconsistent formatting.
// Clean each name so the first letter is uppercase and the rest lowercase.
// Remove duplicates automatically.
// Sample data: [' alice', 'BOB ', 'Alice', ' cHaRlEs ']

// const dataSet = new Set([' alice', 'BOB ', 'Alice', ' cHaRlEs ']);

function dataCleanup(data) {
  const names = data.join(' ').toLowerCase().split();
  const updatedName = [];
  for (const name of names) {
    updatedName.push(name.replace(name[0], name[0].toUpperCase().trim()));
  }
  console.log(updatedName);
  const dataSet = new Set(updatedName);
  console.log(dataSet);
}

dataCleanup([' alice', 'BOB ', 'Alice', ' cHaRlEs ']);

// 6. Digital Library (Map-based)
// The library uses a Map with bookID → bookTitle.

// Add new books.
// Delete one specific book.
// Print all books in the format "<id>: <title>".
// Sample data:

const books = new Map([
  [101, 'The Explorer'],
  [102, 'Future World'],
  [103, 'Deep Mind'],
]);

books.set(104, 'Testing Book');

books.delete(102);
console.log(books);

for (const [id, title] of books) {
  console.log(`Id: ${id}, Title: ${title}`);
}

// 7. Chat Application
// Some users have status information nested inside objects (user.details.status).

// Print "Active" if status is "online".
// If missing, print "Status unknown" safely using modern syntax.
// Sample data:

const users = [
  { name: 'Sara', details: { status: 'online' } },
  { name: 'Tom' },
  { name: 'Leo', details: { status: 'offline' } },
];

for (const user of users) {
  user?.details?.status ? console.log('Online') : console.log('Status unknown');
}
