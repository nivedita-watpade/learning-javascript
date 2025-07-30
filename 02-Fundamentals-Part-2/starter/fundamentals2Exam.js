// Section A – Theory (5 marks each)
// 1. What does "use strict" do in JavaScript? Why is it useful?
//Ans: use strict helps developer to avoid accidental error. Strict mode visible errors where javascript not able to do it.It also help to reserve keywords.

// 2. Differentiate between a function declaration and a function expression.
//Ans: function declaration can be called before it declare. It define with function name.
//  Function expreseeion define without function name and we store it into a variable. Function expression only called after its declaration

// 3. What is an arrow function? Mention one key difference from regular functions.
//Ans: Arrow function introduced in ES6. Its useful for one line function. We can not used return for one line function without curly braces
//  We store arrow function in a varibale

// 4. Why are functions useful in programming? Explain in your own words.
//Ans:Function a piece of code we can reuse it. So we do not write the same code again and again.

// 5. What does the push() method do in an array?
//Ans: push() method is used for adding element to the array at the last position.

// 6. Write the syntax of a for loop and explain its three parts.
//   Ans: for(let i =0; i< = 10; i++)
//   for loop has three parts:
//   Initialization: let i = 1 - sets the initial value
//  Condition: i <= 10 - the loop continues till the condition is true
//   Update: i++ - updates the counter after each iteration

// 7. What is the purpose of the includes() method in arrays?
// Ans: includes() checks the element present is in array or not. If element is in array it returns true if is not in array it returns false;

// 8. How are dot notation and bracket notation used to access object properties?
//Ans:
// const testObject = {
// firstName: "Nivi",
// lastName: "Watpade"
// }
// Using dot notation:
// console.log(testObject.firstName)

// Using bracket notation:
// console.log(testObject['firstName'])

// 9. What is a method in an object? How is it different from a normal function?
//Ans: Function is basically a value in javascript. So we can add it in the objets as a properties.When we used function in a object as a property we called it method

// 10. When is a while loop preferred over a for loop?
//Ans:when we do not know the how many iteration will perform in that case we used while

// Section B – Problem Solving (5 marks each)
// 11. Enable strict mode in your code. Declare a variable with a typo and observe the error.
// Fix the issue using strict mode.
"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// 12. Write a function sayHello(name) that prints: "Hello, <name>! Have a great day." Call it 3
// times.

function sayHello(name) {
  console.log(`Hello, ${name}! Have a great day.`);
}

// sayHello("Nivedita");
// sayHello("Ankita");
// sayHello("Pranit");

for (let i = 0; i <= 2; i++) {
  sayHello("Nivedita");
}

// 13. Create two functions: getDouble(n) (declaration) and getTriple(n) (expression). Use 5 as
// input.

function getDouble(n) {
  const doubleNum = n + n;
  return doubleNum;
}

console.log("Double of Number", getDouble(5));

const getTriple = function (n) {
  const tripleNum = n + n + n;
  return tripleNum;
};

console.log("Triple of Number", getTriple(5));

// 14. Create an arrow function getStatus(score) that returns "Pass" or "Fail" based on 40
// marks.

const getStatus = (score) => (score > 40 ? "Pass" : "Fail");

console.log(getStatus(35));

// 15. Write a function square(n) and another function printSquareSum(a, b) that adds a and b,
// then squares the result.

function square(n) {
  const squareNumber = n * n;
  return squareNumber;
}

function printSquareSum(a, b) {
  const additionOfNum = a + b;
  return square(additionOfNum);
}

console.log(printSquareSum(5, 5));

// 16. Work with array colors: Add, replace, and print items. Print the last item.

const colors = [];
colors.push("Black");
colors.push("Red");
colors.push("White");
colors.push("Blue");
colors.push("Purple");

colors[2] = "grey";

console.log(colors);

console.log("Last Element Of An Array:", colors[colors.length - 1]);

// 17. Check if "email" is in toDoList using includes(). Print appropriate message.

const toDoList = ["email", "call", "meetings", "interview"];

if (toDoList.includes("email")) {
  console.log("Email is found in Array");
} else {
  console.log("Email is not found in Array");
}

