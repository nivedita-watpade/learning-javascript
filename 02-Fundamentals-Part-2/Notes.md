<!-- ======================== strict mode ============================================== -->

JavaScript's strict mode is an important feature that helps developers avoid accidental errors. To
activate it, you simply add
'use strict';
at the very beginning of your JavaScript file, before anyvother code (comments are allowed).

'use strict';
Strict mode creates visible errors where JavaScript would otherwise fail silently. For example:
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriverLicense = true; // Typo! Missing 's'
if (hasDriversLicense) console.log('I can drive ');

Without strict mode, this code would silently create a new global variable hasDriverLicense (with the typo) and the condition would never be true. With strict mode, JavaScript throws an error, making the bug obvious.

Strict mode also reserves certain keywords for future JavaScript features and prevents using them as variable names, like:
const interface = 'Audio'; // Error in strict mode
const private = 534; // Error in strict mode

<!-- ======================== functions ============================================== -->

Functions are fundamental building blocks in JavaScript. They are reusable pieces of code that can
be executed whenever needed.
-Function is a piece of code that we can use again and again.

Example:
function logger() {
console.log("My First function...😊");
}
// invoking / calling / running
logger();

fuction parameters/arguments: Functions can receive input data (parameters) and return output data

Example:

function displayWelcomeMessage(firstName, lastName) {
console.log(`Welcome, ${firstName} ${lastName}!`);
}
displayWelcomeMessage("Nivedita", "Watpade");

Explanation:
firstName, lastName are the parametters/arguments.

return: return keyword is used to return values from the function. If no value is returned or return keyword is not specified then function returns undefined.
Example:  
function addTwoValue(value1, value2) {
const valueTotal = value1 + value2;
return valueTotal;
}

const total = addTwoValue(29, 25);
console.log(total);

Explantion: Value in front of return keyword is return when the function is called.If there is no value in front of return then its return undefine.

<!-- ======================== function declarations VS expression ============================================== -->

Functions are values which can be stored in a variable.

There is two ways to create a function
1)Function Declaration: Function declaration can called before it define.

Example:

//function declaration

function devideNum(val1, val2) {
return val1 > 0 && val2 > 0 ? val1 / val2 : "Number should be greater than zero";
}
const devideResult = devideNum(10, 10);
console.log(devideResult);

2)Function Expression:
Create a function without function name and store it into a variable.Function expression needs to first define and only after that we can called it.
Example:

//function expression

const devideResult1 = function (val1, val2) {
return val1 > 0 && val2 > 0 ? val1 / val2 : "Number should be greater than zero";
};
console.log(devideResult, devideResult1(10, 10));

<!-- ==================================Arrow Function================================================= -->

Arrow Function:
Arrow functions were introduced in ES6 as a shorter form of function expressions, especially useful
for simple one-line functions

// Arrow function with one parameter and implicit return
const checkAdult = (age) => (age > 18 ? "Adult" : "Child");
const result1 = checkAdult(10);
console.log(result1);

For one parameter and one-line body, you can omit parentheses around parameters and curly braces
With a one-liner without curly braces, the return is implicit

// Arrow function with multiple parameters and multiple lines of code

const isEqual = (a, b) => {
const numResult = a === b ? true : false;
return numResult;
};

console.log(isEqual(29, 29));

For multiple parameters, you need parentheses: (param1, param2) => expression
For multiple lines of code, you need curly braces and an explicit return statement

<!-- =============================Functions calling other Functions===================================== -->

It's common for one function to call another function. This allows us to break down complex problems into smaller, reusable parts.

Example:
const formatItem = (name, quantity) => `${quantity} X ${name}`;

function generateOrderSummary(item1, qty1, item2, qty2) {
const formatItemVal1 = formatItem(item1, qty1);
const formatItemVal2 = formatItem(item2, qty2);
return `Your order: ${formatItemVal1} and ${formatItemVal2}`;
}

console.log(generateOrderSummary("soap", 3, "shampoo", 2));

In above example, we created two function formatItem and generateOrderSummary.
We called formatItem function into generateOrderSummary function with parameter and store them into variable and then return a message

<!-- ================================== Reviewing Functions ================================================ -->

-Parameters are like local variables that only exist inside the function
-Functions with the same parameter names don't interfere with each other
-The return statement immediately exits the function - any code after it won't run
-Functions can return different values based on conditions

https://prnt.sc/F2dVHoJj9Wk8

<!-- ============================== Arrays  ============================== -->

Array:
Arryas are data structure allow us to store multiple related values in a single variable, rather than creating separate variables for each value

Ways of creating array:

const friends = ['Anki', 'Kanchi', 'Gangi];

const years = new Array(2001, 2002, 2003)

Get value from Array: Arrays are zero based. i.e index of first value is zero
friends[0] //Anki
friends[2] // Gangi

To calculate length of array: Length does not start from 0;
friends.length; // 3

To get last element of array:
friends[friends.length - 1];

To changed the value of array:
friends[2] = 'Gayatri';

friends = ['Ankita', 'Kanchan']; //Gives error Assignment to the constant
We can not change the whole array.

Arryas can hold the different type of data:

const firstName = "Pranit"
const test = [firstName, 2025-2000, 'Arrogant' friends];

<!-- ================================== Arrays Methods ======================================= -->

//Add Element

1)push() - To add a new element to the array at the last position. It returns a lenth of the updated array.
Ex.
const friends = ['Anki', 'Kanchi', 'Gangi];
friends.push('Riddhi');

2)unshift() - It used to add new alement to the array at the first position. It also return a length of updated array
Ex.
const friends = ['Anki', 'Kanchi', 'Gangi];
friends.unshift('Riddhi');

//Remove elements

3)Pop(): It remove the last element from the array. It returns the removed element.
Ex.
const friends = ['Anki', 'Kanchi', 'Gangi];
friends.pop();

4)shift(): It remove the first element from the array. It returns the removed element.
Ex.
const friends = ['Anki', 'Kanchi', 'Gangi];
friends.shift();

indexOf() - is used to get index of a specific element of an array.
console.log(friends.indexOf('Knachi')); //1
If element is not in array then it returns a -1 index.

includes() - it returns a true if element is in array and return a false if element is not in a array. includes() perform a strict equality. It doesn't do type coercion.
console.log(friends.includes('kanchi')); //true
console.log(friends.includes('rutu')); //false




=============================== objects =======================================

objects: objects are data structure like an array. Ojects contain a key pair values
While arrays are great for ordered data, objects let us define key-value pairs:
Example:

const nivi = {
    firstName: 'Nivedita',
    lastName: 'Watpade',
    friends: ['anki', 'gangi']
};

This is called an object literal syntax - we're literally writing down the object content.

Objects allow us to:
Give each piece of data a name (key or property name)
Store unstructured and related data
Access data by its name rather than position
Unlike arrays, the order of properties in objects doesn't matter when retrieving data.
