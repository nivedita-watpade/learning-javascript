// "use strict";

// function logger() {
//   console.log("My First function...😊");
// }
// // invoking / calling / running
// logger();

// function displayWelcomeMessage(firstName, lastName) {
//   console.log(`Welcome, ${firstName} ${lastName}!`);
// }

// const result = displayWelcomeMessage("Nivedita", "Watpade");

// function addTwoValue(value1, value2) {
//   const valueTotal = value1 + value2;
//   return valueTotal;
// }

// const total = addTwoValue(29, 25);
// console.log(total);

// function checkType(value) {
//   // console.log(typeof value);
//   if (value === null) {
//     console.log("There is a bug in js so type of null is object !!!");
//   } else if (value === undefined) {
//     console.log("Need to add a value");
//   } else {
//     console.log(typeof value);
//   }
// }

// checkType();

// function checkValue(val) {
//   return val ? "truthy" : "falsy";
// }

// const valueTxt = checkValue(10);
// console.log(`Value is ${valueTxt}`);

// function canDrive(age, hasPermission) {
//   return age >= 18 || hasPermission ? "User Can Drive" : "User Can't drive";
// }

// console.log(canDrive(40, true));

// // function showAlert(msg) {
// // 	alert(msg);
// // }

// // showAlert("sdj sdjds snddsn sndcbdsnc");

// //function declaration

// function devideNum(val1, val2) {
//   return val1 > 0 && val2 > 0
//     ? val1 / val2
//     : "Number should be greater than zero";
// }

// const devideResult = devideNum(10, 10);
// console.log(devideResult);

// //function expression

// const devideResult1 = function (val1, val2) {
//   return val1 > 0 && val2 > 0
//     ? val1 / val2
//     : "Number should be greater than zero";
// };

// console.log(devideResult, devideResult1(10, 10));

// // 7. Delivery Time Estimator
// // Write a function declaration that takes:
// // Distance (in km)
// // Is it express delivery (true/false)
// // Return:
// // "1 day" if express and distance < 50
// // "3 days" if not express and distance < 100
// // "5+ days" otherwise
// // Use if/else inside, not ternary.

// function deliveryTimeCalculator(distance, expressDelivery) {
//   if (expressDelivery && distance < 50) {
//     return "1 Day";
//   } else if (expressDelivery === false && distance < 100) {
//     return "3 Days";
//   } else {
//     return "5+ Days";
//   }
// }

// const deliveryTimeCal = deliveryTimeCalculator(140, false);
// console.log(deliveryTimeCal);

// const deliveryTimeCal2 = function (distance, expressDelivery) {
//   if (expressDelivery && distance < 50) {
//     return "1 Day";
//   } else if (expressDelivery === false && distance < 100) {
//     return "3 Days";
//   } else {
//     return "5+ Days";
//   }
// };

// const deliveryTime = deliveryTimeCal2(49, true);
// console.log(deliveryTime);

// const reverseValue = (val) => !val;

// console.log(reverseValue(false));

// // Movie Ticket System
// // Create a function calculateTotal(price, quantity) that returns the total cost. == price*quantity
// // Then write a function printTicket(movie, price, quantity) that:
// // Calls calculateTotal()
// // Returns:
// // "Ticket for Avatar: ₹600 (3 tickets)"

// const calculateTotal = (price, quantity) => price * quantity;

// function printTicket(movie, price, quantity) {
//   const totalResult = calculateTotal(price, quantity);
//   return `Ticket for ${movie}: ₹${totalResult} (${quantity} tickets)`;
// }

// const printTicketVal = printTicket("RAID", 500, 2);

// console.log(printTicketVal);

// // Pizza Builder
// // Create a function prepareIngredient that takes an ingredient name and returns a string like "Prepared cheese" or "Prepared tomato".
// // Then create a makePizza function that:
// // Takes two ingredients
// // Calls prepareIngredient on both
// // Returns a message like:
// // "Pizza made with Chopped cheese and Sliced tomato."

// const prepareIngredient = (ingredientName) => `Prepared ${ingredientName}`;

// function makePizza(ingredientName1, ingredientName2) {
//   const ingredient1 = prepareIngredient(ingredientName1);
//   const ingredient2 = prepareIngredient(ingredientName2);
//   return `Pizza made with ${ingredient1} and ${ingredient2}`;
// }

