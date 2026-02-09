// import { addToCart, totalPrice as tp, tq } from './shoppingCart.js';

// console.log('Importing module');

// addToCart('Pizza', 4);
// console.log(tp, tq);

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('Burger', 5);
console.log(ShoppingCart.totalPrice);
console.log(ShoppingCart.tq);

import add, { cart } from './shoppingCart.js';

add('pizza', 10);
add('burger', 4);
add('bread', 9);
console.log(cart);

// const res = await fetch('https://jsonplaceholder.typicode.com/todos');
// const data = await res.json();
// console.log(data);

const getLastTodo = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  //   console.log(data);
  return { id: data.at(-1).id, title: data.at(-1).title };
};

console.log(getLastTodo());

const lastTodo = await getLastTodo();
console.log(lastTodo);
