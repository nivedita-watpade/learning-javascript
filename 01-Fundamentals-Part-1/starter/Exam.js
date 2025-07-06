// ### Exercise 1:

// Declare variables for a student's information including:

// - Student name (which won't change)
// - Student ID (which won't change)
// - Current grade level (which will change over time)
// - Admission year (which won't change)
// - Major (which might change)

// Print all information to the console using appropriate variable types and naming conventions.
// Ans:
// const studentName = "Nivedita";
// console.log(studentName);

// const studentId = 29;
// console.log(studentId);

// let grade = "A+";
// console.log(grade);

// const addmissionYear = 2025;
// console.log(addmissionYear);

// let course = "Computer Science";
// console.log(course);

// =================================================================================================

// ### Exercise 2:

// 1. Create two variables `triangleBase` and `triangleHeight` to store the base and height of a triangle (in cm).
// 2. Calculate the triangle's area using the formula: `area = (base * height) / 2`
// 3. Create two more variables for a rectangle's width and height.
// 4. Calculate the rectangle's area using: `area = width * height`
// 5. Create a boolean variable called `triangleLarger` containing information about whether the triangle has a larger area than the rectangle.
// 6. Print all results to the console.

// const triangleBase = 90;
// const triangleHeight = 120;
// const triangleArea = (triangleBase * triangleHeight) / 2;
// console.log("Triangle Area:", triangleArea);

// const reactanleWidth = 60;
// const reactanleHeight = 20;
// const reactanleArea = reactanleWidth * reactanleHeight;
// console.log("Rectangle Area:", reactanleArea);

// const isTriangleLarger = triangleArea > reactanleArea;
// console.log(isTriangleLarger);

// =================================================================================================

// ### Exercise 3:

// 1. Using variables for a person's name, favorite food, and home city, create a string that says: "My name is [name] from [city], and I love eating [food]!" using:
//    - Regular string concatenation
//    - Template literals
// 2. Create a multi-line restaurant review using template literals that spans at least 3 lines and includes the restaurant name, your favorite dish, and a rating out of 5 stars.

// const personName = "Pranit";
// const favFood = "Nivu";
// const homeCity = "Shahane Pune";

// // console.log("My name is" + " " + personName + " " + "from" + " " + homeCity + " " + "," + "and I love eating" + " " + favFood);
// // console.log("My name is", personName, "from", homeCity, ",", "and I love eating", favFood);
// // console.log(`My name is ${personName} from ${homeCity}, and I love eating ${favFood}!`);

// const restaurantName = "Vihar";
// const favDish = "Dosa";
// const ratings = "4.8 star";

// console.log(`Restaurant name: ${restaurantName}
// Favorite dish: ${favDish}
// Ratings: ${ratings}`);

// ====================================================================================================

// ### Exercise 4:

// 1. Create variables for two students' test scores (`student1Score` and `student2Score`).
// 2. Print a message comparing their performance:
//    "[Student1] scored higher than [Student2]!" or
//    "[Student2] scored higher than [Student1]!" or
//    "Both students scored the same!"
// 3. Add a condition to check the letter grade (A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60) for each student and include this in your output.

// const student1Score = 75;
// const student2Score = 95;

// if (student1Score > student2Score) {
// 	console.log("Student 1 scored higher than student 2");
// } else if (student2Score > student1Score) {
// 	console.log("Student 2 scored higher than student 1");
// } else if (student1Score === student2Score) {
// 	console.log("Both students scored the same!");
// }

// if (student1Score >= 90 && student1Score <= 100) {
// 	console.log("Student1 has Grade A");
// } else if (student1Score >= 80 && student1Score <= 89) {
// 	console.log("Student1 has Grade B");
// } else if (student1Score >= 70 && student1Score <= 79) {
// 	console.log("Student1 has Grade C");
// } else if (student1Score >= 60 && student1Score <= 69) {
// 	console.log("Student1 has Grade D");
// } else if (student1Score <= 60) {
// 	console.log("Student1 has Grade F");
// }

// ====================================================================================================

// ### Exercise 5:

// Predict what these expressions will evaluate to and then check your answer: (Nivedita, first predict and then check)

// 1. `'15' + 2`  = //'152'
// 2. `'15' - 2`  = // 13
// 3. `10 + '5' - 3` // 102
// 5. `2 + 4 + '10' - 5 + '3'` //6053

// ================================================================================================================

// ### Exercise 6:

// Write code that checks if the following variables are truthy or falsy:

// ```javascript
// let balance = 0;
// let fullName = "";
// let phoneNumber = null;
// let emailAddress = undefined;
// let isSubscribed = false;
// let membershipLevel = "free";
// ```

// For each variable, print a message like:
// "Variable [variableName] is [truthy/falsy]"

// console.log(`Variable ${balance} is ${Boolean(balance)}`);

