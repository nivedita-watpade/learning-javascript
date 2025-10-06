'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// Data needed for first part of the section

const info = {
  name: 'Nivi',
  age: 24,
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // using property shorthand
  info,

  //using method shorthand (just removed colon(:) and function keyword)
  orderFood(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3} !!!`
    );
  },

  orderPizza: function (mainIng, ...optionalIng) {
    console.log(mainIng);
    console.log(optionalIng);
  },

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

  //to set default value

  orderDeliveryWithDefault: function ({
    starterIndex: starterNum = 0,
    mainIndex = 0,
    time = '5:00',
    address,
  }) {
    console.log(
      `Order Delivered !! ${this.starterMenu[starterNum]} and ${this.mainMenu[mainIndex]} will be delivered to the ${address} at ${time}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: '10:00',
  address: 'Nashik, Maharashtra',
  starterIndex: 2,
  mainIndex: 1,
});

restaurant.orderDeliveryWithDefault({
  address: 'Vani, Maharashtra',
});

const [x, y, z] = restaurant.mainMenu;

console.log(x, y, z);

// If we want to skip elements:

const colors = ['Red', 'Black', 'Blue', 'Purple'];

const [a, , b] = colors;

console.log(a, b);

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

console.log(restaurant.orderFood(2, 1));

//Received to values from a function
const [starterItem, mainItem] = restaurant.orderFood(2, 1);

console.log(starterItem, mainItem);

// nested array

const nested = [2, 4, [9, 7]];
const [first, , second] = nested;

console.log(first, second);

const [nine, seven] = second;
console.log(nine, seven);

//another way

const [i, , [j, k]] = nested;

console.log(i, j, k);

//Default Values

const [p = 1, q = 1, r = 1] = [25, 29];
console.log(p, q, r);

//object destructring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//if you want a different varibale name than property name
const { name: myName, openingHours: hours, categories: tags } = restaurant;
console.log(myName, hours, tags);

//setting a default value
const { menuItem = [], starterMenu: starter = [] } = restaurant;
console.log(menuItem, starter);

//mutating variables/ switching variables
let m = 111;
let n = 999;
const obj = { m: 25, n: 29, o: 20 };
({ m, n } = obj);
console.log(m, n);

//Nested objects

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//manually
const arr = [7, 8, 9];
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);

//using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

//building new array with existing one
const newMenu = ['Dosa', 'Idli', ...restaurant.mainMenu];
console.log(newMenu);

//Copy Array / Shallow copy

const copyMainMenu = [...restaurant.mainMenu];

//merge/join two or more array

const allMenus = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(allMenus);

//Iterables: are Array, string, maps, sets NOT OBJECT
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

const newRestaurant = {
  ...restaurant,
  founder: 'Pranit',
  name: 'Nivi',
};
console.log(newRestaurant);
console.log(restaurant);

//1. Destructuring
//SPREAD because on right side of assignemnt(=)
const arr1 = [1, 2, ...[3, 4]];

//REST because on left side of assignemnt(=)
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others); //1 2 (3) [3, 4, 5]

// three dots on both side of assignment operator

const [pizza, pasta, ...otherMenu] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, pasta, otherMenu); //Pizza Pasta (5) ['Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

const { sat: weekend, ...otherDays } = restaurant.openingHours;
console.log(weekend, otherDays);

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

const x1 = [25, 29, 24, 20, 0];
add(...x1);

restaurant.orderPizza('paneer', 'onion', 'tomato', 'olives'); //paneer // (3) ['onion', 'tomato', 'olives']
restaurant.orderPizza('paneer'); //paneer // []

//Short Circuiting (&& and ||)

//use Any data type, return any datatype, short circuiting

console.log(29 || 'Nivedita'); //29
console.log(0 || 'Pranit'); //Pranit
console.log(true || ' '); // true
console.log(undefined || null); // null (If all values are falsy then it returns the last value)
console.log(0 || undefined || '' || false || 'Hello' || 25); // Hello

// const guest1 = restaurant.guestNum ? restaurant.guestNum : 10;
// console.log(guest1);

// restaurant.guestNum = 15;

const guests = restaurant.guestNum || 29;
console.log(guests);

console.log('--------------- AND ----------------');

console.log(0 && 'Nivi'); //0
console.log(25 && 'Nivi'); //Nivi
console.log(25 && undefined); //undefined
console.log(25 && 'Nivi' && null && 'pranit' && true); // null

//if first value is true then excute the next operand.

restaurant.orderPizza && restaurant.orderPizza('Paneer', 'Cheese');

console.log('--------------- Nullish Coelescing(??) ----------------');

//Nullish: null and undefined (NOT 0 and ' ')
restaurant.guestNum = 0;
const guestsCorrect = restaurant.guestNum ?? 29;
console.log(guestsCorrect);

// ========================== Logical Assignment Operators ==============================

