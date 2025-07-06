# JavaScript Fundamentals - Questions and Exercises

## Theory Questions

### Part 1:

1. How to link a JavaScript file to a webpage?
   Ans: <script src="fileName.js"></script>

2. How does dynamic typing work in JavaScript?
   Ans: We don't have to specify the data type javaScript automatically determines it based on the value.

3. What is meant by "falsy values" in JavaScript? List all 5 falsy values.
   Ans:Falsy values converted into the boolean and return the false value.
   There is five falsy value: (0, undefine, null, NaN , '')

4. List the 7 primitive data types in JavaScript and give an example of each. (Nivedita you can exclude symbol and BigInt)
   Ans: string, number, boolean, undefined, null, symbol, BigInt
   string: let firstName = "Nivi";
   number: let age = 25;
   boolean: let isTired = true;
   undefined: let money;
   null: let lastName = null;

5. Explain the difference between `let`, `const` when declaring variables in JavaScript.
   let: let is used when we want to reassigned the value.
   const: is used to declare a value that does not change.

6. If let height = 0;, why would the condition if (height) return false even though the variable is defined?
   -Bacoz 0 is falsy value so it return n false even if variable is defined.

7. What's the difference between strict equality (`===`) and loose equality (`==`) operators? When should you use each?

Ans:
strict equality (`===`) : It checks two values are equal or not and returns a boolean value. It does not perform a type coercion. It check value and datatype

loose equality (`==`): It checks two values are equal or not and returns a boolean value. It perform a type coercion. It only checks value are equal or not.

8. Explain the difference between an expression and a statement in JavaScript.
   Ans:
   Expression: Expression is a small piece of code that produce a value
   Statement: Statement is a bigger piece of code that does not produce a value

9. What is the purpose of the typeof operator?
   Ans: typeof operator identify the datatype of data or variable

10. What are logical operators in JavaScript, and how do they behave?
    Logical Operators are used to combined and invert a boolean values
    Ans: the following are the logical operators and

- AND (`&&`)
- OR (`||`)
- NOT (`!`)

11. If you need to store a user's preferences that shouldn't change during a session, would you use `let` or `const` and why?
    Ans: Here we used const here because the value of the user preference will not change as mentioned. If we needed to change or reassign the value, we would use let instead.

### Part 2:

1. What is operator precedence and why is it important in JavaScript?
   Ans:
   Operator precedence determines which operation should be performed first. Basically, it is a set of rules that define the priority of operations.

2. Explain how the following logical operators work with examples:

   - AND (`&&`) --- It returns a true if all the values are true
   - OR (`||`) --- It returns a false if all the values are false
   - NOT (`!`) --- It inverted the value

Ans:

5 > 2 && 5 < 10 ==== True
9 > 7 || 3 > 5 === False
!7 > 10 === true

3. How does type coercion work in JavaScript? Give examples of how the `+` operator behaves differently from the `-`, `*`, and `/` operators regarding coercion.
   Type Coercion: Javascript automatically convert the one data type to another i.e type coercion

Example:

1. '29'+ '25' + 08 = '292508';
2. '29'- '25' = 4;
3. '5' \* 5 = 25;
4. '8'/'2' + 2 = 6;

4) What happens when we use template literals (``) instead of regular strings ('', "")?
   Ans:
   Template literals are used when we want to combine multiple values into a single string and it is simple way to combine multiple values than a regular strings.
   A regular string can be used when we want to display a single or minimal value.

5) What is the difference between explicit conversion and implicit coercion?
   Ans:
   implicit coercion: Javascript automatically convert the one data type to another i.e implicit coercion
   explicit conversion: It manually convert a one data type to another using Number(), String() function

6) Why does x = y = 25 - 10 - 5 result in both x and y being 10? (Nivedita, you can refer precedence table)
   -Mathematical operation have a high precedence than a assignment
   mathematical operation perform from left to right so result is 10
   and assignment operation perform from right to left so 10 value is assign to y and then y assign to x so x value is also 10
   x = y = 10;

7) What does the `**` operator do?
   Ans:
   This is the exponential operator, and it is used to calculate the square, cube, and other exponential powers of a number.

8) What's the difference between declaring a variable with no value and declaring it with the value "undefined"?
   Ans:
   If we only declares a variable with name but do not assign in value to it in that case it returns undefined. And declared with "undefined" then it returns a string.

9) Explain how you would convert a user's text input of "42" into a number, and then add 8
   const testNum = "42";
   const total = Number(testNum) + 8; //50

## Practice Exercises

### Exercise 1:

Declare variables for a student's information including:

- Student name (which won't change)
- Student ID (which won't change)
- Current grade level (which will change over time)
- Admission year (which won't change)
- Major (which might change)

Print all information to the console using appropriate variable types and naming conventions.

### Exercise 2:

1. Create two variables `triangleBase` and `triangleHeight` to store the base and height of a triangle (in cm).
2. Calculate the triangle's area using the formula: `area = (base * height) / 2`
3. Create two more variables for a rectangle's width and height.
4. Calculate the rectangle's area using: `area = width * height`
5. Create a boolean variable called `triangleLarger` containing information about whether the triangle has a larger area than the rectangle.
6. Print all results to the console.

### Exercise 3:

1. Using variables for a person's name, favorite food, and home city, create a string that says: "My name is [name] from [city], and I love eating [food]!" using:
   - Regular string concatenation
   - Template literals
2. Create a multi-line restaurant review using template literals that spans at least 3 lines and includes the restaurant name, your favorite dish, and a rating out of 5 stars.

### Exercise 4:

1. Create variables for two students' test scores (`student1Score` and `student2Score`).
2. Print a message comparing their performance:
   "[Student1] scored higher than [Student2]!" or
   "[Student2] scored higher than [Student1]!" or
   "Both students scored the same!"
3. Add a condition to check the letter grade (A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60) for each student and include this in your output.

### Exercise 5:

Predict what these expressions will evaluate to and then check your answer: (Nivedita, first predict and then check)

1. `'15' + 2`
2. `'15' - 2`
3. `10 + '5' - 3`
4. `'35' > '100'`
5. `2 + 4 + '10' - 5 + '3'`

### Exercise 6:

Write code that checks if the following variables are truthy or falsy:

```javascript
let balance = 0;
let fullName = "";
let phoneNumber = null;
let emailAddress = undefined;
let isSubscribed = false;
let membershipLevel = "free";
```

For each variable, print a message like:
"Variable [variableName] is [truthy/falsy]"

### Exercise 7:

1. Create three variables:
   - `hasCompletedCourse` (boolean)
   - `hasPassedExam` (boolean)
   - `hasPaidFees` (boolean)
2. Using these variables, write conditions to check:
   - If a student can graduate (completed course AND passed exam AND paid fees)
   - If a student needs to reapply (not completed course OR not passed exam)
   - If a student has an outstanding balance (completed course AND passed exam but NOT paid fees)
3. Print appropriate messages to the console based on these conditions.

### Exercise 8:

1. Create a variable called `weatherCondition` with values like "sunny", "rainy", "snowy", etc.
2. Use a switch statement to log appropriate activity recommendations:
   - "sunny": "Great day for a picnic!"
   - "rainy": "Perfect time to read a book indoors."
   - "cloudy": "Good day for a walk."
   - "snowy": "Let's build a snowman!"
   - "windy": "Fly a kite if you have one!"
   - Default: "Check the weather forecast for today."
3. Now rewrite this using if/else statements instead.

## Problem-Solving Challenges

### Challenge 1: Age Group Categorizer

Given an age, classify the person as a "child" (<13), "teenager" (13–19), "adult" (20–64), or "senior" (65+).

### Challenge 2: Salary Tax Calculator

Create a program to calculate the tax owed based on salary:

Create variables: salary (in ₹)

Tax brackets:
Up to ₹250,000 → 0%
₹250,001 – ₹500,000 → 5%
₹500,001 – ₹1,000,000 → 20%
Above ₹1,000,000 → 30%

Print:
"Your salary is ₹X and tax payable is ₹Y"

### Challenge 3: Product Inventory Decision

Create a program that checks product stock and reorders if necessary:

Variables:

stockLevel (number of items in stock)
minStockLevel (threshold)
isSupplierAvailable (true/false)

Logic:

If stockLevel is below minStockLevel and isSupplierAvailable is true, print "Order more stock".
If supplier is unavailable, print "Cannot reorder now".
If stock is sufficient, print "Stock is sufficient".

### Challenge 4: Mobile Data Usage Alert

Track data usage for a prepaid mobile plan.

Variables:
dataLimitGB
dataUsedGB
daysUsed
totalDaysInPlan (e.g., 30)

Calculate:

Average daily use = dataUsedGB / daysUsed
Recommended usage per day = dataLimitGB / totalDaysInPlan

If average use > recommended: Print "Warning: You are overusing data."

Else: Print "Data usage is on track."

### Challenge 4: Coffee Shop Order Calculator

Create a program that calculates the cost of a coffee shop order:

1. Create variables for:
   - Number of coffees ordered
   - Type of coffee (regular or specialty)
   - Whether customer wants a pastry
2. Calculate the total cost based on:
   - Regular coffee: $3 each
   - Specialty coffee: $4.50 each
   - Pastry: $2.75 each
3. Apply a 10% discount if more than 3 coffees are ordered
4. Print the final total

P.S - I LOVE YOU ❤❤❤💖❣😊