// console.log(makePizza("cheese", "tomato"));

// // Order Summary Generator
// // Create a function formatItem(name, quantity) that returns a string like "3 x Soap".
// // Then write generateOrderSummary(item1, qty1, item2, qty2) that:
// // Uses formatItem() on both
// // Returns a message like:
// // "Your order: 3 x Soap and 2 x Shampoo"

// const formatItem = (name, quantity) => `${quantity} X ${name}`;

// function generateOrderSummary(item1, qty1, item2, qty2) {
//   const formatItemVal1 = formatItem(item1, qty1);
//   const formatItemVal2 = formatItem(item2, qty2);
//   return `Your order: ${formatItemVal1} and ${formatItemVal2}`;
// }

// console.log(generateOrderSummary("soap", 3, "shampoo", 2));

// // Function to cut fruit into pieces
// const cutPieces = function (fruit, fruitCut) {
//   return fruit * fruitCut;
// };
// // Function that uses the cutPieces function
// const fruitProcessor = function (apples, appleCut, oranges, oraneCut) {
//   const applePieces = cutPieces(apples, appleCut);
//   const orangePieces = cutPieces(oranges, oraneCut);
//   const juice = `Juice with ${applePieces} pieces of apple and
// 	${orangePieces} pieces of orange.`;
//   return juice;
// };
// console.log(fruitProcessor(2, 6, 3, 9));

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

// // // Create a function expression checkBMI(weight, height) that:
// // // Calculates BMI = weight / (height * height)
// // // Returns "High" if BMI > 25, "Normal" if ≤ 25

// // const checkBMI = function (weight, height) {
// // 	const BMI = weight / (height * height);
// // 	if (BMI > 25) {
// // 		return "High";
// // 	} else if (BMI <= 25) {
// // 		return "Normal";
// // 	}
// // };

// // const printBMI = checkBMI(45, 5.5);
// // console.log(printBMI);

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
//  *
//  *
//  * **/

// // function checkType(value) {
// // 	return typeof value;
// // }

// // console.log(checkType(true));

// const array = [1, 2, 3, 4];

// console.log(array[array.length - 2]);

// console.log(array[1]);

// const numArray = new Array(1, 2, 3, 4, 5);

// console.log(numArray[numArray.length - 2]);

// console.log(numArray[3]);

// const book = {
//   title: "The Alchemist",
//   author: "Paulo Coelho",
//   pages: 208,
// };

// console.log(book.author);

// console.log(book["title"]);

// const fruit = {
//   name: "Apple",
//   color: "Red",
//   taste: "Sweet",
// };
// const propertyName = "color";

// console.log(fruit[propertyName]);

// const car = {
//   brandName: "Toyota",
//   modelName: "Camry",
// };

// const key = "Name";

// console.log(car.brand + key);

// console.log(car["brand" + key]);

// const property = "taste";
// const fruitData = {
//   name: "Apple",
//   color: "Red",
//   taste: "Sweet",
// };

// //  - Write code that prints the value of the property if it exists, otherwise prints: "Property not found."

// if (fruitData[property]) {
//   console.log(fruitData[property]);
// } else {
//   console.log("Property Not Found");
// }

// const movie = {
//   title: "Inception",
//   year: 2010,
// };

// //  - Add a new property `director` with value 'Christopher Nolan' using dot notation.- Print the updated object.

// movie.director = "Christopher Nolan";

// console.log(movie);

// const city = {
//   name: "Paris",
//   country: "France",
// };

// //  - Add a new property `population` with value 2000000 using bracket notation.- Print the updated object

// city["population"] = 2000000;

// console.log(city);

// //  Q8. Dynamic Property Names

// const key1 = "language";
// const value = "JavaScript";
// const course = {};

// // Add a property to the `course` object so that it becomes:
// //   { language: 'JavaScript' }
// //  (using bracket notation)
// course[key1] = value;

// console.log(course);

// // Q3. Build Object Dynamically
// // Write a function createObject that:
// // Takes a key and a value as parameters.
// // Returns an object with that key/value pair.

// // Example:('language', 'JavaScript');
// // should return:{ language: 'JavaScript' }

