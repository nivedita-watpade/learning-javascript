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

//getter and setter function

class PersonCl1 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methos will be added in .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.fullName}`);
  }

  get age() {
    console.log(2037 - this.birthYear);
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name !`);
  }

  static hey = function () {
    console.log(`Hey there 👋`);
  };
}

const nivedita = new PersonCl1('Nivedita Watpade', 2000);
nivedita.age;
console.log(nivedita);
PersonCl1.hey();

//Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    (this.firstName = firstName), (this.birthYear = birthYear);
  },
};

const rani = Object.create(PersonProto);
console.log(rani);

rani.init('Rani', 2000);
console.log(rani);

const Person1 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person1.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person1.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person1.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} & I am studying ${this.course}`);
};

const nivedi = new Student('Nivedita', 2000, 'Javascript');
nivedi.introduce();
nivedi.calcAge();

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log(nivedi);

// Inheritance in ES6 Classes

class StudentCl extends PersonCl1 {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this._fullName} & I am studying ${this.course}`);
  }

  calcAge() {
    console.log(`I am a ${2037 - this.birthYear} years old`);
  }
}

const student = new StudentCl('Niviiiii Watpade', 2000, 'React Js');
console.log(student);
student.introduce();
student.calcAge();
