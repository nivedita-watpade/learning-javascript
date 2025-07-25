// JavaScript Quiz Questions

// 1. What is JavaScript?
//    a) A styling language
//    b) A server-side database
//    c) A scripting language that runs in the browser (and also on servers)
//    d) A version of Java
//

//Ans: c) A scripting language that runs in the browser (and also on servers)

// 2. Name the 5 primitive data types in JavaScript.

//Ans: Number, String, Boolean, Undefined, Null

// 3. Dynamic typing means…
//    a) Variables must be declared with a type
//    b) You can change a variable’s type at runtime
//    c) You can only use numbers in JavaScript
//    d) The interpreter optimizes code automatically

//Ans:  b) You can change a variable’s type at runtime

// 4. Which of these are valid variable names?
//    - firstName
//    - 2ndPlayer
//    - _total
//    - user-name

//Ans: firstName, _total

// 5. What does `typeof` return? Fill in each:
//    typeof "hello"      // ? Ans: String
//    typeof 123          // ? Ans: Number
//    typeof true         // ? Ans: Boolean
//    typeof undefined    // ? Ans: undefined
//    typeof null         // ? Ans: Object

// console.log(typeof null);

// 6. Give one example of each of three different data types:
//    - A string
//    - A number
//    - A boolean

// Ans:
// string
// let firstName = "Nivi";

// number:
// let count = 29;

// boolean:
// let isCute = true;

// console.log(typeof count);

// 7. Assignment shorthand: Rewrite using += or -= :
//    let count = 10;
//    count = count + 5;

// Ans: count += 5;

//
//    let x = 20;
//    x = x - 3;

// Ans: x-= 3;

// 8. Simple comparisons: What’s the result (true or false)?
//    5 > 3    Ans: true
//    2 < 1    Ans: false
//    4 >= 4   Ans: true
//    7 <= 6   Ans: false

// console.log(7 <= 6);

// 9. String concatenation: What is the result of:
//    "Hello" + ", " + "world" + "!"

// Ans: Hello, world!

// console.log("Hello" + ", " + "world" + "!");

// 11. Dynamic typing in action:
//    let x = 42;
// Ans: number
//    x = "forty-two";
//Ans: string
//    x = false;
//Ans: boolean
// console.log(typeof x);
//    What is the type of x after each assignment?

// 12. null vs. undefined: In one sentence each, explain how null is different from undefined.

//null: null is a just an empty value

//undefined: means we declare a varibale with name but do not assign a any value to it. undefine is also a value

// 13. Build a greeting: Given:
// let firstName = "Jane";
// let lastName = "Doe";
//    Write a single console.log(...) using + that outputs: Hello, I’m Jane Doe!

// console.log("Hello," + " " + "I'm" + " " + firstName + " " + lastName + "!"); (Only did one mistake i.e didn't give spave in empty string)

// 14. Uninitialized variables: What does the console print?
// let name;
// console.log(name);
// Ans: undefined
// name = "Alice";
// console.log(name);
// Ans: Alice

// 15. Assignment vs comparison: Explain the difference between = and == in JavaScript.(Skip)

// Hands-On Exercises

// 1. Variable declarations & types:
//    Declare one variable of each primitive type (string, number, boolean, null, undefined) and log value and typeof.
// string
// let firstName = "Nivi";
// console.log(firstName, typeof firstName);

// number
// let age = 18;
// console.log(age, typeof age);

// Boolean
// let isNiviCute = true;
// console.log(isNiviCute, typeof isNiviCute);

//undefined
// let salary;
// console.log(salary, typeof salary);

//null
// let course = null;
// console.log(course, typeof course);

// 2. Simple calculator:
//    Hard-code two numbers and log their sum, difference, product, and quotient.

// let x = 29;
// let y = 25;
// let z = x + y;
// console.log(z);

// let z = x - y;
// console.log(z);

// let z = x * y;
// console.log(z);

// let z = x / y;
// console.log(z);

// 3. Build a sentence:
//    Store first name, last name, and hobby in variables, then concatenate into a sentence and log it.

// let firstName = "Nivi";
// let lastName = "Pranit";
// let hobby = "nothing";

// console.log(firstName + " " + lastName + " " + hobby);

// 4. Compound assignment practice:
//    let score = 0; //0
//    score += 10; // 0 +10 = 10
//    score *= 2;  // 10*2 = 20
//    score -= 5;  // 20-5 = 15
//    score /= 3;  // 15/3 = 5
//    console.log(score); score is 5

// 5. Variable naming rules:
//    Try declaring: _private, $dollar, camelCase, kebab-case, 123number, break; Observe which are valid.

// let camelCase = "yes";
// console.log("Valid ", camelCase);

// Valid : _private, $dollar, camelCase

// 7. Dynamic typing demo: (Repeat)
//    let val = 5;
//    console.log(typeof val, val);
//    val = "five";
//    console.log(typeof val, val);
//    val = true;
//    console.log(typeof val, val);

// 8. Comparison operators drill:
// let a = 7;
// let b = 10;
// console.log(a > b); //false
// console.log(a < b); //true
// console.log(a == b); //false
// console.log(a != b); //true

// 10. Uninitialized var check: (Repeat)
//     let name;
//     console.log(name);
//     name = "Alice";
//     console.log(name);

// 11. Boolean comparison:  (skip)
//     console.log(true == 1);
//     console.log(false == 0);

// 12. Assignment vs comparison:  (skip)
//     let x = 5;
//     console.log(x = 10);    // ?
//     console.log(x == 10);   // ?

/**** PROBLEM SOLVING */

// Grade Evaluator

// Task: Hard‑code a numeric score between 0–100.
// Compute:
// If score ≥ 90 → "A"
// if ≥ 80 → "B"
// if ≥ 70 → "C"
// if ≥ 60 → "D"
//  → "F"
// console Log: "Score: 85 — Grade B"

//let score = 75;
// let scoreA = 90;
// let ScoreB = 85;
// let scoreC = 70;
// let scoreD = 60;
// let scoreF = 35;

//console.log("Score:", score, "Grade", grade);

// Total Bill Splitter
// Task: You went to dinner with 3 friends. The bill was ₹2400.
// Goal: Calculate how much each person should pay.

// let frndsCount = 3;
// let billAmt = 2400;
// let quantry = billAmt / frndsCount;
// console.log(quantry);