// function createObject(key, value) {
//   const object = { [key]: value };
//   //object[key] = value;
//   return object;
// }

// console.log(createObject("language", "JavaScript"));

// const nivi = {
//   firstName: "Nivedita",
//   lastName: "Watpade",
//   friends: ["anki", "gangi"],
//   birthYear: 2000,
//   hasDriveLicense: false,
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return `${this.firstName} is ${this.age} years old`;
//   },

//   getSummary: function () {
//     return `${this.firstName} ${this.lastName} is a ${
//       this.age
//     } years old and has ${
//       this.hasDriveLicense ? "a" : "no"
//     } driver license  and her true friend is ${this.friends[0]}`;
//   },
// };

// console.log(nivi.calcAge());
// console.log(nivi.getSummary());

// // "Nivedita Watpade is a 24 years old and has a/no driver license and her true friend is Anki/Gangi"
// // if (nivi.hasDriveLicense) {
// //   console.log(
// //     `${nivi.firstName} ${nivi.lastName} is a ${nivi.age} years old and has a driver license  and her true friend is ${nivi.friends[0]}`
// //   );
// // } else {
// //   console.log(
// //     `${nivi.firstName} ${nivi.lastName} is a ${nivi.age} years old and has no driver license  and her true friend is ${nivi.friends[0]}`
// //   );
// // }

// // console.log(
// //   `${nivi.firstName} ${nivi.lastName} is a ${nivi.age} years old and has ${
// //     nivi.hasDriveLicense ? "a" : "no"
// //   } driver license  and her true friend is ${nivi.friends[0]}`
// // );

// // ========================= for loop========================

// for (let rep = 1; rep <= 50; rep++) {
//   console.log(`Lifiting weights repetition ${rep}`);
// }

// const names = ["Nivi", "Pranit", "Adira", "Dityashree", "Pranvi"];

// for (let index = 0; index < names.length; index++) {
//   const name = names[index];

//   if (index === 0) {
//     console.log("Nivedita Watpade");
//   } else {
//     console.log(name);
//   }
// }

// // for (let index = 0; index < names.length; index++) {
// //   const name = names[index];

// //   if (index === names.length - 1) {
// //     console.log("Pranvi Chavan");
// //   } else {
// //     console.log(name);
// //   }
// // }

// let sum = 0;

// for (let i = 1; i <= 4; i++) {
//   sum += i;
// }

// console.log(sum); //10

// // // sum = 0 + 1 == 1

// // 2 + 1 = 3

// // 3 + 3 = 6

// for (let i = 10; i < 5; i++) {
//   console.log(i);
// }

// Will this loop run? If yes, how many times?

const niviData = [
  "Nivedita",
  "Watpade",
  24,
  null,
  "female",
  true,
  undefined,
  0,
];

// const niviDataTypes = [];

// for (let i = 0; i < niviData.length; i++) {
//   // console.log(niviData[i], typeof niviData[i]);
//   niviDataTypes.push(typeof niviData[i]);
// }

// console.log(niviDataTypes);

// const yearsData = [1991, 2007, 1969, 2020];

// function calculateAge(birthYear) {
//   const age = 2025 - birthYear;
//   return age;
// }

// const ages = [];

// for (let j = 0; j < yearsData.length; j++) {
//   ages.push(calculateAge(yearsData[j]));
// }

// console.log(ages);

// console.log(` ------------------ continue ---------------------`);

// for (let j = 0; j < yearsData.length; j++) {
//   if (yearsData[j] > 2000) continue; /// skip the records which is greater than 2000 i.e 2007, 2020
//   console.log(yearsData[j]);
// }

// console.log(` ------------------ break ---------------------`);
// for (let i = 0; i < niviData.length; i++) {
//   if (typeof niviData[i] === "number") break; /// break the loop iteration after it find the type number
//   console.log(niviData[i]);
// }

// const niviData1 = [
//   "Nivedita",
//   "Watpade",
//   24,
//   null,
//   "female",
//   true,
//   undefined,
//   0,
// ];

for (let i = 0; i < niviData.length; i++) {
  if (!niviData[i]) {
    continue;
  }
  console.log(niviData[i]);
}

for (let i = 0; i < niviData.length; i++) {
  if (!niviData[i]) {
    break;
  }
  console.log(niviData[i]);
}
