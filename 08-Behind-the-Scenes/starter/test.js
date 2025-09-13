'use strict';

myFunction();

function myFunction() {
  //   console.log(this);
  const myFunctionArrow = () => {
    // console.log(this);
  };

  myFunctionArrow();
}

document.querySelector('h1').addEventListener('click', function (e) {
  console.log(e);
  console.log(this);
});
