// "use strict";

// const addthreeVal = function (a, b, c) {
// 	const addNum = a + b;
// 	return addNum * c;
// };

// const addThree = addthreeVal(2, 2, 4);
// console.log(addThree);

// function valueOperation(val1, val2, val3) {
// 	if (val1 === 0 || val2 === 0 || val3 === 0) {
// 		return "Value should be greater than zero";
// 	} else {
// 		const addVal = val1 + val2;
// 		const total = addVal * val3;
// 		return total;
// 	}
// }

// console.log(valueOperation(10, 1, 10));

// const sayHiTxt = function () {
// 	console.log("Hi");
// };

// sayHiTxt();

// console.log(test1(2, 3)); // Works?

// console.log(test2(2, 3)); // Error?

// function test1(a, b) {
// 	return a + b;
// }

// const test2 = function (a, b) {
// 	return a * b;
// };

// // Explain why?

// // Create a function expression checkBMI(weight, height) that:
// // Calculates BMI = weight / (height * height)
// // Returns "High" if BMI > 25, "Normal" if ≤ 25

// const checkBMI = function (weight, height) {
// 	if (weight === undefined || height === undefined || weight === null || height === null) {
// 		return "Please enter a valid value.........";
// 	}
// 	const BMI = weight / (height * height);
// 	if (BMI > 25) {
// 		return "High";
// 	} else if (BMI <= 25) {
// 		return "Normal";
// 	}
// };

// console.log(checkBMI(70));

// function findMax(a, b) {
// 	if (a === undefined || b === undefined || a === null || b === null) {
// 		return "Please enter a valid value.........";
// 	} else if (a > b) {
// 		return `${a} is greater than ${b}`;
// 	} else {
// 		return `${b} is greater than ${a}`;
// 	}
// }

// console.log(findMax(10, 5));

//create a calculator function expression which will accept 3 value x,y,operator
// Example x = 10, y = 2 operator = "/"

// const calculator = function (x, y, operator) {
// 	if (x === undefined || y === undefined || x === null || y === null) {
// 		return "Enter a valid number";
// 	}
// 	if (operator === "/") {
// 		return x / y;
// 	} else if (operator === "+") {
// 		return x + y;
// 	} else if (operator === "*") {
// 		return x * y;
// 	} else if (operator === "-") {
// 		return x - y;
// 	} else {
// 		return "Invalid Operator";
// 	}
// };

// console.log(calculator(null, null, "+"));

// function checkEquality(a, b) {
// 	return a === b ? true : false;
// }

// console.log(checkEquality(25, 25));

// const checkEquality1 = function (a, b) {
// 	return a === b ? true : false;
// };

// console.log(checkEquality1(25, 25));

// const deliveryChargesCheker = (amount) => (amount > 500 ? "Delivery chagre is free" : "Delivery Charge will be applied");

// console.log(deliveryChargesCheker(400));

// function greetName(personName) {
// 	return `Hello ${personName}`;
// }

// // console.log(greetName("Nivi"));

// const addExclamation = (text) => {
// 	return `${text}!`;
// };

// const makeGreeting = function (name) {
// 	const greetNameVal = greetName(name);
// 	const addExclamationVal = addExclamation(greetNameVal);
// 	console.log(addExclamationVal);
// 	return addExclamationVal;
// // };

// // const greetingValue = makeGreeting("Nivedita");
// // console.log(greetingValue);

// // function calculateDistance(speed, time) {
// // 	return speed * time;
// // }

// // // console.log(calculateDistance(60, 2));

// // function calculateAdjustedDistance(rawDistance, breaks) {
// // 	const adjustedDistance = rawDistance - breaks * 5;
// // 	return adjustedDistance;
// // }

// // const planTrip = function (speed, time, breaks) {
// // 	const rawDistance = calculateDistance(speed, time);
// // 	const adjustedDistance = calculateAdjustedDistance(rawDistance, breaks);
// // 	return `You will travel ${adjustedDistance} miles after ${breaks} `;
// // };
// // console.log(planTrip(60, 3, 2));

