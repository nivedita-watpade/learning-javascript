'use strict';

// function myFunction() {
//   const goodName = 'Nivedita';
//   let job = 'Developer';
//   var age = 24;
// }

// console.log(goodName); //ReferenceError: goodName is not defined
// console.log(job); //ReferenceError: job is not defined
// console.log(age); //ReferenceError: age is not defined

const year = 1992;

if (year >= 1981 && year <= 1996) {
  const millenial = true;
  var food = 'Pizza';
  let age = 24;
}

// console.log(millenial); //ReferenceError: millenial is not defined
// console.log(food); // No error
//console.log(age); // ReferenceError: age is not defined

const myName = 'Nivedita';

function first() {
  const age = 24;

  if (age >= 30) {
    const decade = 3;
    var millenial = true;

    var add = function (a, b) {
      return a + b;
    };
  }
  // add(); // function add() declared with var not accessible outside the block scope
  function second() {
    const myName = 'Pranit';
    const job = 'teacher';
    console.log(`${myName} is a ${age} old ${job}`);
  }
  second();
}

first();

///////////////////////////////////////
// Scoping in Practice

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();

function add(a, b) {
  return a + b;
}

function returnAdd() {
  return add;
}

console.log(returnAdd()(5, 4));
console.log(a);
var a = 1;

// test();
// test1();
// console.log(test);
console.log(test1);
const test = function () {
  console.log('Test function called');
};

var test1 = function () {
  console.log('Var function called');
};

console.log(me);
// console.log(job); //ReferenceError: Cannot access 'job' before initialization
// console.log(birthYear); //ReferenceError: Cannot access 'birthYear' before initialization

var me = 'Nivedita';
let job = 'Coder';
const birthYear = 2001;

console.log(addDeclr(5, 4));
// console.log(addExpr(5, 4)); //ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(5, 4)); //ReferenceError: Cannot access 'addArrow' before initialization
console.log(addExprVar);
//console.log(addExprVar(5, 9)); // Uncaught TypeError: addExprVar is not a function (we called to undefined)

function addDeclr(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addExprVar = function (a, b) {
  return a + b;
};

console.log(addExprVar(5, 9));

const nivi = {
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2017 - this.year);
  },
  addArrow: () => {
    console.log(this);
    // console.log(this.year);
  },
};
nivi.calcAge();
nivi.addArrow();
nivi.addArrow();

const pranit = {
  year: 2000,
};

pranit.calcAge = nivi.calcAge;

console.log(pranit);

const f = nivi.calcAge;

// f();

const dataTest = {
  firstName: 'Nivedita',
  year: 2037,
  isWorkingHard: true,
  printSummary: function () {
    console.log(`${this.firstName} is umemployed`);
    //Gives Error:
    // const willGetJob = function () {
    //   console.log(this.isWorkingHard ? 'Will get Job' : 'will not get job');
    // };
    // willGetJob();

    //Solution 1
    const self = this;
    const willGetJob = function () {
      console.log(self.isWorkingHard ? 'Will get Job' : 'will not get job');
    };
    willGetJob();

    //Solution 2
    const willGetJob1 = () => {
      console.log(this.isWorkingHard ? 'Will get Job' : 'will not get job');
    };
    willGetJob1();
  },
};

dataTest.printSummary();

const nivedita = {
  firstName: 'Nivedita',
  lastName: 'Watpade',
  age: 23,
};

console.log(nivedita);

function changeMarriedStatus(person, status) {
  person.marriedStatus = status;
  return person;
}

changeMarriedStatus(nivedita, 'Single');

console.log(nivedita);

//Shallow Copy
const ankita = {
  firstName: 'Ankita',
  lastName: 'Khapare',
  age: 28,
  familyMember: ['Ankita', 'Tushar'],
};

const ankitaCopy = { ...ankita };

ankitaCopy.lastName = 'Patil';
ankitaCopy.familyMember.push('kittu');

//Deep Copy/Clone
const ankitaClone = structuredClone(ankita);
ankitaClone.familyMember.push('Nivi');
console.log(ankita, ankitaClone);
