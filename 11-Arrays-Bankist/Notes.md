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