// // function addNum(a, b) {
// // 	return a + b;
// // }

// // // console.log(addNum(5, 9));

// // const describeNumber = (number) => {
// // 	// if (number < 10) {
// // 	// 	console.log("Thats a small number");
// // 	// } else {
// // 	// 	console.log("Thats a big number");
// // 	// }
// // 	const describeNumberCheck = number < 10 ? "Thats a small number" : "Thats a big number";
// // 	console.log(describeNumberCheck);
// // 	return describeNumberCheck;
// // };

// // console.log(describeNumber(15));

// // const summarizeMath = function (x, y) {
// // 	const total = addNum(x, y);
// // 	const describeNumberVal = describeNumber(total);
// // 	console.log(describeNumberVal);
// // 	return `The total is ${total} ${describeNumberVal} `;
// // };

// // console.log(summarizeMath(13, 4));

// // function isEligible(age) {
// // 	return age > 18 ? true : false;
// // }

// // const buildMessage = (name, status) => {
// // 	if (status) {
// // 		return `Welcome ${name}, you may enter!`;
// // 	} else {
// // 		return `Sorry ${name}, you are not allowed`;
// // 	}
// // };

// // const checkAdmission = function (name, age) {
// // 	const eligibility = isEligible(age);
// // 	const buildMessageVal = buildMessage(name, eligibility);
// // 	return buildMessageVal;
// // };

// // console.log(checkAdmission("Nivi", 17));

// /**
//  * Problem 6: Daily Routine Advisor
//  *
//  * Imagine a system that helps people decide what to do based on the day and time.
//  *
//  * Helper 1 (Function Declaration):
//  * Write a function `isWeekend(day)` that returns true if the day is "Saturday" or "Sunday".
//  *
//  * Helper 2 (Arrow Function):
//  * Write an arrow function `isMorning(hour)` that returns true if the hour is less than 12.
//  *
//  * Main Function (Function Expression):
//  * Write a function expression:
//  * const getRoutineSuggestion = (day, hour) => { ... };
//  * that:
//  *   1. Uses `isWeekend(day)` to check if it’s the weekend.
//  *   2. Uses `isMorning(hour)` to check if it’s morning.
//  *   3. Returns one of the following messages:
//  *      - "Sleep in! It's a weekend morning."         (weekend + morning)
//  *      - "Relax, it's the weekend."                  (weekend + not morning)
//  *      - "Time for work!"                            (weekday + morning)
//  *      - "Wrap up your day."                         (weekday + not morning)
//  *
//  * Example:
//  * // getRoutineSuggestion("Saturday", 9) → "Sleep in! It's a weekend morning."
//  * // getRoutineSuggestion("Monday", 14) → "Wrap up your day."
//  */

// // const userNames = ["Nivi", "Nivedita"];
// // userNames.pop();
// // console.log(userNames);

// // function isWeekend(day) {
// // 	if (day === "Saturday" || day === "Sunday") {
// // 		return true;
// // 	} else {
// // 		return false;
// // 	}
// // }

// // const isMorning = (hour) => {
// // 	// if (hour < 12) {
// // 	// 	return true;
// // 	// } else {
// // 	// 	return false;
// // 	// }

// // 	return hour < 12 ? true : false;
// // };

// // const getRoutineSuggestion = function (day, hour) {
// // 	const checkWeekend = isWeekend(day);
// // 	const checkMorning = isMorning(hour);

// // 	if (checkWeekend && checkMorning) {
// // 		return "Sleep in! It's a weekend morning.";
// // 	} else if (checkWeekend && !checkMorning) {
// // 		return "Relax, it's the weekend.";
// // 	} else if (!checkWeekend && checkMorning) {
// // 		return "Time for work!";
// // 	} else if (!checkWeekend && !checkMorning) {
// // 		return "Wrap up your day.";
// // 	}
// // };

// // console.log(getRoutineSuggestion("Monday", 14));

