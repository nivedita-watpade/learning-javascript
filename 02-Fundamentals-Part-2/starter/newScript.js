// "use strict";

// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) {
//   hasDriverLicense = true;
// } // Typo! Missing 's'

// if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio"; // Error in strict mode
// const private = 534; // Error in strict mode

// // codewars.com;

// Four steps to solve problems
// 1)100% understand the problem. Ask the right question to clear the problem

// 2)Divide and Conquer: Divide big problem into smaller sub problems

// 3)Research: Do research as much you have

// 4)Write Pseudo Code: Pseudo-code is simpley informal description of actual code

const obj = {
  parentKey: {
    nestedKey: {
      items: [1, 2, 3, 4, 6, 10],
    },
  },
};
const objValue = obj.parentKey.nestedKey.items;
console.log(objValue[objValue.length - 3]);
