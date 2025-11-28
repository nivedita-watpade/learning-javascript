// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"

2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)

3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

'use strict';

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

const huskyBreed = breeds.find(breedObj => breedObj.breed === 'Husky');
const huskyWeight = huskyBreed.averageWeight;
console.log(huskyWeight);

const dogBothActivities = breeds.find(breedObj => {
  return (
    breedObj.activities.includes('running') &&
    breedObj.activities.includes('fetch')
  );
});

console.log(dogBothActivities.breed);

const allActivities = breeds.flatMap(breed => {
  return breed.activities;
});
console.log(allActivities);

const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

const swimmingAdjacent = new Set(
  breeds
    .filter(breed => {
      return breed.activities.includes('swimming');
    })
    .flatMap(breed => breed.activities)
    .filter(activity => activity !== 'swimming')
);
console.log([...swimmingAdjacent]);
// console.log(
//   new Set(
//     activities.filter(activity => {
//       return activity !== 'swimming';
//     })
//   )
// );

const isWeightAboveTen = breeds.every(breed => {
  return breed.averageWeight >= 10;
});
console.log(isWeightAboveTen);

const isBreedActive = breeds.some(breed => {
  return breed.activities.length >= 3;
});
console.log(isBreedActive);

const highestAvgWt = breeds
  .filter(breed => {
    return breed.activities.includes('fetch');
  })
  .map(obj => obj.averageWeight);

console.log(highestAvgWt);
console.log(Math.max(...highestAvgWt));

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).

2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).


4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"


5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)

6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)

7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)


8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.

9. Group the dogs by the number of owners they have

10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// dogs[0].height = 20;
// console.log(dogs[0]);

//1.
dogs.forEach(dog => {
  dog.recFood = Math.floor(dog.weight ** 0.75 * 28);
});
console.log(dogs);

//2.
const sarahsDog = dogs.find(dog => {
  return dog.owners.includes('Sarah');
});
console.log(
  sarahsDog.curFood > sarahsDog.recFood ? 'Eating too much' : 'Eating little !'
);

//3.
const ownersTooMuch = dogs.filter(dog => {
  return dog.curFood > dog.recFood;
});
console.log(ownersTooMuch);

const ownersTooLittle = dogs.filter(dog => {
  return dog.curFood < dog.recFood;
});
console.log(ownersTooLittle);

//4.
const owners = ownersTooMuch.flatMap(dog => dog.owners);
console.log(`${owners.join(' and ')}'s dogs eat too much`);

const owners1 = ownersTooLittle.flatMap(dog => dog.owners);
console.log(`${owners1.join(' and ')}'s dogs eat too little`);

//5.
const anyDog = dogs.some(dog => {
  return dog.curFood === dog.recFood;
});
console.log(anyDog);

// HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

function isDogEatingOkay(dog) {
  return dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
}

//6.
const allDogs = dogs.every(isDogEatingOkay);
console.log(allDogs);

//7.
// const dogsEatingFoodOkay = dogs.filter(dog => {
//   return dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
// });

const dogsEatingFoodOkay = dogs.filter(isDogEatingOkay);
console.log(dogsEatingFoodOkay);

//8.
const recFoodObj = Object.groupBy(dogs, dog => {
  if (dog.curFood === dog.recFood) return 'exact';
  if (dog.curFood < dog.recFood) return 'little';
  if (dog.curFood > dog.recFood) return 'high';
});

console.log(recFoodObj);

//9. Group the dogs by the number of owners they have
const numOfOwners = Object.groupBy(dogs, dog => {
  return `Owners- ${dog.owners.length}`;
});
console.log(numOfOwners);

//10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

const sortedRecFood = dogs.toSorted((a, b) => {
  return a.recFood - b.recFood;
});

console.log(dogs);
console.log(sortedRecFood);
