'use strict';
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = numPassengers * 1.99
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123', undefined, 800);

// const flight = 'LH1234';
// const raj = {
//   name: 'Prithwiraj Ghosh',
//   passportNum: 123456789,
// };

// const prithwi = Object.assign({}, raj);

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'MR. ' + passenger.name;

//   if (passenger.passportNum === 123456789) alert('Checked In.');
//   else alert('Wrong Passport Number.');
// };

// checkIn(flight, prithwi);
// console.log(flight);
// console.log(raj);

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

const str = 'Javascript is the best computer language';
transformer(str, upperFirstWord);
transformer(str, oneWord);