// // Create a function greet(name, language) that returns a greeting like "Hola Maria!" if language is 'Spanish', or "Hello Maria!" if language is 'English'.

// // function greet(name, language) {
// //   if (language === "English") {
// //     return `Hello ${name}`;
// //   } else if (language === "Spanish") {
// //     return `Halo ${name}`;
// //   }
// // }

// // console.log(greet("Nivi", "English"));

// // Define a function showUserDetails(name, age) that uses another function isSeniorCitizen(age) to add a tag if the user is 60+

// // Name is a senior citizen / not sr citizen

// // function isSeniorCitizen(age) {
// // 	return age > 60 ? true : false;
// // }

// // console.log(isSeniorCitizen(30));

// // function showUserDetails(name, age) {
// // 	const checkSrCitizen = isSeniorCitizen(age);
// // 	if (checkSrCitizen) {
// // 		return `${name} is senior citizen`;
// // 	} else {
// // 		return `${name} is not senior citizen`;
// // 	}
// // }
// // console.log(showUserDetails("Nivi", 85));

// // Write a function formatUser(name, age) that returns "Name: John, Age: 25" by calling two smaller functions formatName and formatAge

// // function formatName(name) {
// // 	return `Name: ${name}`;
// // }

// // function formatAge(age) {
// // 	return `Age: ${age} `;
// // }

// // function formatUser(name, age, onlyName) {
// // 	const formatNameVal = formatName(name);
// // 	if (onlyName) {
// // 		return formatNameVal;
// // 	}
// // 	const formatAgeVal = formatAge(age);
// // 	return `${formatNameVal}, ${formatAgeVal}`;
// // }

// // console.log(formatUser("Pranit", 55, false));
// //  Challenge 1: Print All Fruits
// //  Given this array:
// //  const fruits = ['apple', 'banana', 'cherry'];
// //  Your Task:- Write a function printFruits() that:
// //   - loops through the array
// //   - prints each fruit
// //  Expected output:
// //  apple
// //  banana
// //  cherry

// const fruits = ["apple", "banana", "cherry"];

// // for (let i = 0; i < fruits.length; i++) {
// //   console.log(fruits[i]);
// // }

// function printFruits(fruit) {
//   // console.log(fruit);
//   for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
//   }
// }

// printFruits(fruits);

// //  Challenge 2: Student Object and Favorite Subjects
// //  Given this object:
// //  const student = {
// //   name: 'Amit',
// //   subjects: ['Math', 'English', 'Science']
// //  };
// // Your Task:- Write a function printSubjects(studentObj) that:
// //   - takes the student object
// //   - loops through the subjects array
// //   - prints each subject like:
// //     Amit likes Math
// //     Amit likes English
// //     Amit likes Science

// const student = {
//   name: "Amit",
//   subjects: ["Math", "English", "Science"],
// };

// function printSubjects(studentObj) {
//   for (let i = 0; i < studentObj.subjects.length; i++) {
//     console.log(`${student.name} likes ${studentObj.subjects[i]}`);
//   }
// }

// printSubjects(student);

// // Challenge 3: Print Only Numbers Greater Than 10
// //  Given this array:
// //  const numbers = [3, 15, 7, 20, 9];
// //  Your Task:- Write a function printLargeNumbers() that:
// //   - loops through the array
// //   - prints only numbers greater than 10
// //   - uses continue to skip smaller numbers
// //  Expected output:
// //  15
// //  20

// const numbers = [3, 15, 7, 20, 9];

// function printLargeNumbers(numArray) {
//   for (let i = 0; i < numArray.length; i++) {
//     if (numArray[i] < 10) {
//       continue;
//     }
//     console.log(numArray[i]);
//   }
// }

// printLargeNumbers(numbers);

// //  Challenge 4: Stop on Fruit Found
// //  Given this array:
// // const fruits = ['apple', 'banana', 'cherry', 'mango'];
// //  Your Task:- Write a function findFruit(fruitName) that:
// //   - loops through the array
// //   - prints the fruit name if found
// //   - stops checking further using break
// //  Test:
// //  findFruit('cherry');
// //  // should print: cherry

