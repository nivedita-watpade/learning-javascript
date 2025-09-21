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
