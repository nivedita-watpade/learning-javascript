<!-- ============================================ Data Types ============================================ -->

let is used to declare the variable
let is used to create a new variable.

Datatype: datatype describes the type data.
Example: string, number, boolean, undefined etc.

Data types of JS
There is 7 datataypes:

1)Number: Numbers are always floating points. i.e let age = 24; is actually 24.0 internally
Example:
let age = 23; (Integer)
let weight = 46.5; (Decimal)

2)String : Sequence of characters in a quotes. It can be single quote or double quote.
Example:
let firstName = 'Nivedita';
let lastName = "Watpade";

3)Boolean: Logical type that can be true or false. Used for taking decision.
Example:
let isAdult = true;
let isChild = false;

4)Undefined: Value taken by a varibale that is not yet defined(empty value)
i.e we only define the variable by name without assigning any value to it.(We define the variable by name but do not assign it a value.)
Example:
let children;

5)Null: Also means 'empty value'

6)Symbol: Value that is unique and can not be changed.

7)BigInt: Larger Integers than the number type can hold.

Dynamic Typing: We dont have to manually specify types for Varaible. Javascript automatically detects type on the basis of value.

typeof operator: is used for identify the datatype of value or variable.
Example:
let isChild = false;
console.log(typeof isChild);

console.log(typeof null) --- This is a bug in JS
Object

<!-- ============================================ let const var ============================================ -->

Ways of declaring variable in JS:

1)let
2)Const
3)Var

let: when we want to reassign value in that case we use let.(In technical langauge we say mutate the value)
let age = 30;
age = 31

const: const value can not be changed.
const birthYear = 1991;
birthYear = 1992; (It gives error)
Varibale declares with const can not declare empty const variable. We have to assign a value initially.

var:
var is used in older version of js.
Ex.
var age = 30
age = 31;

<!-- ============================================ Operator ================================== -->

Operator:
Operator is used to combine the values or do operation on values.

Mathematical Operators: Addition(+), substraction(-), multiplication(\*), division(/), exponential(\*\*)

Concatination of two strings: Plus operator is used to contact two strings

Assignment Operators:
let x = 10 + 5; //15
x+= 10; // x = x + 10 = 25
x*= 4; // x = x * 4 = 100
x-= 5; // x = x - 5 = 95
x++; // x + 1 = 96
x--; // x - 1 = 95

Comparision Operators: It returns boolean value i.e true or false.
n > p //is n greater than p
p < n // is p less than n
n >=p // is n greater than and equal to p
n <=p // is n less than and equal to p

<!-- ============================================ Operator Precedence ============================ -->

Operator Precedence: Operator precedence is just a set of rules that tells JavaScript which math or logic operation to do first when there’s more than one in the same line. (Operator precedence decides the order of operation)

Link:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence (Operator Prcedence table link)

let x, y; // unndefined undefined
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y); // 10 10

Explanation: Because mathematical operator have high precedence than the assignment operator. The substraction operation will be executated first and then the assignment operation.

-Mathematical operation executed from left to right except exponential.
-Assignment operation will be executed from right to left.

Grouping: (...)

Grouping has the highest precedence of 21 among all operators.

Example;
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

const averageAge = (ageJonas + ageSarah) / 2;
console.log (ageJonas, ageSarah, averageAge);

Explantion:
Addition will be done first bcoz it is present in grouping operator

<!-- ==================================== String and Template Literals ==================================== -->

Template Literals: are used to concate multiple values into a string.

let firstName = "Nivedita";
let lastName = "Watpade";
console.log(`I'm ${firstName} ${lastName}`);

<!-- ============================================ if else ============================================ -->

if else statement are used to execute code conditionally based on the boolean

syntax:
if(condition){
//if condition is true then this block will be executed
}else{
//if condition is false then this block will be executed
}
Note:
if one true condition is executed then remaining block is not execute.

Example:
const negativeNum = -29;

if (negativeNum < 0) {
console.log(`${negativeNum} is Negative`);
} else {
console.log(`${negativeNum} is Positive`);
}

Variables declared in if or else condition are not accessible outside.
const negativeNum = 29;

if (negativeNum < 0) {
let testNum = `${negativeNum} is Negative`;
} else {
let testNum = `${negativeNum} is Positive`;
}
console.log(testNum); // error: testNum is not defined

<!-- ========================================Type conversion and coercion =================================== -->

Type conversion is manually converting from one datatype to another.
Example:
const year = '1991';
console.log(Number(year)) // 1991

