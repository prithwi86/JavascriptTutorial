'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>          
          <div class="movements__value">${mov}</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// movements.forEach(function (mov, i, arr) {
//   console.log(mov);
//   console.log(i);
//   console.log(arr);
//   console.log('--------');
// });

//Coding Challenge # 1

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaNoCats = dogsJulia.slice(1, -2);
//   console.log(dogsJuliaNoCats);

//   const allDogs = [...dogsJuliaNoCats, ...dogsKate];

//   allDogs.forEach(function (dog, i) {
//     dog < 3
//       ? console.log(`Dog number ${i + 1} is still a puppy`)
//       : console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//   });
// };

// checkDogs(dogsJulia, dogsKate);

// const eurToUsd = 1.1;

// const movementsUSD = account1.movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// const movementsUSD = account1.movements.map(mov => mov * eurToUsd);

//console.log(movementsUSD);

// const createUserName = ownerName =>
//   ownerName
//     .toLowerCase()
//     .split(' ')
//     .map(n => n[0])
//     .join('');

// const createUserName = ownerName =>
//   ownerName
//     .toLowerCase()
//     .split(' ')
//     .reduce((acc, curr) => acc + curr[0], 4);

// const objInUse = account3;

// console.log(
//   `OwnerName: ${objInUse.owner}   UserName: ${createUserName(objInUse.owner)}`
// );

// console.log(movements.filter(mov => mov > 0));
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// const calcDisplayBalance = function (movements) {
//   const balance = movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${balance} EURO`;
// };

// calcDisplayBalance(account1.movements);

// console.log(
//   account1.movements.reduce((acc, mov) => (mov > acc ? mov : acc), movements[0])
// );

//Coding Challenge # 2

const dogAges = [5, 2, 4, 1, 15, 8, 3];
console.log(dogAges.length);

const calcAverageHumanAge = function (dogAges) {
  const dogAgesinHuman = dogAges.map(age => (age > 2 ? 16 + age * 4 : 2 * age));
  const adultDogs = dogAgesinHuman.filter(age => age >= 18);
  const avgAgeAdultDogs =
    adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;

  console.log(`Dog Ages in Human: ${dogAgesinHuman}`);
  console.log(`Adult Dogs: ${adultDogs}`);
  console.log(`Avergae Age of Adult Dogs: ${avgAgeAdultDogs}`);

  return avgAgeAdultDogs;
};

calcAverageHumanAge(dogAges);