const rest1 = {
  name: 'Nivi Rest',
  numGuests: 0,
};

const rest2 = {
  name: 'PC Rest',
  owner: 'Pranit',
};

//OR Assignment operator
// rest1.numGuests = rest1.numGuests || 25;
// rest2.numGuests = rest2.numGuests || 29;

//OR Logical Assignment Operator
// rest1.numGuests ||= 25;
// rest2.numGuests ||= 29;

rest1.numGuests ??= 25;
rest2.numGuests ??= 29;

console.log(rest1);
console.log(rest2);

console.log('--------------- Logical AND Assignment Operator ----------------');

// rest1.owner = rest1.owner && 'Test';
// rest2.owner = rest2.owner && 'Test';

rest1.owner &&= 'Test';
rest2.owner &&= 'Test';

console.log(rest1);
console.log(rest2);

//only elements
for (const item of restaurant.mainMenu) {
  console.log(item);
}

//entries() method gives elements and index
for (const [index, itemName] of restaurant.starterMenu.entries()) {
  // const [index, itemName] = item;
  // console.log(index, itemName);
  console.log(`${index + 1} : ${itemName}`);
}

//Enhanced Object Literals
const propName = 'score';
const s = 1;

const obj11 = {
  ['prop_' + s]: 'value',
  [propName]: 100,
  ['calculate' + 'Sum']() {
    return this.score + 10;
  },
};

console.log(obj11);

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

//with optional chaining
console.log(restaurant?.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours?.[day]?.open ?? 'Closed';
  console.log(`On ${day}, We open at ${open}`);
}

// const preferences = {
//   color: 'blue',
//   fontSize: 14,
//   layout: 'grid',
// };

// let userChoice = 'color';
// console.log(preferences[userChoice]); // blue

//Method
console.log(restaurant.orderFood?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderFood1?.(0, 1) ?? 'Method does not exist');

//Array
const user = [
  {
    name: 'Nivi',
    email: 'nivi@yomail.com',
  },
];

console.log(user[0]?.name ?? 'User array is empty');

//Looping Objects: Object Keys, Values, and Entries

//Property NAME

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open at ${properties.length} days:`;

for (const day of properties) {
  openStr = openStr + ` ${day}`;
}
console.log(openStr);

//Property VALUE
const value = Object.values(openingHours);
console.log(value);

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

const user1 = { name: 'Alice', age: 25 };
const key = 'age';
console.log(user1[key]);

const car = {
  'car brand': 'Toyota',
  'model-year': 2022,
};

console.log(car['model-year']);

console.log('----------------------- Sets ------------------------');

const orderSet = new Set([
  'Pizza',
  'Burger',
  'Coffee',
  'Pizza',
  'Coffee',
  'Pizza',
]);

console.log(orderSet);

console.log(orderSet.size); //3

console.log(orderSet.has('Pizza')); // true
console.log(orderSet.has('Bread')); // false

orderSet.add('Biryani');
orderSet.add('Biryani');

orderSet.delete('Burger');

console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

//console.log(new Set('Nivedita'));

const staff = ['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef', 'Waiter'];

const staffUniqueSet = new Set(staff);

const staffUniqueArray = [...staffUniqueSet];

console.log(staffUniqueArray);

// New Operations to Make Sets Useful!

console.log('New Operations to Make Sets Useful!');

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

//intersection()
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods);

//union()
const commonFoodsFusion = italianFoods.union(mexicanFoods);
console.log('Union:', commonFoods);

console.log([...new Set([...mexicanFoods, ...italianFoods])]);

//differnce

const uniqueItalainFood = italianFoods.difference(mexicanFoods);
console.log('Italian Difference:', uniqueItalainFood);

const uniqueMexicanFood = mexicanFoods.difference(italianFoods);
console.log('Mexican Difference:', uniqueMexicanFood);

//symmetricDifference()

const italainMexicanUniqueFood = italianFoods.symmetricDifference(mexicanFoods);
console.log('SymmetricDifference:', italainMexicanUniqueFood);

//isDisjointFrom
console.log(italianFoods.isDisjointFrom(mexicanFoods)); // false

console.log('--------------- Maps -----------------------');

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

const testAraay = [1, 2];
rest.set(testAraay, 'Array Testing');

const testObj = document.querySelector('h1');
// rest.set(document.querySelector('h1'), 'Heading Tag');
rest.set(testObj, 'Heading Tag');

//
console.log(rest.get('name'));
console.log(rest.get(1));
console.log(rest.get(true));
console.log(rest.get('testing').get(12345));

// To check key present in the map
console.log(rest.has('categories')); //true

//To delete element from the map
rest.delete(2);

// To get the length of map
console.log(rest.size);

// To delete all the elements of map

// rest.clear();
// console.log(rest);

console.log(rest);

console.log(rest.get(testAraay));
console.log(rest.get(testObj));
