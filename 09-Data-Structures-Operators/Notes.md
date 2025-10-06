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

\***\*\*\*\*\***---- Short Circuiting (&& and ||) -----------------\***\*\*\*\*\*\***

Short-circuiting means JavaScript stops evaluating the rest of a logical expression as soon as the result is determined.

This mainly happens with:

Logical AND (&&)
Logical OR (||)
Nullish Coalescing (??)

1. OR (||)
   Returns the first truthy value it finds.
   If the first operand is truthy, it stops and returns that value.
   Otherwise, it evaluates the next one.
   Ex.
   console.log(29 || 'Nivedita'); //29
   console.log(0 || 'Pranit'); //Pranit
   console.log(true || ' '); // true
   console.log(undefined || null); // null (If all values are falsy then it returns the last value)
   console.log(0 || undefined || '' || false || 'Hello' || 25); // Hello

// const guest1 = restaurant.guestNum ? restaurant.guestNum : 10;
// console.log(guest1);

// restaurant.guestNum = 15;
//Here we set the default value
const guests = restaurant.guestNum || 29;
console.log(guests);

2. AND (&&)
   Returns the first falsy value.
   If the first operand is falsy, it stops immediately.
   Otherwise, it returns the last truthy value.
   Ex
   console.log(0 && 'Nivi'); //0
   console.log(25 && 'Nivi'); //Nivi (If all values are truty then it returns the last value)
   console.log(25 && undefined); //undefined
   console.log(25 && 'Nivi' && null && 'pranit' && true); // null

//if first value is true then excute the next operand. Second value is not just a value it can be a function also

restaurant.orderPizza && restaurant.orderPizza('Paneer', 'Cheese');

3. Nullish Coalescing (??)
   Nullish Coalescing (??) operator is same as OR(||) operator it just consider null and undefined are the falsy values.
   Unlike ||, it does not treat 0 or "" as falsy.
   Ex.
   //Nullish: null and undefined (NOT 0 and ' ')
   restaurant.guestNum = 0 ;
   const guestsCorrect = restaurant.guestNum ?? 29;
   console.log(guestsCorrect);

**\*-----------\***\*\*\*\*\*** Logical Assignment Operators \*\*\*\*\*\*\***----------------**\*\*\*\***

const rest1 = {
name: 'Nivi Rest',
numGuests: 29,
};

const rest2 = {
name: 'PC Rest',
owner: 'Pranit',
};

//OR Assignment operator
rest1.numGuests = rest1.numGuests || 25;
rest2.numGuests = rest2.numGuests || 25;

//Logical OR Assignment Operator
It set the deafult value to the varibale.
In below example rest1.numGuests is a property already in object so its return the truthy value and stop evaluating next code. rest2.numGuests is not in object 2 thats why here rest2.numGuests is false and 25 is assigned to the varibale
rest1.numGuests ||= 25;
rest2.numGuests ||= 25;

console.log(rest1);
console.log(rest2);

// Logical Nullish Coelescing Assignment Operator

Nullish Coelescing Assignment Operator does not consider 0 and empty string are the falsy value.
rest1.numGuests has the 0 value and here its is truty value and it return immediately and other part is not evalaute.
rest2.numGuests is a falsy value thats why it return the truthy value i.e 29

rest1.numGuests ??= 25;
rest2.numGuests ??= 29;

//Logical AND Assignment Operator

Logical AND Assignment Operator assigns the truthy value to the varibale

Ex.
// rest1.owner = rest1.owner && 'Test';
// rest2.owner = rest2.owner && 'Test';

In below Example, rest1.owner is a falsy value thats why it not assign or added in the object and rest2.owner is a truty value and it assign to the varibale.
rest1.owner &&= 'Test';
rest2.owner &&= 'Test';

console.log(rest1);
console.log(rest2);

**\*\*\*\*** -------- Looping Arrays: The for-of Loop ------- **\*\***\*\***\*\***-------\*\*\*

for of : The for...of loop in JavaScript is used to iterate over the values of an iterable object such as an array, string, Map, Set, or other objects that implement the iterable protocol. It gives the actual values of the elements, not their keys or indexes.
Ex.
for (const item of restaurant.mainMenu) {
console.log(item);
}
//op Pizza
Pasta
Risotto

entries() in JavaScript
The entries() method returns an iterator object that contains key-value pairs (index and value) for each element in an array (or other iterable).
Usually used with for...of to get both index and value together.
Ex.
for (const [index, itemName] of restaurant.starterMenu.entries()) {
// const [index, itemName] = item;
console.log(index, itemName);
}
//op
0 'Focaccia'
1 'Bruschetta'
2 'Garlic Bread'
3 'Caprese Salad'