// 18. Create object device. Access properties using dot/bracket notation. Add a new property.

const device = {
  name: "Dell laptop",
  RAM: "16GB",
  processor: "i7",
  color: "black",
};

device.windows = 11;

console.log(
  `${device.name} has ${device.RAM} memory and ${device.processor} processor with ${device.color} color`
);

// 19. Create object employee with getExperience() and getProfile() methods.

const employee = {
  employeeName: "Nivedita",
  degree: "Master Degree",
  designation: "Berojgaar",
  experience: "4+",
  getExperience: function () {
    console.log(
      `${this.employeeName} having ${this.experience} years experience`
    );
  },
  getProfile: function () {
    console.log(
      `${this.employeeName} having ${this.degree} currently ${this.designation}`
    );
  },
};

employee.getExperience();
employee.getProfile();

// 20. Use a for loop to print all even numbers between 1 and 20.

const numbersArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

for (let i = 0; i <= numbersArr.length - 1; i++) {
  //const evenNum = numbersArr[i] / 2;
  if (numbersArr[i] % 2 === 0) {
    console.log("Even Numbers are:", numbersArr[i]);
  }
}

// 21. Create array prices, apply 10% discount in a new array, print both.

const prices = [250, 700, 600, 550, 980, 1000];
const discount = [];

function calculateDiscount(prices) {
  //   let sum = 0;
  for (let i = 0; i <= prices.length - 1; i++) {
    // sum = sum + prices[i];
    const discountPrices = (prices[i] * 10) / 100;
    discount.push(discountPrices);
  }
}

calculateDiscount(prices);

console.log(prices, discount);

// 22. Simulate a coin toss. Use a while loop to toss until "Heads" is rolled.

let roll = Math.random();
while (roll < 0.5) {
  console.log(`Heads`);
  roll++;
}

// Section C – Scenario-Based Coding (8 marks each)
// 23. Student Result System
// Write a function that takes a student's name and marks as input and returns a message
// based on the following criteria: Marks ≥ 90 → "Excellent, <name>!", 75–89 → "Very Good,
// <name>!", 50–74 → "Good, <name>!", Below 50 → "Needs Improvement, <name>".

function studentInfo(name, marks) {
  if (marks >= 90) {
    console.log(`Excellent, ${name}`);
  } else if (marks <= 89 && marks >= 75) {
    console.log(`Very Good, ${name}`);
  } else if (marks <= 74 && marks >= 50) {
    console.log(`Good, ${name}`);
  } else if (marks <= 50) {
    console.log(`Needs Improvement, ${name}`);
  }
}

studentInfo("Nivedita", 95);

// 24. Shopping Cart Total
// Given an array of item prices, calculate the total bill. If the total exceeds 1000, apply a
// discount. Return the final amount.

const pricesData = [250, 200, 400, 50, 80, 100];

function calculateTotalBill(pricesData) {
  let sum = 0;
  for (let i = 0; i <= pricesData.length - 1; i++) {
    sum = sum + pricesData[i];
  }
  if (sum >= 1000) {
    const discountBillTotal = (sum * 10) / 100;
    return discountBillTotal;
  } else {
    return sum;
  }
}

console.log(calculateTotalBill(pricesData));

// 25. User Profile Generator
// Create a function that accepts first name, last name, and year of birth. Return an object with
// full name, current age (based on 2025), and adult status.

function userProfileGenerator(fname, lname, year) {
  const userProfile = {
    firstName: fname,
    lastName: lname,
    // age: 2025 - year,
    currentAge: function () {
      this.age = 2025 - year;
      return 2025 - year;
    },
  };
  userProfile.status = userProfile.currentAge() >= 18 ? "Adult" : "Child";
  return userProfile;
}
const userProfile = userProfileGenerator("Nivedita", "Watpade", 2000);
console.log(userProfile.currentAge());
console.log(userProfile);

// 26. Guest List Checker
// Write a function that accepts a name and a guest list. Return a message saying whether the
// person is invited or not.

const guestsList = ["Nivedita", "Ankita", "Gayatri", "Kanchan", "Ritu"];

