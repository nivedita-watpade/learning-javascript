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

======================================== The call and apply method ==============================

In JavaScript, call() and apply() are methods that allow you to invoke a function with a specific this value (context) and pass arguments to it.
They are both part of Function.prototype, meaning every function in JS can

1. call() Method
   Syntax:
   functionName.call(thisArg, arg1, arg2, ...)
   thisArg: The value to use as this inside the function.
   arg1, arg2, ...: Arguments passed individually.
   Ex. //call Method
   const book = luftansa.book;

   boko.call(euroiWng, 2529, 'Pranit');
   console.log(euroWing);

2. apply() Method
   Syntax:
   functionName.apply(thisArg, [argArray])
   thisArg: The value to use as this.
   [argArray]: Arguments passed as an array.
   Ex. //apply meyhod
   const book = luftansa.book;
   const flightData = [2908, 'Gabuli'];
   book.apply(euroWing, flightData);
   console.log(euroWing);

Difference between call() and apply() :
apply() takes arguments as an array, while call() takes them individually.

==================== bind method in javascript ============================

The bind() method in JavaScript is used to create a new function that, when called, has its this keyword set to a specific value. It also allows you to preset arguments for that function.

Syntax: function.bind(thisArg, arg1, arg2, ...)

Preset arguments: You can set default arguments. Here 29 is a default parameter.
//for preset argument
const bookeEW29 = book.bind(euroWing, 29);
bookeEW29('Niviiiiiiiiiii');

bind(): Returns new function. Does not immediately call the function

Use case of bind():
//With Event Listeners
luftansa.planes = 300;
luftansa.buyPlane = function () {
//console.log(this);
this.planes++;
//console.log(this.planes);
};

const buyBtn = document.querySelector('.buy');
buyBtn.addEventListener('click', luftansa.buyPlane.bind(luftansa));

//partial application
const addTax = (rate, value) => value + value \* rate;
console.log(addTax(0.23, 100));

//set default value to rate argument
const addGST = addTax.bind(null, 0.18);
console.log(addGST(20000));

================================ Immediately Invovked Function Expression (IIFE) ===============================

Immediately Invovked Function Expression (IIFE) : An IIFE is a function expression that is immediately executed after it is created.

Ex.
(function () {
console.log('This function will run once');
})();

(() => console.log('This function will Also run once'))();