// console.log(`Variable ${balance} is ${balance ? "truthy" : "falsy"}`);
// console.log(`Variable ${fullName} is ${fullName ? "truthy" : "falsy"}`);
// console.log(`Variable ${phoneNumber} is ${phoneNumber ? "truthy" : "falsy"}`);
// console.log(`Variable ${emailAddress} is ${emailAddress ? "truthy" : "falsy"}`);
// console.log(`Variable ${isSubscribed} is ${isSubscribed ? "truthy" : "falsy"}`);
// console.log(`Variable ${membershipLevel} is ${membershipLevel ? "truthy" : "falsy"}`);

// if (balance) {
// 	console.log(`Variable ${balance} is truthy`);
// } else {
// 	console.log(`Variable ${balance} is falsy`);
// }

// if (fullName) {
// 	console.log(`Variable ${fullName} is truthy`);
// } else {
// 	console.log(`Variable ${fullName} is falsy`);
// }

// if (phoneNumber) {
// 	console.log(`Variable ${phoneNumber} is truthy`);
// } else {
// 	console.log(`Variable ${phoneNumber} is falsy`);
// }

// if (emailAddress) {
// 	console.log(`Variable ${emailAddress} is truthy`);
// } else {
// 	console.log(`Variable ${emailAddress} is falsy`);
// }

// if (isSubscribed) {
// 	console.log(`Variable ${isSubscribed} is truthy`);
// } else {
// 	console.log(`Variable ${isSubscribed} is falsy`);
// }

// if (membershipLevel) {
// 	console.log(`Variable ${membershipLevel} is truthy`);
// } else {
// 	console.log(`Variable ${membershipLevel} is falsy`);
// }

// ================================================================================================================

// ### Exercise 7:

// 1. Create three variables:
//    - `hasCompletedCourse` (boolean)
//    - `hasPassedExam` (boolean)
//    - `hasPaidFees` (boolean)
// 2. Using these variables, write conditions to check:
//    - If a student can graduate (completed course AND passed exam AND paid fees)
//    - If a student needs to reapply (not completed course OR not passed exam)
//    - If a student has an outstanding balance (completed course AND passed exam but NOT paid fees)
// 3. Print appropriate messages to the console based on these conditions.

// let hasCompletedCourse = true;
// let hasPassedExam = true;
// let hasPaidFees = true;
// if (hasCompletedCourse && hasPassedExam && hasPaidFees) {
// 	console.log("Student completed course successfully!!!");
// } else if (!hasCompletedCourse || !hasPassedExam) {
// 	console.log("Student need to reapply!!!");
// } else if (hasCompletedCourse && hasPassedExam && !hasPaidFees) {
// 	console.log("Student has an outstanding balance");
// }

// hasCompletedCourse && hasPassedExam && hasPaidFees ? console.log("Student completed course successfully!!!") : console.log("Student need to reapply!!!");

// ================================================================================================

// ### Exercise 8:

// 1. Create a variable called `weatherCondition` with values like "sunny", "rainy", "snowy", etc.
// 2. Use a switch statement to log appropriate activity recommendations:
//    - "sunny": "Great day for a picnic!"
//    - "rainy": "Perfect time to read a book indoors."
//    - "cloudy": "Good day for a walk."
//    - "snowy": "Let's build a snowman!"
//    - "windy": "Fly a kite if you have one!"
//    - Default: "Check the weather forecast for today."
// 3. Now rewrite this using if/else statements instead.

// const weatherCondition = "snowy";

// switch (weatherCondition) {
// 	case "sunny":
// 		console.log("Todays weather is Sunny");
// 		break;

// 	case "rainy":
// 		console.log("Todays weather is Rainy");
// 		break;

// 	case "snowy":
// 		console.log("Todays weather is Snowy");
// 		break;

// 	default:
// 		console.log("Todays weather is Normal");
// }

// if (weatherCondition === "sunny") {
// 	console.log("Todays weather is Sunny");
// } else if (weatherCondition === "rainy") {
// 	console.log("Todays weather is Rainy");
// } else if (weatherCondition === "snowy") {
// 	console.log("Todays weather is Snowy");
// } else {
// 	console.log("Todays weather is Normal");
// }

// ====================================================================================

// ## Problem-Solving Challenges

// ### Challenge 1: Age Group Categorizer

// Given an age, classify the person as a "child" (<13), "teenager" (13–19), "adult" (20–64), or "senior" (65+).

// const age = 25;

// if (age < 13) {
// 	console.log("Persaon is a child");
// } else if (age >= 13 && age <= 19) {
// 	console.log("Persaon is a teenager");
// } else if (age >= 20 && age <= 64) {
// 	console.log("Persaon is a adult");
// } else if (age >= 65) {
// 	console.log("Persaon is a senior");
// }

// ====================================================================================

