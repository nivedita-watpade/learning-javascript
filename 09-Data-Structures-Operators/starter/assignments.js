// 1. Declare variables called country, continent and population and assign their values according to your own country (population in millions).
// Log their values to the console.

let country = 'India';
let continent = 'Asia';
let population = 1460;

console.log('Country:', country);
console.log('Continent:', continent);
console.log('Population:', population);

// 2. Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.
// Log the types of isIsland, population, country and language to the console.

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// 3.Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).
// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
// Try to change one of the changed variables now, and observe what happens.
language = 'Marathi';
const country1 = 'India';
console.log(country1, language);

// 4.1 If your country split in half, and each half would contain half the population, then how many people would live in each half?
// 4.2 Increase the population of your country by 1 and log the result to the console.
// 4.3 Finland has a population of 6 million. Does your country have more people than Finland?
// 4.4 The average population of a country is 33 million people. Does you country have less people than the average country?
// 4.5 Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

const halfPopulation = population / 2;
console.log(halfPopulation);
console.log(population + 1);
console.log(population > 600);
console.log(population < 3300);
const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

// 5.1 If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).
// 5.2 After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

if (population > 33) {
  console.log(`${country}'s ${population} is above the average`);
} else {
  console.log(
    `${country}'s population is ${population - 33} million below average`
  );
}

//6 Predict the result of these 5 operations without executing them:

console.log('9' - '5'); // -> ? 4
console.log('19' - '13' + '17'); // -> ? '617'
console.log('19' - '13' + 17); // -> ? 23
console.log('123' < 57); // -> ? false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ? 1143

// 7.1 Declare a variable numNeighbours based on a prompt input like this:
// 7.2 If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).
// 7.3 Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.
// 7.4 Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).
// 7.5 Test the code with different values of numNeighbours, including 1 and 0.
// 7.6 Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?
// 7.7 Finally, convert numNeighbours to a number, and watch what happens now when you input 1.7.8 Reflect on why we should use the === operator and type conversion in this situation.
// Ans:
// const numNeighbours = prompt(
//   'How many neighbour countries does your contry have?'
// );

// if (Number(numNeighbours) === 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

// 8.1 Comment out the previous code so the prompt doesn't get in the way.
// 8.1 Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.
// 8.1 Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
// 8.1 If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.
// 8.1 Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).

if (language === 'English' && population < 500000 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}

// 9. Use a switch statement to log the following string for the given language:
// chinese or mandarin: 'MOST number of native speakers!';
// spanish: '2nd place in number of native speakers';
// english: '3rd place';
// hindi: 'Number 4';
// arabic: '5th most spoken language';
// for all other simply log 'Great language too :D'.

const languages = 'spanish';
switch (languages) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}

// 10.1 If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!
// 10.2 After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

population > 33
  ? console.log(`${country} population is above average`)
  : console.log(`${country} population is below average`);

//   JavaScript Fundamentals — Part 2

// 1.1 Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

// 1.2 Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} people and its capital city is ${capitalCity}`
  );
}

describeCountry('India', '6 Million', 'Delhi');

const describeCountry1 = describeCountry('India', '6 Million', 'Mumbai');
const describeCountry2 = describeCountry('France', '16 Million', 'Paris');
const describeCountry3 = describeCountry('Japan', '3 Million', 'Tokyo');

// 2.1 The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.
// 2.2 To calculate the percentage, divide the given population value by 7900 and then multiply by 100.
// 2.3 Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.
// 2.4 Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

console.log(percentageOfWorld1(3000));

const percentageOfWorld11 = percentageOfWorld1(5000);
const percentageOfWorld12 = percentageOfWorld1(6000);
const percentageOfWorld13 = percentageOfWorld1(7000);
console.log(percentageOfWorld11, percentageOfWorld12, percentageOfWorld13);

const percentageOfWolrd2 = function (population) {
  return (population / 7900) * 100;
};

const percentageOfWorld21 = percentageOfWorld1(5000);
const percentageOfWorld22 = percentageOfWorld1(6000);
const percentageOfWorld23 = percentageOfWorld1(7000);
console.log(percentageOfWorld21, percentageOfWorld22, percentageOfWorld23);

// 3.1 Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.

const percentageOfWolrd3 = population => {
  return (population / 7900) * 100;
};

const percentageOfWorld31 = percentageOfWorld1(5000);
const percentageOfWorld32 = percentageOfWorld1(6000);
const percentageOfWorld33 = percentageOfWorld1(7000);
console.log(percentageOfWorld31, percentageOfWorld32, percentageOfWorld33);

// 4.1 Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.
// 4.2 To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.
// 4.3 Call describePopulation with data for 3 countries of your choice.

function describePopulation(country, population) {
  const percentageOfPopulation = percentageOfWorld1(population);
  console.log(
    `${country} has ${population} million people, which is about ${percentageOfPopulation}% of the world`
  );
}

describePopulation('India', 5000);
describePopulation('China', 7000);
describePopulation('Japan', 7500);

// 5.1 Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.
// 5.2 Log to the console whether the array has 4 elements or not (true or false).
// 5.3 Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.

const populations = [3000, 2000, 1500, 5000];

console.log(populations.length === 4);

const percentages = [];
percentages.push(percentageOfWorld1(populations[0]));
percentages.push(percentageOfWorld1(populations[1]));
percentages.push(percentageOfWorld1(populations[2]));
percentages.push(percentageOfWorld1(populations[3]));
console.log(percentages);

// 6.1 Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.
// 6.2 At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.
// 6.3 Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.
// 6.4 If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.
// 6.5 Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'

const neighbours = ['Italy', 'Canada', 'US', 'Sweden'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log('Probably not a central european country :D');
}

console.log(neighbours.indexOf('Sweden'));
neighbours[3] = 'Republic of Sweden';
console.log(neighbours);

// 7.1 Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).

const myCountry = {
  country: 'India',
  capital: 'Delhi',
  language: 'Hindi',
  population: 1500,
  neighbours: ['Italy', 'Canada', 'US', 'Sweden'],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million finnish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours === 0 ? true : false;
  },
};

console.log(myCountry);

// 8.1 Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.
// 8.2 Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.

console.log(
  `${myCountry.country} has ${myCountry.population} million finnish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population = myCountry.population + 200;
console.log(myCountry.population);

myCountry['population'] = myCountry['population'] - 200;
console.log(myCountry.population);

// 9.1 Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
// 9.2 Call the describe method.
// 9.3 Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

// 10.1 There are elections in your country! in a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.

const voters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= voters.length - 1; i++) {
  console.log(`Voter number ${voters[i]} is currently voting`);
}

// 11.1 Let's bring back the populations array from a previous assignment.
// 11.2 Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.
// 11.3 Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.

const percentages2 = [];
for (let i = 0; i <= populations.length - 1; i++) {
  console.log(percentageOfWorld1(populations[i]));
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

// 12.1 Store this array of arrays into a variable called listOfNeighbours:
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// 12.2 Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country.
// 12.3 You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway

const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = listOfNeighbours.length - 1; i >= 0; i--) {
  console.log(`Neighbour: ${listOfNeighbours[i]}`);
}

// 13.1 Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).
// 13.2 Reflect on what solution you like better for this task: the for loop or the while loop?

const percentageWhile = [];
let i = 0;
while (i <= populations.length - 1) {
  percentageWhile.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentageWhile);