// const fruitsData = ["apple", "banana", "cherry", "mango"];

// function findFruit(fruitName) {
//   for (let i = 0; i < fruitsData.length; i++) {
//     if (fruitsData[i] === fruitName) {
//       console.log(fruitsData[i]);
//       break;
//     }
//   }
// }

// findFruit("cherry");

// //  Challenge 7: Check Attendance
// //  Given this array:
// //  const students = ['Arjun', 'Neha', 'Sita', 'Ravi'];
// //  Your Task:
// // - Write a function checkStudent(name) that:
// //   - loops through the array
// //   - if the name exists, prints "Present"
// //   - else prints "Absent"
// //  Test:
// //  checkStudent('Sita');
// //  // should print: Present

// const students = ["Arjun", "Neha", "Sita", "Ravi"];

// function checkStudent(studentsArray, name) {
//   // for (let i = 0; i < students.length; i++) {
//   //   if (students[i] === name) {
//   //     console.log("Present");
//   //   } else {
//   //     console.log("Absent");
//   //   }
//   // }

//   if (studentsArray.includes(name)) {
//     console.log("Present");
//   } else {
//     console.log("Absent");
//   }
// }

// checkStudent(students, "Nivi");

// const newStudent = ["Nivi", "Anki"];

// checkStudent(newStudent, "Nivi");

// //  Challenge 5: Count Passing Marks
// //  Given this object:
// //  const exam = {
// //   name: 'Final Exam',
// //   marks: [45, 78, 32, 60, 80]
// //  };
// //  Your Task:- Write a function countPassingMarks(examObj) that:
// //   - loops through the marks array
// //   - counts how many marks are > 40
// //   - prints the count
// // Expected output:
// //  4

// const exam = {
//   name: "Final Exam",
//   marks: [45, 78, 32, 60, 80, 78],
// };

// function countPassingMarks(examObj) {
//   let count = 0;
//   for (let i = 0; i < examObj.marks.length; i++) {
//     if (examObj.marks[i] > 40) {
//       count++;
//       // console.log(examObj.marks[i]);
//     }
//   }
//   return count;
// }

// console.log(countPassingMarks(exam));

// // Challenge 6: Sum Prices
// //  Given this object:
// //  const cart = {
// //   items: [120, 250, 90, 40]
// //  };
// //  Your Task:- Write a function totalPrice(cartObj) that:
// //   - loops through items
// //   - adds all prices
// //   - prints the total price
// //  Expected output:
// //  500

// const cart = {
//   items: [120, 250, 90, 40],
// };

// function totalPrice(cartObj) {
//   let total = 0;
//   for (let i = 0; i < cartObj.items.length; i++) {
//     total = total + cartObj.items[i];
//   }
//   return total;
// }

// console.log(totalPrice(cart));

// // Challenge 8: Print Items with Price Above 100
// //  const shop = {
// //   items: [50, 120, 30, 200, 80]
// //  };
// //  Your Task:- Write a function printExpensiveItems(shopObj) that:
// //   - loops through the items array
// //   - prints only prices above 100
// //   - skips the rest using continue
// //  Expected:
// //  120
// //  200

// const shop = {
//   items: [50, 120, 30, 200, 80],
// };

// function printExpensiveItems(shopObj) {
//   for (let i = 0; i < shopObj.length; i++) {
//     if (shopObj[i] < 100) {
//       continue;
//     }
//     console.log(shopObj[i]);
//   }
// }

// printExpensiveItems(shop.items);

// //  Challenge 9: Print Students Who Play Cricket
// //  const students = [
// //   { name: 'Rohan', sport: 'cricket' },
// //   { name: 'Neha', sport: 'football' },
// //   { name: 'Amit', sport: 'cricket' }
// //  ];
// //  Your Task:
// // - Write a function printCricketPlayers() that:
// //   - loops through the array
// //   - prints the names of students who play cricket
// //  Expected:
// //  Rohan
// //  Amit