// ### Challenge 3: Product Inventory Decision

// Create a program that checks product stock and reorders if necessary:

// Variables:

// stockLevel (number of items in stock)
// minStockLevel (threshold)
// isSupplierAvailable (true/false)

// Logic:

// If stockLevel is below minStockLevel and isSupplierAvailable is true, print "Order more stock".
// If supplier is unavailable, print "Cannot reorder now".
// If stock is sufficient, print "Stock is sufficient".

// const stockLevel = 52;
// const minStockLevel = 10;
// const isSupplierAvailable = true;

// if (stockLevel < minStockLevel && isSupplierAvailable) {
// 	console.log("Order more stock");
// } else if (!isSupplierAvailable) {
// 	console.log("Cannot reorder now");
// } else if (stockLevel > minStockLevel) {
// 	console.log("Stock is sufficient");
// }

// ====================================================================================

// ### Challenge 4: Mobile Data Usage Alert

// Track data usage for a prepaid mobile plan.

// Variables:
// dataLimitGB
// dataUsedGB
// daysUsed
// totalDaysInPlan (e.g., 30)

// Calculate:
// Average daily use = dataUsedGB / daysUsed
// Recommended usage per day = dataLimitGB / totalDaysInPlan

// If average use > recommended: Print "Warning: You are overusing data."

// Else: Print "Data usage is on track."

// const dataLimitGB = 200;
// const dataUsedGB = 150;
// const daysUsed = 15;
// const totalDaysInPlan = 30;

// const avgDailyUse = dataUsedGB / daysUsed;
// console.log(avgDailyUse);

// const usagePerDay = dataLimitGB / totalDaysInPlan;
// console.log(usagePerDay);

// if (avgDailyUse > usagePerDay) {
// 	console.log("Warning: You are overusing data.");
// } else {
// 	console.log("Data usage is on track.");
// }

// ====================================================================================

// ### Challenge 4: Coffee Shop Order Calculator

// Create a program that calculates the cost of a coffee shop order:

// 1. Create variables for:
//    - Number of coffees ordered
//    - Type of coffee (regular or specialty)
//    - Whether customer wants a pastry
// 2. Calculate the total cost based on:
//    - Regular coffee: $3 each
//    - Specialty coffee: $4.50 each
//    - Pastry: $2.75 each
// 3. Apply a 10% discount if more than 3 coffees are ordered
// 4. Print the final total

const noOfCoffee = 3;
const typeOfCoffee = "regular";
const wantPastry = true;

const regularCoffeeCost = 3;
const specialCoffeeCost = 4.5;
const pastryCost = 2.75;
// let finalTotal;
// if (wantPastry) {
// 	finalTotal = regularCoffeeCost * noOfCoffee + pastryCost;
// 	console.log(finalTotal);
// } else {
// 	finalTotal = regularCoffeeCost * noOfCoffee;
// 	console.log(finalTotal);
// }

// finalTotal = regularCoffeeCost * noOfCoffee + pastryCost;

// console.log('${wantPastry} ? ${finalTotal = regularCoffeeCost * noOfCoffee + pastryCost }: ${finalTotal = regularCoffeeCost * noOfCoffee}`)

// console.log(`${wantPastry} ? ${(finalTotal = regularCoffeeCost * noOfCoffee + pastryCost)} : ${(finalTotal = regularCoffeeCost * noOfCoffee)}`);

wantPastry ? (finalTotal = regularCoffeeCost * noOfCoffee + pastryCost) : (finalTotal = regularCoffeeCost * noOfCoffee);

// console.log(finalTotal);

if (noOfCoffee > 3) {
	finalTotal = (finalTotal * 10) / 100;
	console.log("10% Discount Total:", finalTotal);
} else {
	console.log("Final Total:", finalTotal);
}

// ====================================================================================

// ### Challenge 2: Salary Tax Calculator

// Create a program to calculate the tax owed based on salary:

// Create variables: salary (in ₹)

// Tax brackets:
// Up to ₹250,000 → 0%
// ₹250,001 – ₹500,000 → 5%
// ₹500,001 – ₹1,000,000 → 20%
// Above ₹1,000,000 → 30%

// Print:
// "Your salary is ₹X and tax payable is ₹Y"

// const salary = 300000;

// if (salary <= 250000) {
// 	console.log(`Your salary is ₹${salary} and tax payable is ₹ 0%`);
// } else if (salary >= 250001 && salary <= 500000) {
// 	console.log(`Your salary is ₹${salary} and tax payable is ₹ 5%`);
// } else if (salary >= 500001 && salary <= 1000000) {
// 	console.log(`Your salary is ₹${salary} and tax payable is ₹ 20%`);
// } else if (salary >= 1000000) {
// 	console.log(`Your salary is ₹${salary} and tax payable is ₹ 30%`);
// }

// ====================================================================================
