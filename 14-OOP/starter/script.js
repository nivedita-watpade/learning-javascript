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

//Prototype

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

nivi.calcAge();
console.log(new Person());
console.log(nivi.__proto__);
console.log(Person.prototype.isPrototypeOf(nivi)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

//Add property in the prototype

Person.prototype.species = 'Devil';
console.log(Person.prototype);

console.log(nivi.species);

//hasOwnProperty
console.log(nivi.hasOwnProperty('firstName')); //true
console.log(nivi.hasOwnProperty('species')); //false

const arr = [5, 7, 2, 9, 0, 3];
console.log(arr.__proto__.__proto__);

//ES6 Classes

class PersonCl {
  constructor(firstName, birthYear) {
    (this.firstName = firstName), (this.birthYear = birthYear);
  }

  // Methos will be added in .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.firstName}`);
  }
}

const niva = new PersonCl('Nivi', 2000);
niva.calcAge();
niva.greet();

//1. Classes are not hoisted
//2. Classes are first-class citizens
//3. Classes are executed in strict mode
