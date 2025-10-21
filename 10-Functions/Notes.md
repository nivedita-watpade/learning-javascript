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
