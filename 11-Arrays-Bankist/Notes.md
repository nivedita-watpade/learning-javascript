==================== Array Methods ================================

1. slice(): In JavaScript, the slice() method is used to extract a portion of an array into a new array — without modifying the original array.
   Ex. let arr = ['a', 'b', 'c', 'd', 'e'];
   arr.slice(2); //['c', 'd', 'e']
   arr.slice(2, 4); // ['c', 'd']
   arr.slice(-2); // ['d', 'e']
   arr.slice(-1); // ['e']
   arr.slice(); // ['a', 'b', 'c', 'd', 'e'] --- Creates a shallow copy
2. splice() : The splice() method in JavaScript is used to add, remove, or replace elements in an array — and it modifies the original array.
   Ex. // arr.splice(-1); //  ['a', 'b', 'c', 'd']
   // arr.splice(2); //(2) ['a', 'b']
   arr.splice(1, 2); //['a', 'd', 'e']
   console.log(arr);

3. The reverse() method in JavaScript is used to reverse the order of elements in an array — and it changes (mutates) the original array.
   Ex.
   let arr2 = ['j', 'i', 'h', 'g', 'f'];
   console.log(arr2.reverse());
   console.log(arr2);

4. concat(): The concat() method in JavaScript is used to merge (combine) two or more arrays into a new array — without changing the original ones.
   Ex. let first = [1, 2, 3, 4, 5];
   let second = [6, 7, 8, 9, 10];
   const numbers = first.concat(second);
   console.log(numbers);

5. join(): The join() method in JavaScript is used to combine all elements of an array into a single string — with an optional separator between them.
   Ex. console.log(numbers.join('\*'));

6. at(): The at() method in JavaScript is used to access an element from an array by its index, and it supports negative indexing (counting from the end of the array).
   Ex.console.log(first.at(0)); //1
   console.log(first.at(-1)); //5

we can also apply at method on string
console.log('Nivi'.at(0)); //N
console.log('Nivi'.at(-1)); //i

================================ forEach ====================

The forEach() method in JavaScript is used to iterate over arrays and execute a provided function once for each array element.

-forEach() does not return a new array (unlike map()).
-It cannot be stopped or broken using break or return.

Ex.
const fruits = ["apple", "banana", "mango"];

fruits.forEach((fruit, index) => {
console.log(`${index}: ${fruit}`);
});

output:
0: apple
1: banana
2: mango

==================================== forEach on Map and Set =============================================

Map(): The callback takes three arguments: value, key, and the map itself.

Ex.
const currencies = new Map([
['USD', 'United States dollar'],
['EUR', 'Euro'],
['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
console.log(`${key}: ${value}`);
});

Set(): A Set only stores unique values — no keys.
The second argument (valueAgain) is redundant; it’s just there to match the Map API format.

Ex.
const uniqueCurrencies = new Set(['USD', 'EUR', 'GBP', 'EUR', 'USD']);

uniqueCurrencies.forEach((value, \_, set) => {
console.log(`${value}`);
});

================================== Map, Filter and Reduce ====================

1. MAP

- map() applies the function to every element
- and returns a new array of the transformed values.
- Map does NOT change the original array.
- Always returns a new array of the same length.

Original array:
[3, 1, 4, 3, 2]
Operation:
current \* 2

Result:
[6, 2, 8, 6, 4]

2. FILTER
   -filter() keeps only the elements that pass the test condition.
   -Result is a new array of the selected elements.
   -Filter returns only elements that match the condition.
   -Output array may be smaller.

Original array:
[3, 1, 4, 3, 2]
Condition:
current > 2
Result:
[3, 4, 3]

=================================== reduce () ========================

reduce() Method: The reduce() method is used to reduce an array to a single value — like a number, string, object, or another array.
It works by applying a callback function to each element in the array, while carrying an accumulator.

array.reduce((accumulator, currentValue) => {
// return updated accumulator
}, initialValue);

Ex. const balance = movements.reduce((acc, curr, i, arr) => {
return acc + curr;
}, 0);

================================== chaining methods =========================

Chaining methods in JavaScript means calling multiple methods one after another on the same value or object—in a single line.

Ex.
function getTotalDepositsInDollars(movements) {
return movements
.filter(mov => mov > 0)
.map(mov => mov \* 1.1)
.reduce((acc, curr) => {
return acc + curr;
}, 0);
}

========================== find method ====================

find(): The find() method is used to search an array and return the first element that matches a condition

Syntax:
array.find(callback)

Ex. const interestRateOneAccount = accounts.find(account => {
return account.interestRate === 1;
});
