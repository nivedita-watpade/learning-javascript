1. JavaScript uses IEEE-754 (Double-Precision Floating-Point)
   Definition : JavaScript stores all numbers (integers + decimals) using the IEEE-754 double-precision floating-point format, also called 64-bit floating-point.

Definition:
Radix means the base of a number system.
It tells parseInt() which number system (base) you want to convert from string → number.
Syntax:
parseInt(string, radix)
Radix can be:
2 → binary
8 → octal
10 → decimal
16 → hexadecimal etc.

-Internally integer numbers are the floatine points
console.log(23 === 23.0); // true

// Base 10 – 0 to 9. 1/10 = 0.1. 3/10 = 0.3333333
// Binary base 2 – 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); // false

// Conversion - STRING TO NUMBER
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e23', 10)); //NaN - In parseInt argument should be start with number

console.log(Number.parseInt('2.5rem')); //2
console.log(Number.parseFloat('2.5rem')); //2.5

// console.log(parseFloat(' 2.5rem ')); //2.5 (Blank space does not consider)

=======================================================================================

Number.isNaN() –
Definition:
Number.isNaN() is a JavaScript method that checks whether a value is actually the number NaN (Not-a-Number).
✔ Syntax:
Number.isNaN(value)
✔ It returns:
true → if the value is NaN (and only NaN)
false → for anything else

// Checking if value is NaN
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20X')); //true
console.log(Number.isNaN(23 / 0)); //false

=======================================================================================

Number.isFinite()
Number.isFinite() returns true only if the value is a real, finite number.
Number.isFinite() checks whether a value is:

- A number
- AND finite (not Infinity, -Infinity, or NaN)

// Checking if value is number
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20X')); //false
console.log(Number.isFinite(23 / 0)); //false

========================================================================================

Number.isInteger():
Number.isInteger() checks whether a value is an integer number (a whole number). It returns true and false.

console.log(Number.isInteger(20)); //true
console.log(Number.isInteger(20.0)); //true

Number.isInteger(10); // true
Number.isInteger(-5); // true
Number.isInteger(0); // true
Number.isInteger(10.5); // false (not an integer)
Number.isInteger('10'); // false (string)
Number.isInteger(NaN); // false
Number.isInteger(Infinity); // false

====================================================================================

Math.floor(): is a JavaScript method that rounds a number DOWN to the nearest integer.
Syntax:
Math.floor(number)
✅ Positive numbers
Math.floor(4.9); // 4
Math.floor(4.1); // 4
Math.floor(4.0); // 4

✅ Negative numbers
Math.floor(-4.1); // -5 (goes down)
Math.floor(-4.9); // -5
Math.floor(-4.0); // -4

========================================================================================

Math.ceil: rounds a number UP to the nearest integer.

Syntax:
Math.ceil(number)

✅ Positive numbers
Math.ceil(4.1); // 5
Math.ceil(4.9); // 5
Math.ceil(4.0); // 4

✅ Negative numbers
Math.ceil(-4.9); // -4 (rounds up toward 0)
Math.ceil(-4.1); // -4
Math.ceil(-4.0); // -4

=====================================================================================

Math.trunc(): removes the decimal part of a number and returns only the integer part.
-It does NOT round — just cuts off decimals.

Syntax
Math.trunc(number)

✅ Positive numbers
Math.trunc(4.9); // 4
Math.trunc(4.1); // 4

✅ Negative numbers
Math.trunc(-4.9); // -4
Math.trunc(-4.1); // -4

===========================================================================

Math.round(): rounds a number to the nearest integer.

-If decimal part is 0.5 or more → rounds UP
-If decimal part is less than 0.5 → rounds DOWN

Syntax
Math.round(number)

✅ Positive numbers
Math.round(4.1); // 4
Math.round(4.4); // 4
Math.round(4.5); // 5
Math.round(4.9); // 5

✅ Negative numbers
Math.round(-4.1); // -4
Math.round(-4.4); // -4
Math.round(-4.5); // -4 (because -4 is closer to -4.5 than -5)
Math.round(-4.6); // -5

====================================================================================

Rounding decimals(floating point number)

toFixed(): formats a number to a fixed number of decimal places.

-Rounds the number to the specified decimal places
-Converts the result into a string

Syntax:
number.toFixed(digits)
digits → number of decimal places you want
Default = 0

let num = 5.6789;
num.toFixed(0); // "6"
num.toFixed(1); // "5.7"
num.toFixed(2); // "5.68"
num.toFixed(3); // "5.679"

(50).toFixed(2); // "50.00"

===============================================================================

What is Boxing in JavaScript?

Boxing means JavaScript automatically converts a primitive value (string, number, boolean) into a wrapper object (String, Number, Boolean) so you can use methods on them. Once the operation is done it coverted back to the premitives.
Primitive values don't have methods.
It happens behind the scenes.

==================================================================================

Remainder (%) Operator in JavaScript

Definition
The remainder operator (%) in JavaScript returns the remainder left over when one number is divided by another.
It does NOT give the percentage — it gives the leftover value after division.

Even / Odd Check
Ex.
console.log(6 % 2); // 0 → even
console.log(7 % 2); // 1 → odd
