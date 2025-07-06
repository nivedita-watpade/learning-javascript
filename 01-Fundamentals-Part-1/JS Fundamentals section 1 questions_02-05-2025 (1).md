# JavaScript Fundamentals - Questions and Exercises

## Theory Questions

### Part 1:

1. How to link a JavaScript file to a webpage?

2. How does dynamic typing work in JavaScript?

3. What is meant by "falsy values" in JavaScript? List all 5 falsy values.

4. List the 7 primitive data types in JavaScript and give an example of each. (Nivedita you can exclude symbol and BigInt)

5. Explain the difference between `let`, `const` when declaring variables in JavaScript.

6. If let height = 0;, why would the condition if (height) return false even though the variable is defined?

7. What's the difference between strict equality (`===`) and loose equality (`==`) operators? When should you use each?

8. Explain the difference between an expression and a statement in JavaScript.

9. What is the purpose of the typeof operator?

10. What are logical operators in JavaScript, and how do they behave?

11. If you need to store a user's preferences that shouldn't change during a session, would you use `let` or `const` and why?

### Part 2:

1. What is operator precedence and why is it important in JavaScript?
2. Explain how the following logical operators work with examples:
   - AND (`&&`)
   - OR (`||`)
   - NOT (`!`)
3. How does type coercion work in JavaScript? Give examples of how the `+` operator behaves differently from the `-`, `*`, and `/` operators regarding coercion.
4. What happens when we use template literals (``) instead of regular strings ('', "")?
5. What is the difference between explicit conversion and implicit coercion?
6. Why does x = y = 25 - 10 - 5 result in both x and y being 10? (Nivedita, you can refer precedence table)
7. What does the `**` operator do?
8. What's the difference between declaring a variable with no value and declaring it with the value "undefined"?
9. Explain how you would convert a user's text input of "42" into a number, and then add 8

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

1. `'15' + 2` --- '152'
2. `'15' - 2` ---- 13
3. `10 + '5' - 3` ---- 102
4. `'35' > '100'` f
5. `2 + 4 + '10' - 5 + '3'` 6053

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

P.S - I LOVE YOU ❤❤❤💖
