// // const calcAverage = (score1, score2, score3) => {
// //   return (score1 + score2 + score3) / 3;
// // };

// // const avgDolhins = calcAverage(44, 23, 71);
// // const avgKoalas = calcAverage(65, 54, 49);

// // function checkWinner(avgDolhins, avgKoalas) {
// //   if (avgDolhins > 2 * avgKoalas) {
// //     return `Dolphin win (${avgDolhins} vs ${avgKoalas}) `;
// //   } else if (avgKoalas > 2 * avgDolhins) {
// //     return `Koalas win (${avgKoalas} vs ${avgDolhins}) `;
// //   } else {
// //     return "No one wins";
// //   }
// // }

// // console.log(checkWinner(avgDolhins, avgKoalas));

// // Challenge 1: Average Temperature Checker (Function Declarations vs
// // Expressions)
// // Description:
// // You receive daily temperature data and want to find the weekly average and check if it's a
// // heatwave (average > 40°C).
// // Tasks:
// // 1. Use a function declaration to write calcAverageTemp(day1, day2, day3, day4,
// // day5, day6, day7).
// // 2. Use a function expression checkHeatwave(avgTemp) that returns true if the
// // temperature is above 40°C.
// // 3. Print appropriate messages for both average and heatwave status:
// // Print a message like:
// // "Weekly average: 42.1°C → Heatwave warning! 🌡️🔥"
// // or
// // "Weekly average: 33.4°C → No heatwave."
// //  Test data: 35, 42, 39, 45, 41, 3

// // function calcAverageTemp(day1, day2, day3, day4, day5, day6, day7) {
// //   return (day1 + day2 + day3 + day4 + day5 + day6 + day7) / 7;
// // }

// // console.log(calcAverageTemp(35, 42, 39, 45, 41, 38, 43));

// // const avgTempVal = calcAverageTemp(15, 42, 39, 45, 41, 38, 43);

// // const checkHeatwave = function (avgTemp) {
// //   if (avgTemp > 40) {
// //     return `Weekly average: ${avgTemp} → Heatwave warning! 🌡️🔥`;
// //   } else {
// //     return `Weekly average: ${avgTemp} → No heatwave.`;
// //   }
// // };

// // console.log(checkHeatwave(avgTempVal));

// // Challenge 2:
// //  Function Declaration:
// // Write a function suggestWaterIntake(temperature, isActive) that returns:
// //  3 liters if temperature > 35 and isActive is true
// //  2.5 liters if temperature > 35 and isActive is false
// //  2 liters if temperature ≤ 35 and isActive is true
// //  1.5 liters otherwise
// //  Arrow Function:
// // Write an arrow function displaySuggestion(name, litres) that returns:
// // "Ayesha should drink 2.5 liters of water today."
// //  Test your function with different inputs and print the result

// // function suggestWaterIntake(temperature, isActive) {
// //   if (temperature > 35 && isActive) {
// //     return `3 liters`;
// //   } else if (temperature > 35 && !isActive) {
// //     return `2.5 liters`;
// //   } else if (temperature <= 35 && isActive) {
// //     return `2 liters`;
// //   } else {
// //     return `1.5 liters`;
// //   }
// // }

// // // console.log(suggestWaterIntake(40, true));
// // // console.log("3 liters");

// // const displaySuggestion = (fName, liters) =>
// //   `${fName} should drink ${liters} of water today`;

// // const waterIntake = suggestWaterIntake(18, false);

// // console.log(displaySuggestion("Nivi", waterIntake));

// // 📝 Description:
// // You're building a simple grading tool. First, you calculate the percentage, then use it to
// // determine the grade.
// // 🔧 Tasks:
// // 1. Function Declaration:
// // Write a function calculatePercentage(marksObtained, totalMarks) that returns
// // the percentage.
// // 2. Function Declaration:
// // Write another function getGrade(percentage) that returns:
// // o "A" if percentage ≥ 90
// // o "B" if 75 ≤ percentage < 90
// // o "C" if 50 ≤ percentage < 75
// // o "F" if below 50

