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

=========================================================================================
Numeric Separator:
A numeric separator (\_) is used to visually group digits in long numbers, without affecting the actual value.
It does NOT change the number, it’s only for readability.
Ex.
const price = 1_000_000; // 1000000
console.log(price); // 1000000

================================================================================================

BigInt:
BigInt in JavaScript is a special data type used to store very large integers that cannot be safely represented by regular Number.

Operations with BigInt
✔ Valid
const a = 20n;
const b = 30n;

console.log(a + b); // 50n
console.log(a \* b); // 600n
console.log(b / a); // 1n (decimal is removed)

- Can not mix BigInt with number
  10n + 5; // ❌ TypeError

Use explicit conversion:
10n + BigInt(5); // 15n

10n === 10; // false (different types)
10n == 10; // true (loose equality)

=============================== working with dates =============================

//create a dates
const now = new Date();
console.log(now);

console.log(new Date('Aug 29 2025 18:05:06'));
console.log(new Date('25 December 2025'));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2025, 10, 29)); //Nov 29 2025
console.log(new Date(2025, 10, 12, 45, 2, 2));
console.log(new Date(0));

// working with dates

const future = new Date(2027, 10, 25, 15, 23);
console.log(future);
console.log(future.getFullYear()); //2037(Get the year)
console.log(future.getMonth()); //10(Nov - month is zero based)
console.log(future.getDay()); // get day of the week
console.log(future.getHours()); //15 - get hours
console.log(future.getMinutes()); //23 - get minutes
console.log(future.getSeconds()); //00 - get second

console.log(future.getTime()); // get the time in miliseocnds from the date 1st jan 1970

console.log(Date.now()); //get the time in miliseocnds from the date 1st jan 1970 to till date or current time

//set the dates method - we can set all the methods of month, day, hrs etc.

console.log(future.setFullYear(2035));
console.log(future);

======================== operations on dates ==========================

Date Subtraction:
currDate - movDate automatically converts both Date objects into milliseconds since 1970 (Unix timestamp).
The subtraction gives the difference in milliseconds.
But the - operator cannot operate on objects — it only works on numbers.
So JavaScript automatically performs type coercion.

Conversion to Days:
The millisecond difference is divided by
1000 × 60 × 60 × 24 (milliseconds in one day).
Math.round() is used to convert it into a whole number of days (diffDate).

Conditional Output:
If diffDate === 0 → returns "Today"
If diffDate === 1 → returns "Yesterday"
If diffDate === 2 → returns "2 days ago"

Otherwise (3+ days) → returns localized date string (e.g., "12/1/2025")

============================= Internationalization API (Intl) - for Date =================================

Intl.DateTimeFormat — Definition

The Intl.DateTimeFormat object is part of JavaScript’s Internationalization API (Intl).
It is used to format dates and times according to different locales (languages/regions) and custom formatting options.

✔ Helps format dates based on a country’s style (India, US, UK, Japan, etc.)
✔ Allows customizing output like: weekday, month, year, hour, timeZone, etc.
✔ Automatically handles things like AM/PM, month names, calendars, and formatting rules.

Basic Syntax
new Intl.DateTimeFormat(locale, options).format(date);
locale → "en-IN", "en-US", "fr-FR", "hi-IN" etc.
options → object defining how you want the date/time formatted
date → any JavaScript Date object

Ex.
const date = new Date();
const formatted = new Intl.DateTimeFormat("en-IN", {
weekday: "long",
year: "numeric",
month: "long",
day: "2-digit"
}).format(date);

console.log(formatted);

Ex.

const options = {
hour: 'numeric',
minute: 'numeric',
day: 'numeric',
month: 'numeric',
year: 'numeric',
// weekday: 'long',
};

labelDate.textContent = new Intl.DateTimeFormat(
currentLoggedInAccount.locale,
options
).format(currDate)

============================= Internationalization API (Intl) - for Number =================================

Intl.NumberFormat: Intl.NumberFormat is a built-in JavaScript internationalization API that helps you format numbers (currency, percentages, decimals, etc.) according to a specific locale (country/language format).

It automatically applies:
Correct commas (grouping)
Decimal styles
Currency symbols (₹, $, €…)
Percent formatting
Local numbering systems

Basic Syntax
new Intl.NumberFormat(locale, options)

Ex.
const amount = 2499.5;

console.log(
new Intl.NumberFormat("en-IN", {
style: "currency",
currency: "INR"
}).format(amount)
);

//op = ₹2,499.50

=================================== setTimeout =================================

setTimeout() : is a built-in JavaScript function that executes a piece of code (a function) after a specified delay.
-It is part of the Browser Web APIs (or Node.js timers), meaning it runs asynchronously without blocking other code.

Syntax:
setTimeout(function, delay, arg1, arg2, ...)

Example:
setTimeout(
(ing1, ing2) => {
console.log(`Here is your Pizza with ${ing1} & ${ing2} 🍕`);
},
5000,
'corn',
'cheese'
);

console.log('Waiting...............');

//op = Waiting...............
Here is your Pizza with corn & cheese 🍕

KEY POINTS:

1. Executes only once: The function runs one time after the delay.

2. Asynchronous (non-blocking) : It doesn't stop your code.
   -The browser handles the timer and calls the function later using the event loop.

3. Returns a timer ID: You can use this ID to cancel the timeout.

4. Can be cancelled using clearTimeout()
   clearTimeout(timerID);

5. Minimum delay can be 0ms: Even with 0ms, it waits until the current code finishes (still async).

6. Delay is not guaranteed: If the call stack is busy, the callback is executed after the delay, not exactly at that moment.

========================== setInterval() =============================

setInterval() – is a built-in JavaScript function that repeatedly executes a function after a fixed time interval.

It keeps running until you stop it manually using clearInterval().

Syntax: setInterval(function, delay, arg1, arg2, ...)

Example:
setInterval(() => {
const now = new Date();
// console.log(
// `${now.getDate()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
// );

console.log(
new Intl.DateTimeFormat('en-IN', {
dateStyle: 'medium',
timeStyle: 'medium',
}).format(new Date())
);
}, 1000);

KEY POINTS:

1. Executes repeatedly: Runs again and again after the specified delay.

2. Asynchronous: It does not block the main thread—runs in the background through Web APIs + event loop.

3. Returns an interval ID: You use this ID to stop it.

4. Stop using clearInterval(): clearInterval(intervalID);

5. Delay not guaranteed: If the call stack is busy, execution may be slightly delayed.

6. Can pass arguments: Just like setTimeout().