const userInput = 29;
console.log(String(userInput)) // '29'

we manually converted string year into number year using Number() function.

NaN: Not a Number.

NaN occurs when we tried to convert invalid value into a number.

Example
console.log(Number('Jonus')); // NaN
console.log (typeof Number('Jonus')) // number

Type coercion: Javascript automatically convert one data type to another.
Example:
const inputYear = '1991';
console.log(inputYear + 18); // '199118'

Here, javascript automatically converted 18 into string and then it concatinated with input year.

(+) converts number into a string
Example:
'29'+'25'+2 = '29252'

(-) converts string into a number
Example:
'29'-'25'-2 = 2

(_) converts string into a number
Example:
'9'_'2'-2 = 16

(/) converts string into a number
Example:
'8'/'2'+2 = '42'

<!-- ============================= Truthy and Falsy Values ======================== -->

Truthy Values: When they are converted to boolean they are true.
Example: 'Nivedita', 29 etc
Boolean('Nivedita'); // true

Falsy values: When they are converted to boolean they are false. There are only five falsy values.

Example; (0, '', null, udefined, NaN)
Boolean(0) // False

Example:
const money = 0;
if(money){
console.log("Don't spend it all");
}else{
console.log("You should get a Job!");
}

Initailly money has value 0 i.e falsy value number. Javascript did type coercion to convert money into boolean.

<!-- ============================= Equality Operators ======================== -->

Equality Operators(== and ===)

Strict Equality Operators(===) : Checks if two values are equal or not. Its return a boolean value. It does not perform a type coercion. It checks value and data type

Example:
18 === 18 //true
'18' === 18 // false

Loose Equality Operators(==) : Checks if two values are equal or not. Its return a boolean value. It does perform a type coercion. It only checks value.

Example:
18 == 18 //true
'18' == 18 // true

else if :
Example:
const fav = 29;

if(fav === 29){
console.log(29th is a Nivedita's Birthday)
}else if(fav === 25){
console.log(25th is a Pranit's Birthday)
}else if(fav === 28){
console.log(28th is a Omkar's Birthday)
} else{
console.log(No ones Birthday !!!)
}

different operator (!==) : check if two values are not equals. It returns a boolean value.

if(fav !== 30) {
console.log(30 is a just number !!!)
}

<!-- ============================= Boolean Logic ======================== -->

Boolean operators: There are three main operator
AND(&&), OR(||), NOT(!)

AND Operator: All values must be true. It returns true.
Example:
const age = 25;
const isAdult = age >= 18; //true
const canDrink = age >= 26; // false

isAdult AND canDrink = false (isAdult is true and canDrink is false thatswhy it returns false(T F = F))

isAdult OR canDrink = true (isAdult is true and canDrink is false thatswhy it returns true(T F = T))

!isAdult = It returns false(Because isAdult initially true and NOT operator simply inverted the value)

!isAdult AND canDrink = false (!true AND false = F)

isAdult OR !canDrink = false (true OR !false = T)

<!-- ========================================Switch Statement=================================== -->

switch statement is the alternate way of multiple if else statement.
Example:
const day = "sunday";

switch (day) {
case "moday": // day === monday
console.log("Today is Monday......");
break;

    case "tuesday":
    	console.log("Today is tuesday......");
    	break;

    case "wedneday":
    case "thursday":
    	console.log("Write a code example......");
    	break;

    case "saturday":
    case "sunday":
    	console.log("Weekend......");
    	break;
    default:
    	console.log("Not A valid day");

}

<!-- ========================================Statements And Expression=================================== -->

Expression: is a piece of code that produces a value
Example:
3 + 4
1991
true && false && !false (At the end this produce a boolean value so its a expression)

Statement: is bigger piece of code that is executed and which does not produce a value itself.Its a full sentences that translate our action.
Something ends with a semicolon then its a statement.

Example:
if(23>10){
const str = '23 is a bigger number'
console.log()
}

<!-- ========================================Ternary Operator=================================== -->

Ternary Operator:
Ternary Operator is a alternate way of if else statement. It is useful for small block of code.In ternary operator else part is mandatory.
Ternary operator is a expression and it produce a value that value we can store into a variable.

Example1:
const age1 = 11;
const price = age1 < 13 || age1 > 59 ? 500 : 100;
console.log(price);

Example2:
const negativeNum = 29;
negativeNum < 0 ? console.log(`Number ${negativeNum} is Negative`) : console.log(`Number ${negativeNum} is Postive`);
