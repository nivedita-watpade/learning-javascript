// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// § Data 1: jphn weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// const marksData ={
//     weight: 78,
//     height: 1.69
// }

// const johnsData ={
//     weight: 92,
//     height: 1.95
// }

// const bmiData = {
//     marksbmi: [],
//     johnssbmi: [],
// }

// function bmiCalculator(weight, height){
//   const bmi = weight / (height * height);
//   return bmi;
// }

// const marksBMI = bmiCalculator(marksData.weight, marksData.height);
// const johnBMI = bmiCalculator(johnsData.weight, johnsData.height);

// bmiData.marksbmi.push(marksBMI);
// bmiData.johnssbmi.push(johnBMI);

// console.log(bmiData);

// if(marksBMI > johnBMI){
//     console.log(`Mark has a higher BMI than John`);
// }else{
//      console.log(`John has a higher BMI than Mark`);
// }

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

// const dolphinsScore = [96, 108, 69];
// const koalasScore = [88, 91, 110];

// function calculateAvgScore(scores){
//     const avgScore = (scores[0] + scores [1] + scores [2])/scores.length;
//     return avgScore;
// }

// console.log(calculateAvgScore(dolphinsScore));

// const dolphinsAvgScore = calculateAvgScore(dolphinsScore);
// const koalasAvgScore = calculateAvgScore(koalasScore);

// function checkWinner(teamOneAvgScore, teamTwoAvgScore){
//     if(teamOneAvgScore > teamTwoAvgScore){
//         console.log (`Team Dolphins is winner `);
//     }else{
//          console.log (`Team Koalas is winner `);
//     }
// }

// checkWinner(dolphinsAvgScore, koalasAvgScore);

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement
// �
// � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
//  To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// Value X is between 50 and 300, if it's >= 50 && <= 300

// const bills =  [275, 40, 430];

// function tipCalculator(billsValue){
//   const tip = billsValue >= 50 && billsValue <= 300 ? billsValue * 0.15 : billsValue * 0.2 ;
//  const totalBill = billsValue + tip;
//  return `The bill was ${billsValue}, the tip was ${tip}, and the total value ${totalBill}`;
// }

// console.log(tipCalculator(bills[0]));

const expenses = {
  groceries: 1500,
  rent: 12000,
  transport: 2000,
};

function totalExpenses(expensesData) {
  const total =
    expensesData.groceries + expensesData.rent + expensesData.transport;
  return total;
}

console.log(totalExpenses(expenses));

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// Q6. Convert and Classify
// Given:
// const tempsCelsius = [5, 15, 28];

// Convert each temperature to Fahrenheit

// Classify each as "Cold", "Warm", or "Hot"
// Create an array of strings like:
// [
//   "5°C = 41°F → Cold",
//   "15°C = 59°F → Warm",
//   "28°C = 82.4°F → Hot"
// ]

const tempsCelsius = [5, 15, 28];

function tempConversion(tempData) {
  const fahrenheitTemp = (tempData * 9) / 5 + 32;
  return fahrenheitTemp;
}

function convertAndClassifyTemparature(temp) {
  const fahrenheitVal = tempConversion(temp);
  if (fahrenheitVal > 0 && fahrenheitVal <= 44) {
    return `${fahrenheitVal} -> cold`;
  } else if (fahrenheitVal >= 45 && fahrenheitVal <= 75) {
    return `${fahrenheitVal} -> Warm`;
  } else if (fahrenheitVal >= 76 && fahrenheitVal <= 100) {
    return `${fahrenheitVal} -> Hot`;
  } else {
    return `Not Known`;
  }
}

const temperatureData = [];
temperatureData.push(
  `${tempsCelsius[0]} = ${convertAndClassifyTemparature(tempsCelsius[0])}`
);

temperatureData.push(
  `${tempsCelsius[1]} = ${convertAndClassifyTemparature(tempsCelsius[1])}`
);

temperatureData.push(
  `${tempsCelsius[2]} = ${convertAndClassifyTemparature(tempsCelsius[2])}`
);

console.log(temperatureData);

const nivi = {
  firstName: "Nivedita",
  lastName: "Watpade",
  friends: ["anki", "gangi"],
};

console.log(
  `Nivi has ${nivi["friends"].length} friends, and her best friend is called ${nivi["friends"][0]}`
);

console.log(
  `Nivi has ${nivi.friends.length} friends, and her best friend is called ${nivi.friends[0]}`
);

console.log(nivi["friends"][1]);

console.log(nivi["firstName"]);

const data = {
  firstName: "Pranit",
  lastName: "Chavan",
  age: 25,
};

const keys = ["firstName", "lastName", "age"];

console.log(data[keys[0]], data[keys[1]], data[keys[2]]);
