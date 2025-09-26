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
console.log(p, q, r); // p = 25, q = 29, r = 1

\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***

Object Destructuring:
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

In object destructring, varibale name should be same as property name of object in curly braces. Here, the sequence of object data does not matter.

==================================================================================

if you want a different varibale name than property name

const { name: myName, openingHours: hours, categories: tags } = restaurant;
console.log(myName, hours, tags);

===============================================================================

//setting a default value

To set the default value set empty array next to the varibale name,
In below example, menu property does not exist in object so it give us undefined thats why we set it to the default value and starterMenu property set to the new varibale name starter if starter is not present in object then it set to the default value empty array

This is useful when we dont have hard coded object data

const { menuItem = [], starterMenu: starter = [] } = restaurant;
console.log(menuItem, starter);

===================================================================================

//mutating variables/ switching variables
Here reassigned value with object value. We assigned object value to the variable enclosed in rounded bracket
let m = 111;
let n = 999;
const obj = { m: 25, n: 29, o: 20 };
({ m, n } = obj);
console.log(m, n);

=============================================================================

//Nested objects

const {
fri: { open, close },
} = openingHours;
console.log(open, close);

===========================================================================

Method object Destructuring

//without destrcturing
orderDelivery: function (obj) {
console.log(
`Order Delivered !! ${this.starterMenu[obj.starterIndex]} and ${
        this.mainMenu[obj.mainIndex]
      } will be delivered to the ${obj.address} at ${obj.time}`
);
},

// Destructuring object in method parameter

orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
console.log(
`Order Delivered !! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to the ${address} at ${time}`
);
},

//Destructuring object with in method
orderDelivery: function (obj) {
const { starterIndex, mainIndex, time, address } = obj;
console.log(
`Order Delivered !! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to the ${address} at ${time}`
);
},

restaurant.orderDelivery({
time: '10:00',
address: 'Nashik, Maharashtra',
starterIndex: 2,
mainIndex: 1,
});

=========================================================================

to set default value.
setting value to the variable

orderDeliveryWithDefault: function ({
starterIndex = 0,
mainIndex = 0,
time = '5:00',
address,
}) {
console.log(
`Order Delivered !! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to the ${address} at ${time}`
);
},

restaurant.orderDeliveryWithDefault({
address: 'Vani, Maharashtra',
});

**\*\***\*\***\*\***\*\***\*\***\*\***\*\***--------------------------------\***\*\*\*\*\*\*\***\*\*\*\***\*\*\*\*\*\*\***

spread operator(...): The spread operator (...) in JavaScript is used to "unpack" (spread out) elements from arrays, objects, or iterables into individual elements.

It makes copying, merging, and passing data easier.

Spread operator is on right side of assignment(=) operator
//SPREAD because on right side of assignemnt(=)
const arr1 = [1, 2, ...[3, 4]];

Two main use cases of spread operators are:
1)Building new array
2)Passing multiple values/paramaters to the function

//manually
const arr = [7, 8, 9];
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);

//using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr); // (5) [1, 2, 7, 8, 9]

//building new array with existing one
Here original array does not manipulate
const newMenu = ['Dosa', 'Idli', ...restaurant.mainMenu];
console.log(newMenu);

//Copy Array / Shallow copy

const copyMainMenu = [...restaurant.mainMenu];

//merge/join two or more array

const allMenus = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(allMenus);

//Iterables: are Array, string, maps, sets NOT OBJECT

Spread operator only used on iterables

Multiple comma seperated values are only used for building arrays passing values to the function

const str = 'Nivi';
const letters = [...str];
console.log(letters);

//using spread operator as a parameter to pass multiple values

const pastaIngredients = ['Macroni', 'Cheese', 'White Sause'];

// old way
restaurant.orderPasta(
pastaIngredients[0],
pastaIngredients[1],
pastaIngredients[2]
);
restaurant.orderPasta(...pastaIngredients);

//spread operator in object

In modern javascript(ES 2018) spread operator used in object as well.

Here we have spread restaurant object in the newRestaurant object and added a new property founder. This will create a shallow copy

const newRestaurant = { ...restaurant, founder: 'Pranit' };
console.log(newRestaurant);

\***\*\*\*\*\*\*\***\*\*\***\* Rest Pattern and Parameters \*\*\*\*\*\***\*\*\*\*\*\*\*

REST Operator: Rest operator is used to pack the values in an array.
The rest operator (...) is used to collect multiple elements into a single array/object variable.
Rest operator collects all the elements after the last varibale.

Rest operator is on left side of assignment(=) operator

Rest operator must be the last element and only one rest operator in destructuring.

//REST because on left side of assignemnt(=)
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others); //1 2 (3) [3, 4, 5]

// three dots on both side of assignment operator

const [pizza, pasta, ...otherMenu] = [
...restaurant.mainMenu,
...restaurant.starterMenu,
];

console.log(pizza, pasta, otherMenu); //Pizza Pasta (5) ['Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//2.Functions

const add = function (...numbers) {
let sum = 0;
for (let i = 0; i <= numbers.length - 1; i++) {
sum = sum + numbers[i];
}
console.log(sum);
};

add(2, 3);
add(1, 2, 3, 4, 5);
add(9, 8, 7, 6, 5, 4, 10);

In below example, array x1 is unpacked using spread operator and then this x1 is pass to the numbers. There we used rest operator and x1 array again packed into the array

const x1 = [25, 29, 24, 20, 0];
add(...x1);

orderPizza: function (mainIng, ...optionalIng) {
console.log(mainIng);
console.log(optionalIng);
},

restaurant.orderPizza('paneer', 'onion', 'tomato', 'olives'); //paneer // (3) ['onion', 'tomato', 'olives']
restaurant.orderPizza('paneer'); //paneer // []
