Array Destructuring:
Array destructuring is a short and clean way to unpack values from an array into separate variables.

const numbers = [10, 20, 30];

// Traditional way
const a = numbers[0];
const b = numbers[1];
const c = numbers[2];

// Using destructuring
const [x, y, z] = numbers;

console.log(x); // 10
console.log(y); // 20
console.log(z); // 30

=====================================================================================

// If we want to skip elements:

const colors = ['Red', 'Black', 'Blue', 'Purple'];

const [a, , b] = colors;

console.log(a, b);

Add extra comma in destructuring assignment

===========================================================================================

// Swicthing varibales
const menu = ['Italian', 'SouthIndian', 'NorthIndian'];
let [mainCourse, breakfast] = menu;
console.log(mainCourse, breakfast);

//using third varibale

// const temp = breakfast;
// breakfast = mainCourse;
// mainCourse = temp;

// console.log(mainCourse, breakfast);

// without 3rd variable

[mainCourse, breakfast] = [breakfast, mainCourse];
console.log(mainCourse, breakfast);

======================================================================================================

orderFood: function (starterIndex, mainIndex) {
return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
},

console.log(restaurant.orderFood(2, 1));

//Received to values from a function
const [starterItem, mainItem] = restaurant.orderFood(2, 1);

console.log(starterItem, mainItem);

=================================================================================================

// nested array
const nested = [2, 4, [9, 7]];
const [i, , [j, k]] = nested;

console.log(i, j, k);

//another way
const nested = [2, 4, [9, 7]];
const [first, , second] = nested;

console.log(first, second);

const [nine, seven] = second;
console.log(nine, seven);

=====================================================================================
//Default Values

const [p = 1, q = 1, r = 1] = [25, 29];
console.log(p, q, r);
