const arr = [1, 2, 3, 4, 6];
const reversed = [];

// reversed.push(arr[3]);
// reversed.push(arr[2]);
// reversed.push(arr[1]);
// reversed.push(arr[0]);
// console.log(reversed);

// console.log(arr.length);

for (let i = arr.length - 1; i >= 0; i--) {
  // console.log();
  reversed.push(arr[i]);
}

// console.log(reversed);

const duplicate = [1, 2, 2, 3, 4, 4, 5];
const unique = [];
for (let i = 0; i <= duplicate.length - 1; i++) {
  const currentVal = duplicate[i];
  if (!unique.includes(currentVal)) {
    unique.push(currentVal);
  }
}
console.log(unique);

// 2. Find Maximum Number Without Using Math.max()

// Given an array [3, 7, 1, 9, 4], find the largest number without using Math.max().

const numArray = [3, 7, 1, 9, 4, 15];

function findMax(arr) {
  let max = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (max < arr[i]) {
      max = arr[i];
      // console.log(max);
    }
  }
  return max;
}

console.log(findMax(numArray));
console.log(numArray.indexOf(9));
