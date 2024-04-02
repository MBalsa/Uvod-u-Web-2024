"use strict";
/*
let hasDriversLicense = false;

const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}

if (hasDriversLicense) {
  console.log("I can drive :D.");
}

// const interface = "Audio";
// const private = 534;
// const if =23;
*/

function logger() {
  console.log("My name is Balsa.");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcesor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcesor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcesor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
