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

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [firstWord, ...others] = str.split(' ');
//   return [firstWord.toUpperCase(), ...others].join(' ');
// };

// //Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// const str = 'Javascript is the best computer language';
// transformer(str, upperFirstWord);
// transformer(str, oneWord);

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// greet('Hey')('Raj');

//Manually setting this keyword
// const book = function (flightNum, name) {
//   console.log(
//     `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//   );
//   this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
// };

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
// };

// book.call(lufthansa, '239', 'Prithwiraj Ghosh');
// book.call(lufthansa, '655', 'Sunanda Ghosh');
// console.log(lufthansa.bookings);

// const euroWings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// book.call(euroWings, '342', 'Pradip Kumar Ghosh');
// book.call(euroWings, '478', 'Sreya Ghosh');

// const bookEW = book.bind(euroWings);
// bookEW(23, 'PK Ghosh');

// const bookEW23 = book.bind(euroWings, 23);
// bookEW23('Ravi Ghosh');

// console.log(euroWings);
// lufthansa.planes = 300;

// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(`${this.airline} has ${this.planes} planes`);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate, amt) => amt + amt * (rate / 100);

// console.log(addTax(6.25, 100));

// const addVAT = addTax.bind(undefined, 23);

// console.log(addVAT(100));

// const addTaxRate = rate => amt => amt + amt * (rate / 100);
// const addVAT2 = addTaxRate(23);

// console.log(addVAT2(100));

//Coding Challenge # 1
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const userAns = prompt(
//       `${this.question} \n${this.options.join('\n')}\n(Write option number)`
//     );
//     console.log(Number(userAns));
//     userAns.trim() != '' &&
//     typeof Number(userAns) === 'number' &&
//     userAns < this.options.length
//       ? this.answers[Number(userAns)]++
//       : alert('Invalid answer!!!!!');
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'string') console.log(`Poll results are ${this.answers}`);
//     else if (type === 'array') console.log(this.answers);
//   },
// };
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// //poll.registerNewAnswer();

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

//IIFE (Immediately Invoked Function Expressions)

(function () {
  console.log('This will never run again');
})();

(() => console.log('This will also never run again'))();
