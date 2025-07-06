//15
//Shopping Cart Calculator
//Create a simple shopping cart that:

//Has prices stored as strings (e.g., "10.99", "24.50")
//Properly converts these to numbers
//Calculates the total:
//Console logs the total formatted as a currency string (e.g., "$39.48")

// Ans:
// const priceOne = "10.99";
// const priceTwo = "24.50";
// const total = Number(priceOne) + Number(priceTwo);

// // console.log("$", String(total));
// console.log(`$${String(total)}`);

// 14
//Coercion Detective
//Write a program that demonstrates different cases of coercion:

// What happens when you multiply a string number by a number?
// What happens when you add string number to actual number?

//Ans:

// const num1 = "9";
// const num2 = 5;

// console.log(num1 * num2); //45
// console.log(num1 + num2); // '95'

// 13
// console.log("10" + 5); // ? '105'
// console.log("10" - 5); // ? 5
// console.log(5 + "5"); // ?  '55'
// console.log(5 - "2"); // ?  3

// 12) Convert it to a number and subtract it from 2030. Print how many years remain.
// Ans:
// let year = "2024";
// let yearVal = 2030;
// let remainingYears = yearVal - Number(year);
// console.log(remainingYears);

// 11
// let str = "hello";
// let num = Number(str); // PREDICT THE OUTPUT AND EXPLAIN // NaN

// console.log(num);

//10
// Convert String to Number
// const age = "85";
// //Ans:
// console.log(Number(age)); //85

// // Convert Number to String
// const catalogCode = 85;

// console.log(String(catalogCode)); //"85"

//8
// Speed limit check on a road, if speed limit is greater than 100 then log the warning

// const speedLimit = 150;

// if (speedLimit > 100) {
// 	console.log("Warning...");
// }

//7
// Hard-code three angles in degrees:
let angle1 = 60;
let angle2 = 60;
let angle3 = 60;

//  A triangle is valid if the sum of its angles is exactly 180:
// If triagnle is valid then log triangle is valid if not log triangle is not valid

// let angleTotal = angle1 + angle2 + angle3;

// if ((angleTotal = 180)) {
// 	console.log("triangle is valid");
// } else {
// 	console.log("triangle is not valid");
// }

// let angle12 = 60;
// let angle22 = 60;
// let angle32 = 90;

// //  A triangle is valid if the sum of its angles is exactly 180:
// // If triagnle is valid then log triangle is valid if not log triangle is not valid

// let angleTotal2 = angle12 + angle22 + angle32;

// if (angleTotal2 == 180) {
// 	console.log("triangle is valid");
// } else {
// 	console.log("triangle is not valid");
// }

//6
// let x = 7;
// let y = 5;

// const sum = x + y;
// const diff = x - y;
// const prod = x * y;

// console.log(`Sum: ${sum}, Difference: ${diff}, Product: ${prod}`);

// Expected console log:  “Sum: 12, Difference: 2, Product: 35.”

// 5
// Predict the output:
console.log(4 + (6 / 2) * (3 - 1) - 5); // 3 * 2 = 6 + 4 = 10
//    10-5 = 5
console.log(2 + 3 * 4 - 8 / (2 + 2)); //4*3 = 12+2 = 14
//8/4 = 2
//14-2 = 12

// 4)
// Task: You bought 3 items costing ₹120, ₹250, and ₹90.

//Compute the total bill.

//Apply a 10% discount using an assignment shorthand.

//Compare if the discounted total is greater than ₹400.

//Log a message: "Original: ₹460, After 10% off: ₹414, Above 400? true"

// const item1 = 220;
// const item2 = 350;
// const item3 = 90;

// const totalBill = item1 + item2 + item3;
// const discountAmt = (10 / 100) * totalBill;
// const discountedTotal = totalBill - discountAmt;

// console.log(discountedTotal);

// if (discountedTotal > 400) {
// 	console.log(`Original: ${totalBill}, After 10% off: ${discountedTotal}`);
// }

// 1) Task: Using only 2 variables (x, y), swap the values of x and y, then console log both:
// Example start:
// let x = 10;
// let y = 20;
// // Swap here...
// // After
// //log: x: 20, y: 10

// // x = 20;
// // y = 10;

// console.log(`x: ${x}, y: ${y}`);
