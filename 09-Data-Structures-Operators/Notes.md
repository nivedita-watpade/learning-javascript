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
