'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

console.log(new Person('Nivi', 2001));
console.log(new Person('Pranit', 2000));

// 1. New {} (empty obj) is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const nivi = new Person('Nivi', 2001);
const jay = 'abc';

console.log(nivi instanceof Person);
console.log(jay instanceof Person);