// // Write a function generateReport(name, marksObtained, totalMarks) that:
// // o Calls calculatePercentage
// // o Then calls getGrade
// // o Returns a string:
// // "Sara scored 86.67% and received grade B"

// // function calculatePercentage(marksObtained, totalMarks) {
// //   return (marksObtained / totalMarks) * 100;
// // }

// // const calculatePercentage = (marksObtained, totalMarks) =>
// //   (marksObtained / totalMarks) * 100;

// // console.log(calculatePercentage(450, 500));

// // const getGrade = function (percentage) {
// //   if (percentage >= 90) {
// //     return "A";
// //   } else if (percentage >= 75 && percentage < 90) {
// //     return "B";
// //   } else if (percentage > 75 && percentage <= 50) {
// //     return "C";
// //   } else if (percentage < 50) {
// //     return "F";
// //   }
// // };

// // console.log(getGrade(35));
// // "Sara scored 86.67% and received grade B"
// // function generateReport(name, marksObtained, totalMarks) {
// //   const percentage = calculatePercentage(marksObtained, totalMarks);
// //   const grade = getGrade(percentage);
// //   return `${name} scored ${percentage}% and received grade ${grade}`;
// // }

// // console.log(generateReport("Pranit", 180, 500))

// // function returnLength(array) {
// //   const arrayLength = array.length;
// //   return arrayLength;
// // }

// // console.log(returnLength([1, 2, 3, 4]));

// // function getLastValue(array) {
// //   return array[array.length - 1];
// // }
// // console.log(getLastValue([1, 2, 3, 4]));

// // 3). Create an array using a function
// // Write a function called createNumbersArray that takes three numbers as arguments and returns them inside an array.

// // Example call:
// // createNumbersArray(5, 10, 15)
// // should return: [5, 10, 15]

// function createNumbersArray(num1, num2, num3) {
//   const numbersArray = [num1, num2, num3];
//   return numbersArray;
// }

// console.log(createNumbersArray(5, 10, 15));

// // function createNumbersArray(num1, num2, num3) {
// //   const numbersArray = [];
// //   numbersArray.push(num1);
// //   numbersArray.push(num2);
// //   numbersArray.push(num3);
// //   return numbersArray;
// // }

// console.log(createNumbersArray(5, 10, 15));

// // 4). Sum all values in an array
// // Write a function sumArray that takes an array of numbers as a parameter and returns the sum of all elements.

// // Example: sumArray([3, 7, 2]) // → 12

// function sumArray(arrayNum) {
//   const sumOfArrayNum = arrayNum[0] + arrayNum[1] + arrayNum[2];
//   return sumOfArrayNum;
// }

// // console.log(sumArray([3, 7, 2]));

// // 5). Find items with a function
// // Write a function findItem that takes two parameters:

// // an array of strings
// // a string to search for

// // It should return:
// // "Found!" if the item exists in the array
// // "Not found." if it does not

// // Example: findItem(['pen', 'pencil', 'eraser'], 'pencil') // → "Found!"

// function findItem(itemArray, item) {
//   // if (itemArray.includes(item)) {
//   //   return `Found ${item} !!!`;
//   // } else if (itemArray.length === 0) {
//   //   return `Please add elements in array`;
//   // } else if (!item) {
//   //   return `Please add item to search`;
//   // } else {
//   //   return `Not Found`;
//   // }

//   if (!item) {
//     return `Please add item to search`;
//   }
//   if (itemArray.length === 0) {
//     return `Please add elements in array`;
//   }
//   if (itemArray.includes(item)) {
//     return `Found ${item} !!!`;
//   } else {
//     return `Not Found`;
//   }
// }

// console.log(findItem(["pen", "pencil", "eraser"], "pen"));

// // 6. Remove the last item in an array using a function
// // Write a function removeLast that takes an array and:

// // removes the last element

// // returns the updated array

// // Example call:
// // removeLast(['red', 'blue', 'green']) → returns ['red', 'blue']

// function removeLast(colors) {
//   colors[colors.length - 1] = null;
//   return colors;
// }

// console.log(removeLast(["red", "blue", "green"]));

