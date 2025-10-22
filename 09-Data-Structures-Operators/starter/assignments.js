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

//Data Structures, Modern Operators and Strings
console.log('======= Data Structures, Modern Operators and Strings ==========');

// 1.1 Destructure the books array into two variables called firstBook and secondBook.

const books = ['Chava', 'Mrutanjay', 'testingBook'];
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

// 1.2 Destructure the books array into a variable called thirdBook. You must skip the first two books.
const [, , thirdBook] = books;
console.log(thirdBook);

// 1.3 Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// 1.4 Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// 2.1 Destructure the first book object from the books array into variables called title, author and ISBN.

const booksObj = [
  {
    title: 'Book Name',
    author: 'Book author',
    ISBN: 'Book ISBN',
    keywords: 'History',
  },
  {
    title: 'Test Name',
    author: 'Test author',
    ISBN: 'Test ISBN',
    keywords: 'Drama',
  },
  {
    title: 'Demo Name',
    author: 'Demo author',
    ISBN: 'Demo ISBN',
    keywords: 'Poetry',
  },
  {
    title: 'Demo Name',
    author: 'Demo author',
    ISBN: 'Demo ISBN',
    keywords: 'Poetry',
  },
  {
    title: 'Demo Name',
    author: 'Demo author',
    ISBN: 'Demo ISBN',
    keywords: 'Poetry',
  },
  {
    title: 'Demo Name',
    author: 'Demo author',
    ISBN: 'Demo ISBN',
    keywords: 'Poetry',
  },
  {
    title: 'Demo Name7',
    author: 'Demo author7',
    ISBN: 'Demo ISBN7',
    keywords: 'Poetry7',
    language: 'English',
  },
];

const { title, author, ISBN } = booksObj[0];
console.log(title, author, ISBN);

// 2.2 Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.

const { keywords: tag } = booksObj[0];
console.log(tag);

// 2.3 The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.

const { language: bookLanguage, programmingLanguage = 'unknown' } = booksObj[6];
console.log(bookLanguage, programmingLanguage);

// 2.4 Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = booksObj[0]);
console.log(bookTitle, bookAuthor);

// =========================================================================

const booksMainArray = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// 2.5 Each book object has a deeply nested rating property as illustrated below:
// {
//   title: 'Algorithms',
//   ...
//   thirdParty: {
//     goodreads: {
//       rating: 4.41,
//       ratingsCount: 1733,
//       reviewsCount: 63,
//       fiveStarRatingCount: 976,
//       oneStarRatingCount: 13
//     }
//   }
// },

// Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.

// Please do most of the work on the left side of the assignment operator: const ... = books[0];

const {
  thirdParty: {
    goodreads: { rating },
  },
} = booksMainArray[0];
console.log(rating);

// 2.6 Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

// If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'

function printBookInfo({ title, author, year = 'unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}

printBookInfo(booksMainArray[0]);

// 3.1 Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.

// Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays).

const bookAuthors = [...booksMainArray[0].author, ...booksMainArray[1].author];
console.log(bookAuthors);

// 3.2 Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.

function spellWord(word) {
  console.log(...word);
}

spellWord('Javascript');

// 4.1 Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).

const [mainKeyword, ...rest] = booksMainArray[0].keywords;
console.log(mainKeyword, rest);

//4.2 Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.

const { publisher: bookPublisher, ...restOfTheBook } = booksMainArray[1];
console.log(bookPublisher, restOfTheBook);

// 4.3 Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".

function printBookAuthorsCount(title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
}

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// 5.1 Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book, for example

//Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.

function hasExamplesInJava(book) {
  return book.programmingLanguage === 'Java' || 'no data available';
}

console.log(hasExamplesInJava(booksMainArray[0]));

//5.2 Some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting.

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`"${books[i].title}" provides online content`);
}

// 6.1 There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.

for (let i = 0; i <= booksMainArray.length; i++) {
  booksMainArray[i]?.onlineContent ??
    console.log(
      `${booksMainArray[i]?.author} provides no data about its online content`
    );
}

// 7.1 Some of the book objects from the books array are missing the edition property. Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.

for (let i = 0; i <= booksMainArray.length - 1; i++) {
  const editionProp = booksMainArray[i].edition || 1;
  console.log(editionProp);
}

// 7.2 Some of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.

// Use the &&= operator (tip: you may also need the ! operator)

for (let i = 0; i <= booksMainArray.length - 1; i++) {
  console.log(booksMainArray[i].thirdParty.goodreads.rating < 4.2);

  // if(booksMainArray[i].thirdParty.goodreads.rating < 4.2){
  // }
}

// 8.1 Use the for-of loop to loop over the books array and sum the pages of all books. Use the pageSum variable below, and the pages property of the book objects.

let sum = 0;
for (const book of booksMainArray) {
  sum = sum = book.pages;
}
console.log(sum);

// 8.2 Below is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array.

// Remember that each book object has the author property, which can be a string (if there is only a single author) or an array (if there are multiple authors). You may need to use the typeof operator. You can also use multiple loops if needed. The allAuthors array should have just one level (no nested arrays).

const allAuthors = [];

for (const book of booksMainArray) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
  } else {
    for (const author of book.author) {
      allAuthors.push(author);
    }
  }
}
console.log(allAuthors);

// 8.3 Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index. Make the index start from 1, instead of 0.

for (const [key, value] of allAuthors.entries()) {
  console.log(`${key + 1}. ${value}`);
}

// 10.1 Write a function called getFirstKeyword that takes the book object as an argument. This function should return the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist). It shouldn't throw an error. Use optional chaining for that.

