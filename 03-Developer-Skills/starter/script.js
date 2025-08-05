// Remember, we're gonna use strict mode in all scripts now!
"use strict";

///////////////////////////////////////
// Debugging with the Console and Breakpoints
// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",

//     // C) FIX
//     // value: Number(prompt('Degrees celsius:')),
//     value: 10,
//   };

//   // B) FIND
//   console.table(measurement);

//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

// // Using a debugger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) IDENTIFY
// console.log(amplitudeBug);

function calculateSum() {
  const input1 = prompt("Enter first number:");
  const input2 = prompt("Enter second number:");

  console.log("Inputs:", input1, input2);

  const number1 = Number(input1);
  const number2 = Number(input2);

  //  isNaN() checks the value is NaN or not. If value is NaN then returns true otherwise return false

  if (Number.isNaN(number1) || Number.isNaN(number2)) {
    alert("Enter Valid number:");
    return;
  }

  const result = number1 + number2;

  console.log("Expected a number sum. Actual result:", result);

  alert("The sum is: " + result);
}

calculateSum();

// function averageScores() {
//   const scores = [90, 85, 100, "75", 80];
//   let total = 0;

//   for (let i = 0; i <= scores.length; i++) {
//     total += scores[i];
//   }

//   const average = total / scores.length;
//   console.log("Expected average. Actual:", average);
// }

// averageScores();
