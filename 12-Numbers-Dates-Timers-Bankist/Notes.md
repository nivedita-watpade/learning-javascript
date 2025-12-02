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