function guestListChecker(name, guestsList) {
  // for (let i = 0; i <= guestsList.length - 1; i++) {
  //   if (guestsList[i] === name) {
  //     console.log(`${name} is invited`);
  //   }
  // }

  if (guestsList.includes(name)) {
    console.log(`${name} is invited`);
  } else {
    console.log(`${name} is not invited`);
  }
}

guestListChecker("Pranit", guestsList);

// 27. Book Tracker
// Create an object representing a book with title, author, publication year, and read status.
// Add a method to return a summary about the book.

const book = {
  title: "ebook",
  author: "Pranit Chavan",
  publicationYear: 2000,
  status: "write",
  summary: function () {
    console.log(
      `${this.title} written by ${this.author} in ${this.publicationYear} and status is ${this.status}`
    );
  },
};

book.summary();

// 28. Gym Repetition Logger
// Write a function that logs exercise progress. The function should accept a number
// representing how many sets the user has to complete. Log a message for each set.

function gymLogger(set) {
  let num = 1;
  while (num <= set) {
    console.log(`Gym Repetiton ${num}`);
    num++;
  }
}

gymLogger(5);

// 29. Temperature Category
// Create a function that takes a temperature value and returns one of the following
// categories: "Cold", "Pleasant", or "Hot".

function checkTemperature(temperature) {
  if (temperature >= 45) {
    console.log("Hot");
  } else if (temperature >= 25) {
    console.log("Pleasant");
  } else if (temperature <= 18) {
    console.log("Cold");
  }
}

checkTemperature(25);

// 30. Fruit Inventory Reporter
// Given an object representing different fruit quantities, write a function that returns a string
// like: "You have X apples, Y bananas, and Z oranges."

const fruits = {
  applesQuantity: 5,
  bananasQuanity: 12,
  orangeQuantity: 2,
};

const fruits1 = {
  applesQuantity: 15,
  bananasQuanity: 12,
  orangeQuantity: 12,
};

function fruitsInventory(fruitsObj) {
  console.log(
    `You have ${fruitsObj.applesQuantity} apples, ${fruitsObj.bananasQuanity} bananas, and ${fruitsObj.orangeQuantity} oranges`
  );
}

fruitsInventory(fruits1);

// 31. Skill Analyzer
// Create an object for a person with a name and a list of skills. Add a method that returns the
// total number of skills and prints each one.

const person = {
  personName: "Nivedita",
  skills: [
    "Communication",
    "Problem-solving",
    "Adaptability",
    "Leadership",
    "Creativity",
  ],
  personSkills: function () {
    for (let i = 0; i < this.skills.length - 1; i++) {
      console.log(
        `Total number of skills: ${this.skills.length - 1} and skills are: ${
          this.skills[i]
        }`
      );
    }
  },
};

person.personSkills();

// 32. Random Number Game
// Write a function that keeps generating random numbers from 1 to 10 until the number 7 is
// generated. Print each number.

function randomNumGenerator() {
  let randumNumber = Math.trunc(Math.random() * 10) + 1;
  while (randumNumber !== 7) {
    randumNumber = Math.trunc(Math.random() * 10) + 1;
    console.log(`${randumNumber}`);
  }
}

randomNumGenerator();

// 33. Array Filter Reporter
// Given an array of mixed types, write a function that prints only the string values from the
// array.

const mixedData = ["Nivi", 29, true, "Pranit"];
for (let i = 0; i <= mixedData.length - 1; i++) {
  // console.log(typeof mixedData[i]);
  if (typeof mixedData[i] === "string") {
    console.log(mixedData[i]);
  }
}

// 34. Team Age Calculator
// You are given an array of birth years for 5 teammates. Write a function that returns a new
// array containing their ages in 2025.

const birthYear = [1996, 2000, 2003, 1997, 1995];
const teamMembersBirthYear = [];

function calculateYear(year) {
  for (let i = 0; i <= year.length - 1; i++) {
    const teamMemberBirthYear = 2025 - year[i];
    teamMembersBirthYear.push(teamMemberBirthYear);
    // console.log(teamMemberBirthYear);
  }
}

calculateYear(birthYear);

console.log(birthYear, teamMembersBirthYear);
