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
