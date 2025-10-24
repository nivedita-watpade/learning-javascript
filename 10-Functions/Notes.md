================= Default Parameter ===========================

In JavaScript, a default parameter allows you to assign a default value to a function parameter in case no value (or undefined) is passed when the function is called.
Syntax:
function functionName(parameter = defaultValue) {
// function body
}

1. Expression in Default Parameter : You can use expressions or even previous parameters inside a default parameter.

function calculateArea(length = 5, width = length\* 2) {
return length\* width;
}

================================ Pass By Value VS Pass By Reference ==========================

Pass by Value and Pass by Reference in JavaScript

1. Pass by Value
   When a variable is passed by value, a copy of the variable’s value is sent to the function.
   Any change made inside the function does not affect the original variable.
   Primitive data types (like number, string, boolean, null, undefined, symbol, bigint) are passed by value.
   Example:
   let x = 10;
   function changeValue(a) {
   a = 20;
   }
   changeValue(x);
   console.log(x); // Output: 10 (original value unchanged)

2. Pass by Reference
   When a variable is passed by reference, a reference (address) to the actual data is sent to the function.
   Any change made inside the function affects the original object or array.
   Non-primitive data types (like objects and arrays) are passed by reference.
   Example:
   let obj = { name: "Nivedita" };
   function changeName(person) {
   person.name = "Watpade";
   }
   changeName(obj);
   console.log(obj.name); // Output: "Watpade" (original object modified)

============================= First-Class and Higher-Order Functions =====================

FIRST-CLASS FUNCTIONS
👉 JavaScript treats functions as first-class citizens or first-class objects
👉 This means that functions are simply values
👉 Functions are just another “type” of object

-Store functions in variables or properties:
Ex. const add = (a, b) => a + b;
const counter = {
value: 23,
inc: function() { this.value++; }
};

-Pass functions as arguments to OTHER functions:
const greet = () => console.log('Hey Jonas');
btnClose.addEventListener('click', greet);

Call methods on functions:
counter.inc.bind(someOtherObject);

HIGHER-ORDER FUNCTIONS
👉 A function that receives another function as an argument, that returns a new function, or both
👉 This is only possible because of first-class functions

-Function that receives another function
const greet = () => console.log('Hey Jonas');
btnClose.addEventListener('click', greet);

addEventListener → Higher-order function
greet → Callback function

-Function that returns new function
function count() {
let counter = 0;
return function() {
counter++;
};
}

count → Higher-order function
returned function → Inner function

======================== function accepting callback functions ====================

In below example, transformer is a higher order function which is receives a upperFirstWord() oroneWord() function as a parameter. so upperFirstWord() & oneWord functions are callback function
Ex
function oneWord(str) {
return str.replaceAll(' ', '');
}

function upperFirstWord(str) {
const [firstWord, ...other] = str.split(' ');
const finalArr = [firstWord.toUpperCase(), ...other];
return finalArr.join(' ');
}

//console.log(upperFirstWord('Nivedita Watpade'));

//Higher Order Function
function transformer(str, fn) {
return fn(str);
}

// upperFirstWord & oneWord are the callback functions
console.log(transformer('My name is Nivi', upperFirstWord));
console.log(transformer('My name is Nivi', oneWord));

Abstraction:
Abstraction in programming means showing only the essential details of an object or function while hiding the complex implementation.

============================ Function returning function ==============================

In JavaScript, a function returning another function means one function outputs (returns) another function as its result.
This concept is often used in closures, higher-order functions, and function factories.

function greet(greetings) {
return function (name) {
console.log(`${greetings} ${name}`);
};
}

const greeter = greet('Hello');
greeter('Nivedita');

//or
greet('Hello')?.('Nivi');

const greetArrow = greetings => {
return name => console.log(`${greetings} ${name}`);
};

const greetArrow1 = greetings => name => console.log(`${greetings} ${name}`);

greetArrow('Shutup')('Pranit');
greetArrow1('Shut your mouth')('PC');
