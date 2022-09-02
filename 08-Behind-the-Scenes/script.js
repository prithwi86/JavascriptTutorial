'use strict';
// const firstName = 'Jonas';
// calcAge(1991);
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   return age;
// }

const calcAge = function () {
  console.log(2037 - this.year);
};

const jonas = {
  year: 991,
};

const matilda = {
  year: 1981,
};

jonas.age = calcAge;
matilda.age = calcAge;

jonas.age();
matilda.age();
