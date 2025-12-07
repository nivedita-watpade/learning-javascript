// JavaScript Practice Questions
// 1. Why does 0.1 + 0.2 !== 0.3 in JavaScript? Explain with output.

// 2. Predict the output:
console.log(0.3 - 0.2 === 0.1);
console.log(0.3 - 0.1 === 0.2);

// Ans: false, The actual result of 0.3 - 0.2 in JavaScript is something like 0.09999999999999998 instead of exactly 0.1. Here we used the strict equality operator. That why its result is false.

// 3. What will this print and why?
console.log(23 === 23.0);
//Ans: True, In javascript integer is internally a floating number. i.e 23 is represent as 23.0. Both are same number

// 4. Output of:
console.log(parseInt('100', 2));
console.log(parseInt('12px')); //12
console.log(parseInt('0xF'));

// 5. Why does parseInt("abc123", 10) return NaN?
//Ans: for parseInt argument should be start with number. If argument is start with letters it return NaN.

// 6. Output of:
console.log(Number.parseFloat('45.67kg')); //45.67
console.log(Number.parseInt('45.67kg')); //45

// 7. Predict output:
console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN('NaN')); //false
console.log(Number.isNaN(+'abc')); //true
console.log(Number.isNaN(undefined)); //false

// 8. Output:
console.log(Number.isFinite(100 / 0)); //false
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(3.14)); //true

// 9. Which return true?
console.log(Number.isInteger(5.0)); //true
console.log(Number.isInteger(-10)); //true
console.log(Number.isInteger(3.14)); //false
console.log(Number.isInteger('10')); //fasle

// 10. Predict:
console.log(Math.floor(-8.1)); //-9
console.log(Math.ceil(-8.1)); //-8
console.log(Math.trunc(-8.1)); //-8

// 11. Output:
console.log(Math.round(-4.5)); //-4
console.log(Math.round(-4.6)); //-5
console.log(Math.round(4.49)); //4
console.log(Math.round(4.5)); //5

// 12. Output:
console.log((5.678).toFixed(1)); //5.7
console.log((5.678).toFixed(0)); // 6
console.log((5.678).toFixed(3)); //5.678

// 13. Why does toFixed() return string?

// 16. Predict:
console.log(15 % 4); // 3
console.log(20 % 3); // 2
console.log(-7 % 4); // -3

// 17. Write code to check even/odd.
console.log(6 % 2); // 0 → even
console.log(7 % 2); // 1 → odd

// 18. Valid or invalid numeric separators?
// 1_00_000 //valid
// _1000 //not valid
// 1000_ //not valid
// 10_50_25 //valid

// 19. Output:
const x = 10n;
const y = 20n;
console.log(x * y); //200n
console.log(y / x); //2n

// 20. Why error?
// console.log(10n + 5);
//Ans: We can not mix BigInt with number it causes  type error

// 21. Predict:
console.log(new Date(2025, 5, 15));
console.log(new Date('December 25 2025'));

// 22. What does new Date(0) return?
//Ans: January 1, 1970

// 23. What do get methods return?
//Ans: Get methods return and retrive the specified aregument

// const d = new Date(2027, 10, 25, 15, 23);

// 24. What does getTime() return?
//Ans: getTime() return the time in miliseocnds from the date 1st jan 1970

// 25. Write code to find days until Jan 1, 2030.
console.log();

// 26. Predict new date after:
// const d = new Date(2030, 11, 25);
// d.setFullYear(2040);
// 27. Change a date month to February using setMonth().