// const studentsData = [
//   { name: "Rohan", sport: "cricket" },
//   { name: "Neha", sport: "football" },
//   { name: "Amit", sport: "cricket" },
// ];

// function printPlayers(studObj, sportToSkip) {
//   for (let i = 0; i < studObj.length; i++) {
//     // console.log(studObj[i]);
//     if (studObj[i].sport !== sportToSkip) {
//       continue;
//     }
//     console.log(studObj[i].name);
//   }
// }

// printPlayers(studentsData, "cricket");

// //  Challenge 10: Stop Checking Colors After Finding 'red'
// //  const colors = ['green', 'yellow', 'blue', 'red', 'purple'];
// //  Your Task:- Write a function stopAtRed() that:
// //   - loops through the array
// //   - prints each color
// //   - stops (breaks) when it finds 'red'
// //  Expected:
// //  green
// //  yellow
// //  blue
// //  red

// const colors = ["green", "yellow", "blue", "red", "purple"];

// function stopAtRed(color) {
//   for (let i = 0; i < color.length; i++) {
//     if (color[i] === "red") {
//       break;
//     }

//     console.log(color[i]);
//   }
// }

// stopAtRed(colors);

// //  Challenge 11: Print Students with More Than 3 Friends
// //  const students = [
// //   { name: 'Anjali', friends: ['Ria', 'Sona'] },
// //   { name: 'Deepak', friends: ['Raj', 'Simran', 'Pooja', 'Neha'] },
// //   { name: 'Vikram', friends: [] }
// //  ];
// //  Your Task:- Write a function printPopularStudents() that:
// //   - loops through the array
// //   - prints names of students who have more than 3 friends
// //  Expected:
// //  Deepak

// const studentsStat = [
//   { name: "Anjali", friends: ["Ria", "Sona"] },
//   { name: "Deepak", friends: ["Raj", "Simran", "Pooja", "Neha"] },
//   { name: "Vikram", friends: [] },
// ];

// function printPopularStudents(studObject) {
//   for (let i = 0; i < studObject.length; i++) {
//     const studentObject = studObject[i];
//     if (studentObject.friends.length < 3) {
//       continue;
//     }
//     console.log(studentObject.name);
//   }
// }

// printPopularStudents(studentsStat);

// //  Challenge 12: Print All Items Except 'soap'
// //  const items = ['toothpaste', 'soap', 'shampoo', 'comb'];
// //  Your Task:- Write a function printItems() that:
// //   - loops through the array
// //   - prints each item
// //   - skips 'soap' using continue
// //  Expected:
// //  toothpaste
// //  shampoo
// //  comb

// const items = ["toothpaste", "soap", "shampoo", "comb"];

// function printItems(itemVal) {
//   for (i = 0; i < itemVal.length; i++) {
//     if (itemVal[i] === "soap") {
//       continue;
//     }
//     console.log(itemVal[i]);
//   }
// }

// printItems(items);

// //  Challenge 13: Count Words Starting With 'S'
// // const words = ['Sun', 'Ball', 'Sky', 'Tree', 'Sea'];
// //  Your Task:- Write a function countSWords() that:
// //   - loops through the array
// //   - counts words that start with the letter S
// //   - prints the count
// //  Expected:
// //  3

// const words = ["Sun", "Ball", "Sky", "Tree", "Sea"];

// function countSWords(wordTxt) {
//   for (let i = 0; i < wordTxt.length; i++) {
//     if (wordTxt[i] === "s") {
//       continue;
//     }
//   }
//   console.log(wordTxt[i].length);
// }

// countSWords(words);

// //  Challenge 14: Find First Number Greater Than 100
// //  const nums = [50, 90, 120, 30, 250];
// //  Your Task:- Write a function findFirstAbove100() that:
// //   - loops through the array
// //   - prints the first number greater than 100
// //   - stops using break
// //  Expected:
// //  120