//using destructring
for (const [index, itemName] of restaurant.starterMenu.entries()) {
console.log(`${index + 1} : ${itemName}`);
}

\***\*\*\*\*\*\*\*** ------------- Enhanced Object Literals -------------------\***\*\*\*\*\***

1. Property Shorthand
   When the property name matches the variable name, you can omit the value:

// ES5
const name = 'Alice';
const age = 25;
const person = {
name: name,
age: age
};

// ES6
const person = {
name,
age
};

2. Method Shorthand
   You can define methods without the function keyword:

// ES5
const obj = {
sayHello: function() {
return 'Hello!';
}
};

// ES6
const obj = {
sayHello() {
return 'Hello!';
}
};

3. Computed Property Names
   You can use expressions as property names with square brackets:
   const propName = 'score';
   const i = 1;

const obj = {
['prop_' + i]: 'value',
[propName]: 100,
['calculate' + 'Sum']() {
return this.score + 10;
}
};

output: // obj = { prop_1: 'value', score: 100, calculateSum: [Function] }

4. Combining All Features

const field = 'email';
const name = 'John';
const age = 30;

const user = {
// Property shorthand
name,
age,

// Computed property
[field]: 'john@example.com',
[is${name}]: true,

// Method shorthand
greet() {
return Hi, I'm ${this.name};
},

getInfo() {
return ${this.name} is ${this.age} years old;
}
};

**\*\*\***-----Optional Chaining(.?) ------------------ **\*\***\*\*\***\*\***

Optional chaining (?.) in JavaScript is a safe way to access deeply nested properties of an object without having to check if each property exists.

If the value before ?. is null or undefined, the whole expression short-circuits and returns undefined instead of throwing an error.

//Without optional chaining
console.log(
restaurant &&
restaurant.openingHours &&
restaurant.openingHours.mon &&
restaurant.openingHours.mon.open
);

if (restaurant && restaurant.openingHours && restaurant.openingHours.mon) {
console.log(restaurant.openingHours.mon.open);
}

//with optional chaining(?.)
console.log(restaurant?.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
// console.log(day);
const open = restaurant.openingHours?.[day]?.open ?? 'Closed';
console.log(`On ${day}, We open at ${open}`);
}

In above example, We does not know which days exist in object thats why we looped the days array.
Day varibale is not in object so we compute the value[day].
restaurant.openingHours is exist then it reads the [day] property.And if [day] exist it read the open otherwise it reurn the undefined using optional chaining(?.)
Here we set default value 'Closed' if restaurant.openingHours?.[day]?.open result false.
But here is the one problem that open value is zero then it return closed to prevent this we used nullish coelescing(??) operator. It works exactly same as OR Assignment operator. But it deos not caonsider 0 and '' as a falsy value.

//Method
console.log(restaurant.orderFood?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderFood1?.(0, 1) ?? 'Method does not exist');

In above example, restaurant.orderFood is exist then call the method otherwise simply show a 'Method does not exist' msg.

restaurant.orderFood? if its not exist then it will give undefined.

//Array
const user = [
{
name: 'Nivi',
email: 'nivi@yomail.com',
},
];

console.log(user[0]?.name ?? 'User array is empty');

Here we check the name property is exist on first element of array. If not then simply return a msg.

**\***-----------Looping Objects: Object Keys, Values, and Entries ----------**\*\*\*\***

//Property NAME

Object.keys - Gives the array of object's key

const properties = Object.keys(openingHours);
console.log(properties); //['thu', 'fri', 'sat']

let openStr = `We are open at ${properties.length} days:`;

for (const day of properties) {
openStr = openStr + ` ${day}`;
}

console.log(openStr);

//Property VALUE
Object.values - Gives the array of object's value
const value = Object.values(openingHours);
console.log(value);

Object.entries :
In JavaScript, Object.entries() is a built-in method that returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
Ex. Object.entries(obj);

Gives the array with in array
//Entire Object

const entries = Object.entries(openingHours);
console.log(entries);

for (const property of entries) {
// console.log(property);
const [day, value] = property;
console.log(
`Property Name: ${day}, Value: Open at ${value?.open ?? 'Closed'} `
);
}

\***\*\*\*\*\*\*\***------------- Sets -------------------- **\*\***\*\***\*\***
Set: Set is data structure and its just a collection of unique values
Sets are iterable

