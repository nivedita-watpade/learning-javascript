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
console.log(age); // ReferenceError: age is not defined

const myName = 'Nivedita';

function first() {
  const age = 24;
  if (age >= 30) {
    const decade = 3;
    var millenial = true;
  }
  function second() {
    const job = 'teacher';
    console.log(`${myName} is a ${age} old ${job}`);
  }
  second();
}

first();
