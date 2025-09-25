'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  orderFood: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3} !!!`
    );
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
