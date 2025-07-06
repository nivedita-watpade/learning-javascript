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
// };

// const greetingValue = makeGreeting("Nivedita");
// console.log(greetingValue);

// function calculateDistance(speed, time) {
// 	return speed * time;
// }

// // console.log(calculateDistance(60, 2));

// function calculateAdjustedDistance(rawDistance, breaks) {
// 	const adjustedDistance = rawDistance - breaks * 5;
// 	return adjustedDistance;
// }

// const planTrip = function (speed, time, breaks) {
// 	const rawDistance = calculateDistance(speed, time);
// 	const adjustedDistance = calculateAdjustedDistance(rawDistance, breaks);
// 	return `You will travel ${adjustedDistance} miles after ${breaks} `;
// };
// console.log(planTrip(60, 3, 2));

// function addNum(a, b) {
// 	return a + b;
// }

// // console.log(addNum(5, 9));

// const describeNumber = (number) => {
// 	// if (number < 10) {
// 	// 	console.log("Thats a small number");
// 	// } else {
// 	// 	console.log("Thats a big number");
// 	// }
// 	const describeNumberCheck = number < 10 ? "Thats a small number" : "Thats a big number";
// 	console.log(describeNumberCheck);
// 	return describeNumberCheck;
// };

// console.log(describeNumber(15));

// const summarizeMath = function (x, y) {
// 	const total = addNum(x, y);
// 	const describeNumberVal = describeNumber(total);
// 	console.log(describeNumberVal);
// 	return `The total is ${total} ${describeNumberVal} `;
// };

// console.log(summarizeMath(13, 4));

// function isEligible(age) {
// 	return age > 18 ? true : false;
// }

// const buildMessage = (name, status) => {
// 	if (status) {
// 		return `Welcome ${name}, you may enter!`;
// 	} else {
// 		return `Sorry ${name}, you are not allowed`;
// 	}
// };

// const checkAdmission = function (name, age) {
// 	const eligibility = isEligible(age);
// 	const buildMessageVal = buildMessage(name, eligibility);
// 	return buildMessageVal;
// };

// console.log(checkAdmission("Nivi", 17));

/**
 * Problem 6: Daily Routine Advisor
 *
 * Imagine a system that helps people decide what to do based on the day and time.
 *
 * Helper 1 (Function Declaration):
 * Write a function `isWeekend(day)` that returns true if the day is "Saturday" or "Sunday".
 *
 * Helper 2 (Arrow Function):
 * Write an arrow function `isMorning(hour)` that returns true if the hour is less than 12.
 *
 * Main Function (Function Expression):
 * Write a function expression:
 * const getRoutineSuggestion = (day, hour) => { ... };
 * that:
 *   1. Uses `isWeekend(day)` to check if it’s the weekend.
 *   2. Uses `isMorning(hour)` to check if it’s morning.
 *   3. Returns one of the following messages:
 *      - "Sleep in! It's a weekend morning."         (weekend + morning)
 *      - "Relax, it's the weekend."                  (weekend + not morning)
 *      - "Time for work!"                            (weekday + morning)
 *      - "Wrap up your day."                         (weekday + not morning)
 *
 * Example:
 * // getRoutineSuggestion("Saturday", 9) → "Sleep in! It's a weekend morning."
 * // getRoutineSuggestion("Monday", 14) → "Wrap up your day."
 */

// const userNames = ["Nivi", "Nivedita"];
// userNames.pop();
// console.log(userNames);

// function isWeekend(day) {
// 	if (day === "Saturday" || day === "Sunday") {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// const isMorning = (hour) => {
// 	// if (hour < 12) {
// 	// 	return true;
// 	// } else {
// 	// 	return false;
// 	// }

// 	return hour < 12 ? true : false;
// };

// const getRoutineSuggestion = function (day, hour) {
// 	const checkWeekend = isWeekend(day);
// 	const checkMorning = isMorning(hour);

// 	if (checkWeekend && checkMorning) {
// 		return "Sleep in! It's a weekend morning.";
// 	} else if (checkWeekend && !checkMorning) {
// 		return "Relax, it's the weekend.";
// 	} else if (!checkWeekend && checkMorning) {
// 		return "Time for work!";
// 	} else if (!checkWeekend && !checkMorning) {
// 		return "Wrap up your day.";
// 	}
// };

// console.log(getRoutineSuggestion("Monday", 14));

// Create a function greet(name, language) that returns a greeting like "Hola Maria!" if language is 'Spanish', or "Hello Maria!" if language is 'English'.

function greet(name, language) {
  if (language === "English") {
    return `Hello ${name}`;
  } else if (language === "Spanish") {
    return `Halo ${name}`;
  }
}

console.log(greet("Nivi", "English"));

// Define a function showUserDetails(name, age) that uses another function isSeniorCitizen(age) to add a tag if the user is 60+

// Name is a senior citizen / not sr citizen

// function isSeniorCitizen(age) {
// 	return age > 60 ? true : false;
// }

// console.log(isSeniorCitizen(30));

// function showUserDetails(name, age) {
// 	const checkSrCitizen = isSeniorCitizen(age);
// 	if (checkSrCitizen) {
// 		return `${name} is senior citizen`;
// 	} else {
// 		return `${name} is not senior citizen`;
// 	}
// }
// console.log(showUserDetails("Nivi", 85));

// Write a function formatUser(name, age) that returns "Name: John, Age: 25" by calling two smaller functions formatName and formatAge

// function formatName(name) {
// 	return `Name: ${name}`;
// }

// function formatAge(age) {
// 	return `Age: ${age} `;
// }

// function formatUser(name, age, onlyName) {
// 	const formatNameVal = formatName(name);
// 	if (onlyName) {
// 		return formatNameVal;
// 	}
// 	const formatAgeVal = formatAge(age);
// 	return `${formatNameVal}, ${formatAgeVal}`;
// }

// console.log(formatUser("Pranit", 55, false));