// const nums = [50, 90, 120, 30, 250];

// function findFirstAbove100(number) {
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] > 100) {
//       console.log(number[i]);
//       break;
//     }
//   }
// }

// findFirstAbove100(nums);

// //  Challenge 15: Print Even Numbers in Steps of 2
// //  const numbers = [2, 4, 6, 8, 10, 12];
// // Your Task:- Write a function printEverySecondEven() that:
// //   - loops through the array
// //   - prints every second even number only
// //  Expected:
// //  4
// //  8
// //  12

// // const numbersData = [11, 4, 13, 8, 17, 12];

// // function printEverySecondEven(numData) {
// //   for (let i = 0; i < numData.length; i++) {
// //     if (numData[i] / 2 == 0) {
// //       continue;
// //     }
// //     console.log(numData[i]);
// //   }
// // }

// // printEverySecondEven(numbersData);

// // Student Performance Analyzer (Functions + Objects + Arrays + Loop)
// //  Description:
// //  You have data for multiple students, including test scores. You need to calculate average scores and generate performance summaries.
// //  Tasks:
// //  1. Create an array of student objects:
// //  const students = [
// //  { name: 'Aarav', scores: [78, 85, 90] },
// //  { name: 'Mira', scores: [88, 79, 91] },
// //  { name: 'Kunal', scores: [45, 60, 52] },
// //  ];
// //  2. Write a function calcAverage(scores) that returns the average of an array.
// //  3. Loop through all students and for each:- Compute the average using calcAverage- Print:- If avg >= 75: "Aarav → Distinction
// //  (Avg: 84.3)"- If avg >= 50: "Mira → Passed  (Avg: 79.3)"- Else: "Kunal → Failed
// //  (Avg: 52.3)"

const marks = [
  { name: "Aarav", scores: [78, 85, 90] },
  { name: "Mira", scores: [88, 79, 91] },
  { name: "Kunal", scores: [45, 60, 52] },
];

function calcAverage(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total = total + scores[i];
  }
  const avgScore = total / scores.length;
  return avgScore;
}

for (let i = 0; i < marks.length; i++) {
  // const object = marks[i];
  // const scores = object.scores;
  const avg = calcAverage(marks[i].scores);
  console.log(avg);
}

// console.log(marks[marks.length - 1].scores);

//  Challenge 16: Inventory Tracker (Objects + Array + Includes + Method)
//  Description:
//  You're managing an inventory and need to check product availability, stock, and display summaries.
//  Tasks:
//  1. Create an object:
//  const inventory = {
//  items: ['pen', 'notebook', 'stapler', 'marker'],
//  stock: [50, 20, 0, 100],
//  checkStock: function(itemName) {
//  // implement logic
//  }
//  };
//  2. checkStock(itemName) should:- If item is not in items, return "Item not found "- If item is in stock (> 0), return "pen: In stock (50 units) "- If stock is 0, return "stapler: Out of stock "
//  3. Test with 'pen', 'stapler', and 'scissors'.

const inventory = {
  items: ["pen", "notebook", "stapler", "marker"],
  stock: [50, 20, 0, 100],
  checkStock: function (itemName) {
    if (this.items.includes(itemName)) {
      console.log("Item found");
    } else {
      console.log("Item Not found");
    }
  },
};

inventory.checkStock("pen");

for (let i = inventory.items.length - 1; i >= 0; i--) {
  console.log(inventory.items[i]);
}

for (let i = 0; i <= inventory.items.length - 1; i++) {
  console.log(inventory.items[i]);
  for (let rep = 1; rep <= 3; rep++) {
    console.log(`${inventory.items[i]} X ${rep}`);
  }
}

// Pen
// Pen X 1

const mix = ["apple", 5, true, "banana", 42];

// Write a loop that logs only the string values, starting from the last element.

for (let i = mix.length - 1; i >= 0; i--) {
  if (typeof mix[i] !== "string") {
    continue;
  } else {
    console.log(mix[i]);
  }
}
