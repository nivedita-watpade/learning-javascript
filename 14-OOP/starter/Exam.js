// SECTION B – Code Understanding & Output-Based Questions
// 11. What will be the output of the following code? Explain why.

class Message {
  getText() {
    return 'Hello';
  }
}

class AlertMessage extends Message {
  getText() {
    return super.getText() + ' World';
  }
}

const msg = new AlertMessage();
console.log(msg.getText()); //Hello World

//Ans: AlertMessage is Extends from parrent class message. i.e AlertMessage is child class of class Message so child class access all the methods of parent class becoz of inherience

//12.Predict the output and justify your answer.
function Device(type) {
  this.type = type;
}

Device.prototype.getType = function () {
  return this.type;
};

const d1 = new Device('Mobile');
const d2 = new Device('Tablet');

console.log(d1.getType === d2.getType); //true

// Ans: d1 and d2 are the instances of same constructor function. getType methods is set to the device prototype property.
// And all the instances of device has the same method. So ans is true

//13. What does the following code check, and what will be printed?
const data = {};
console.log(data instanceof Object); // true
console.log(data instanceof Array); //false

//Ans: const data = {}; its a empty object and it inherited from Object.prototype.

//14. What will be logged? Explain the behavior.
class Tracker {
  value = 0;

  update() {
    this.value++;
    return this;
  }
}

const t = new Tracker();
t.update().update();

console.log(t.value); // 2

//Ans. here we create a t object drom Tracker lass using new keyword. On object we call update method twice by using method chaining. First t.update() return a updated obj with value 1 and we again call updated method on updated object. so second time we get updated value 2

// SECTION C – Problem Solving (Coding)
// Create a class ScoreCounter with:
// A private field to store the score
// A method to increase the score
// A method to reset the score
// A getter to read the current score

class ScoreCounter {
  #score;
  constructor(score) {
    this.#score = score;
  }

  updateScore() {
    this.#score++;
  }

  resetScore() {
    this.#score = score;
  }

  get currentScore() {
    console.log(this.#score);
  }
}

const score = new ScoreCounter(70);

score.updateScore();
score.currentScore;

// Create a class Appliance with a constructor that accepts a name and an instance method operate().
// Then create a class WashingMachine that extends Appliance and overrides operate().

class Appliance {
  constructor(name) {
    this.name = name;
  }

  operate() {
    console.log(`${this.name}`);
  }
}

class WashingMachine extends Appliance {
  operate() {
    console.log(`${this.name}.... `);
  }
}

const washer = new WashingMachine('Washing Machine');
washer.operate();

// Create a constructor function Account that accepts an owner name and has a prototype method getOwner().
// Then create PremiumAccount that inherits from it and adds an additional property.

function Account(owner) {
  this.owner = owner;
}

Account.prototype.getOwner = function () {
  return this.owner;
};

function PremiumAccount(owner, property) {
  Account.call(this, owner);
  this.property = property;
}

PremiumAccount.prototype = Object.create(Account.prototype);

const newObj = new PremiumAccount('Nivi', 'House');

console.log(newObj.getOwner());
console.log(newObj.property);

// Using Object.create(), create a base object Logger with a log() method.
// Then create FileLogger that inherits from it and overrides the method

const Logger = {
  log(message) {
    console.log(message);
  },
};

const FileLogger = Object.create(Logger);

FileLogger.log = function (message) {
  console.log(message);
};

// Example usage
Logger.log('Hiiiii');
FileLogger.log('Bye!!!');

// SECTION A – Theory (Conceptual Understanding)
// 1. What is Object-Oriented Programming (OOP), and how does it help in organizing large JavaScript codebases?
//Ans.  Object-oriented programming (OOP) is a programming paradigm i.e style of code how we write code and how we organized code based on the concept of objects