function calcTip(billValue) {
  if (billValue >= 50 && billValue <= 300) {
    const tipAmt = (15 / 100) * billValue;
    return tipAmt;
  } else {
    const tipAmt = (20 / 100) * billValue;
    return tipAmt;
  }
}

console.log(calcTip(125));

const bills = [125, 555, 44];

const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);

const tips = [];
tips.push(tip1);
tips.push(tip2);
tips.push(tip3);

console.log(tips);

const total1 = bills[0] + tips[0];
const total2 = bills[1] + tips[1];
const total3 = bills[2] + tips[2];

const total = [];
total.push(total1);
total.push(total2);
total.push(total3);

console.log(total);

// Challenge 1: Book Reading Tracker
// Context:
// You want to track your reading progress across several books.
// Tasks:
// Write a function getReadingProgress(totalPages, pagesRead) that:
// Returns a string like "You have completed 40% of the book".
// Create two arrays:
// totalPages = [300, 150, 500]
// pagesRead = [120, 150, 240]
// Create a new array progressUpdates using the function to get reading status for each book.
// Bonus: Add logic in the function to return "Book finished!" if pagesRead equals totalPages.

function getReadingProgress(totalPages, pagesRead) {
  const completedPercentage = (pagesRead / totalPages) * 100;
  if (totalPages === pagesRead) {
    return `Book finished!`;
  }
  return `You have completed ${completedPercentage}% of the book`;
}

console.log(getReadingProgress(150, 150));

const totalPages = [300, 150, 500];
const pagesRead = [120, 150, 240];

const progressUpdates = [
  getReadingProgress(totalPages[0], pagesRead[0]),
  getReadingProgress(totalPages[1], pagesRead[1]),
  getReadingProgress(totalPages[2], pagesRead[2]),
];

console.log(progressUpdates);

const nivi = {
  firstName: "Nivedita",
  lastName: "Watpade",
  friends: ["anki", "gangi"],
  1: 29,
  "first name": "Rani",
};

nivi.friends.push("Kanchi");
nivi.friends.pop();
console.log(nivi.friends[nivi.friends.length - 1]);

nivi.friends.unshift("pranit");

console.log(nivi.friends);

console.log(nivi.friends.indexOf("pranit"));

if (nivi.friends.includes("pranit")) {
  console.log(".............. !!!!!!!");
} else {
  console.log("Prantya is not there !!!!!!!");
}

// Write a function toFahrenheit(celsius) that:
// Takes a temperature in Celsius and returns the Fahrenheit value using the formula above.
// Test it with 25°C (should return 77°F).
// Create an array celsiusTemps = [0, 20, 30].
// Create a new array fahrenheitTemps using the function for each value in the Celsius array.

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(toFahrenheit(25));
const celsiusTemps = [0, 20, 30];

const fahrenheitTemps = [
  toFahrenheit(celsiusTemps[0]),
  toFahrenheit(celsiusTemps[1]),
  toFahrenheit(celsiusTemps[2]),
];

console.log(fahrenheitTemps);

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

function calcTip2(billValue) {
  if (billValue >= 50 && billValue <= 300) {
    const tipAmt = (15 / 100) * billValue;
    return tipAmt;
  } else {
    const tipAmt = (20 / 100) * billValue;
    return tipAmt;
  }
}

const tips2 = [];
const totals2 = [];

for (let i = 0; i <= bills2.length - 1; i++) {
  const tip = calcTip2(bills2[i]);
  tips2.push(tip);
  totals2.push(tip + bills2[i]);
  // console.log("Bills Total are:", total);
}

console.log(totals2);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i];
  }
  const avgOfArrayNum = sum / arr.length;
  return avgOfArrayNum;
}
console.log(calcAverage(totals2));

function calcAverageWhile(arr) {
  let i = 0;
  let sum = 0;
  while (i <= arr.length - 1) {
    sum = sum + arr[i];
    i++;
  }
  const avgOfArrayNum = sum / arr.length;
  return avgOfArrayNum;
}
console.log(calcAverageWhile(totals2));