function getFirstKeyword(book) {
  return book.keywords?.[0] ?? 'No keywords';
}

console.log(getFirstKeyword(booksMainArray[7]));

// 11.1 Below is the entries variable that stores an empty array. Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array. For each key, push a new array that contains that key to the entries array.

const entries = [];
for (const key of Object.keys(booksMainArray[0].thirdParty.goodreads)) {
  entries.push(key);
}
console.log(entries);
//11.2 Use the for-of loop together with the Object.values() method and Array's entries() method to loop over thirdParty.goodreads property of the first book from the books array.

//Push each value to the appropriate inner array in the entries array (use index from entries()).

for (const values of Object.values(booksMainArray[0].thirdParty.goodreads)) {
  entries.push(values);
}

console.log(entries);

for (const [key, values] of Object.entries(
  booksMainArray[0].thirdParty.goodreads
)) {
  entries.push(key);
  entries.push(values);
}

console.log(entries);

// 11.3 Use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array. Assign the returned value to the variable called entries2.

const entries2 = Object.entries(booksMainArray[0].thirdParty.goodreads);
console.log(entries2);

//11.4 Log the entries and entries2 variables to the console, and compare them. They should look the same.

console.log(entries);
console.log(entries2);

// 12.1 Below is the allKeywords variable, which stores an empty array. Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object. The allKeywords array should have just one level (no nested arrays).

// Use whatever loop and methods you want. You can also use the spread syntax. In the end, the allKeywords array should look more or less like this: ['computer science', 'programming', 'algorithms', 'data structures', ...].

const allKeywords = [];

for (const book of booksMainArray) {
  console.log(booksMainArray);
  allKeywords.push(...book.keywords);
}
console.log(allKeywords);

// 12.2 The allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly created set to the uniqueKeywords variable.

const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);

// 12.3 Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.

console.log(uniqueKeywords.add('coding').add('science'));

// 12.4 Delete 'business' from the uniqueKeywords set.
console.log(uniqueKeywords.delete('business'));

//12.5 Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.

const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

// 12.6 Delete all items from the uniqueKeywords set.
console.log(uniqueKeywords.clear());

//13.1 Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data:

// /[['title', 'Clean Code'], ['author', 'Robert C. Martin']]

const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);

console.log(bookMap);

//13.2 Set a new key in bookMap called pages, and assign it with a number 464.
console.log(bookMap.set('pages', 464));

// 13.3 Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".
console.log(bookMap.get('title'));

console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

// 13.4 Get the size of bookMap, and log it to the console.
console.log(bookMap.size);

// 13.5 Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.

if (bookMap.has('author')) console.log('The author of the book is known');

// 14.1 Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.

const firstBookMap = new Map(Object.entries(booksMainArray[0]));
console.log(firstBookMap);

//14.2 Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.

for (const [key, value] of firstBookMap) {
  if (typeof value === 'number') console.log(key);
}

// 15.1 Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.
console.log(
  booksMainArray[0].ISBN['6'],
  booksMainArray[0].ISBN['4'],
  booksMainArray[0].ISBN['9'],
  booksMainArray[0].ISBN['8']
);

// 15.2 Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.
const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess'));

// 15.3 Extract the word "boxing" from the same quote string, and log it to the console.
console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// 15.4 Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.

function isContributor(authorName) {
  console.log(authorName.lastIndexOf('(Contributor)') !== -1);
}

isContributor('Julie Sussman (Contributor)');
isContributor('Robert Sedgewick');

// 16.1 Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).

// You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". The string may also contain trailing spaces.

function normalizeAuthorName(authorsName) {
  const normalizeAuthorNameStr = authorsName
    .replace('(Contributor)', '')
    .toLowerCase()
    .trim();
  //console.log(normalizeAuthorNameStr.split(' '));
  const [firstName, lastName] = normalizeAuthorNameStr.split(' ');
  console.log(firstName, lastName);

  const updatedNameArr = [];

  updatedNameArr.push(
    firstName.replace(firstName[0], firstName[0].toUpperCase())
  );
  updatedNameArr.push(lastName.replace(lastName[0], lastName[0].toUpperCase()));
  console.log(updatedNameArr);
  console.log(updatedNameArr.join(' '));
}

normalizeAuthorName('  JuliE sussMan (Contributor)');

// 16.2 Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable.

console.log(booksMainArray[1].title.replace('Programs', 'Software'));

// 16.3 Write a function called logBookTheme that takes book's title (string), and logs to the console:
// "This book is about computers" if the title starts with the word "computer",
// "This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words,
// and, "This book is about some systems, but definitely not about operating systems" if the title ends with the word "system" or "systems", but doesn't include the word "operating".

function logBookTheme(bookTitle) {
  bookTitle = bookTitle.toLowerCase();
  //console.log(bookTitle.startsWith('computer'));
  if (bookTitle.startsWith('computer')) {
    console.log('This book is about computers');
  } else if (
    bookTitle.includes('algorithms') &&
    bookTitle.includes('structures')
  ) {
    console.log('This book is about algorithms and data structures');
  } else if (
    bookTitle.endsWith('system') ||
    (bookTitle.endsWith('systems') && !bookTitle.includes('operating'))
  ) {
    console.log(
      'This book is about some systems, but definitely not about operating systems'
    );
  }
}

logBookTheme(booksMainArray[1].title);

//17.1 Below is the bookCategories variable that stores a string of categories. Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories.
//Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings).

// const bookCategories =
//   'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
// logBookCategories(bookCategories);