Ex.
const orderSet = new Set([
'Pizza',
'Burger',
'Coffee',
'Pizza',
'Coffee',
'Pizza',
]);

console.log(orderSet);
Set(3) {'Pizza', 'Burger', 'Coffee'} // It removes duplicate values

// Size: Gives the count of element in the sets
console.log(orderSet.size); //3

//has(): To check element present in sets or not.
console.log(orderSet.has('Pizza')); // true
console.log(orderSet.has('Bread')); // false

//add(): method is used to add new elemt in the set
In below example only one element is added in the set bcoz set is unique
orderSet.add('Biryani');
orderSet.add('Biryani');

// delete(): to delete element from the set
orderSet.delete('Burger')

// clear(): to delete all elements of set
orderSet.clear();

// sets are iterable(Looping through the set)

for (const order of orderSet) {
console.log(order);
}
//Pizza
//Coffee
//Biryani

//UseCase 1: Removing duplicte elements of an array using set:

const staff = ['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef', 'Waiter'];
const staffUniqueSet = new Set(staff);
const staffUniqueArray = [...staffUniqueSet];
console.log(staffUniqueArray);

//intersection():
-In JavaScript’s Set data structure, the intersection() method (introduced in ES2025 proposal – "Set Methods") creates a new Set containing only the values that exist in both sets.
Ex.
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods);

//Union():
-In the Set data structure, the union() method (part of the new ES2025 "Set Methods" proposal) returns a new Set that contains all unique values from two sets (or iterables).
-This is the mathematical union: combining elements of both sets without duplicates.
Ex.
set1.union(set2)
const commonFoodsFusion = italianFoods.union(mexicanFoods);
console.log('Union:', commonFoods);

//differnce():
In the Set data structure, the difference() method (part of the new ES2025 Set methods proposal) returns a new Set containing all elements from the first set that are not in the second set (or iterable).
Ex.
set1.difference(set2);

const uniqueItalainFood = italianFoods.difference(mexicanFoods);
console.log('Italian Difference:', uniqueItalainFood);

const uniqueMexicanFood = mexicanFoods.difference(italianFoods);
console.log('Mexican Difference:', uniqueMexicanFood);

//symmetricDifference():
In the Set data structure, the symmetricDifference() method (part of the ES2025 Set methods proposal) returns a new Set containing values that are in either of the two sets, but not in both.
Ex.

const italainMexicanUniqueFood = italianFoods.symmetricDifference(mexicanFoods);
console.log('SymmetricDifference:', italainMexicanUniqueFood);

//isDisjointFrom():
The isDisjointFrom() method checks whether two sets (or a set and an iterable) have no elements in common.
It returns a boolean:
true → if the sets are disjoint (no overlap).
false → if they share at least one element.

console.log(italianFoods.isDisjointFrom(mexicanFoods)); // false

**\*\***\*\*\*\***\*\*** ---------------- Maps ----------- \***\*\*\*\*\*\*\***

-A Map is a built-in data structure in JavaScript introduced in ES6.
-It stores data in key–value pairs, similar to an object, but with some differences:
-Keys can be of any data type (object, function, primitive).
-Maintains the insertion order of keys.
-Provides built-in methods to easily get the size, iterate, and manage key-value pairs.

set() Method in Map
The set() method adds or updates an element in a Map.
-set() returns the updated map.
Syntax: map.set(key, value);

Example:
const rest = new Map();

rest.set('name', 'Test Resto');
rest.set(1, 'address 1');
rest.set(2, 'address 2');
rest
.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 12)
.set('close', 23)
.set(true, 'We are open')
.set(false, 'We are closed')
.set('testing', new Map([[12345, 'oneTowThree']]));

get(): Methods returns the value of the key present in the map
Ex.
console.log(rest.get('name'));
console.log(rest.get(1));
console.log(rest.get(true));
console.log(rest.get('testing').get(12345));

has(): check the key present in the map or not and returns the boolean value.
console.log(rest.has('categories')); //true

delete(): delete property/element from the map
rest.delete(2);
console.log(rest);

size: To get the length of map
console.log(rest.size);

clear(): To delete all the elements of the map
rest.clear();
console.log(rest);

// Set array as a key

const testAraay = [1, 2];
rest.set(testAraay, 'Array Testing');
console.log(rest.get(testAraay));

// Set object as a key
const testObj = document.querySelector('h1');
// rest.set(document.querySelector('h1'), 'Heading Tag');
rest.set(testObj, 'Heading Tag');
console.log(rest.get(testObj));
