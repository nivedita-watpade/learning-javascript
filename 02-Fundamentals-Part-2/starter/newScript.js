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

const obj = {
  parentKey: {
    nestedKey: {
      items: [1, 2, 3, 4, 6, 10],
    },
  },
};
const objValue = obj.parentKey.nestedKey.items;
console.log(objValue[objValue.length - 3]);
