console.log('Exporting module');

const shoppingCost = 10;
export const cart = [];

export function addToCart(product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}

const totalPrice = 250;
const totalQuantity = 5;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
