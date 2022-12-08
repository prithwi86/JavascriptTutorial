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
          <div class="movements__value">${mov}€</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
//displayMovements(account1.movements);

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance} €`;
};

// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (account) {
  const sumIn = account.movements
    .filter(mov => mov > 0)
    .reduce((accum, mov, i, arr) => accum + mov, 0);
  const sumOut = account.movements
    .filter(mov => mov < 0)
    .reduce((accum, mov, i, arr) => accum + mov, 0);
  const totalInterest = account.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * account.interestRate) / 100)
    .reduce((accum, int) => accum + int, 0);

  labelSumIn.textContent = `${sumIn}€`;
  labelSumOut.textContent = `${Math.abs(sumOut)}€`;
  labelSumInterest.textContent = `${totalInterest}€`;
};

const createUserName = accnts =>
  accnts.forEach(
    acc =>
      (acc.userName = acc.owner
        .toLowerCase()
        .split(' ')
        .reduce((acc, curr) => acc + curr[0], ''))
  );
createUserName(accounts);

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);

  //Display balance
  calcDisplayBalance(acc);

  //Display summary
  calcDisplaySummary(acc);
};

let currentAccount;

btnLogin.addEventListener('click', e => {
  //console.log('LOGIN');
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmt = Number(inputLoanAmount.value);
  inputLoanAmount.value = '';
  if (
    loanAmt > 0 &&
    currentAccount.movements.some(mov => mov >= 0.1 * loanAmt)
  ) {
    currentAccount.movements.push(loanAmt);

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  } else console.log('Failed Transfer');
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const delIndex = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    accounts.splice(delIndex, 1);
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//console.log(accounts);

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
//     .reduce((acc, curr) => acc + curr[0], '');

// const objInUse = account3;

// console.log(
//   `OwnerName: ${objInUse.owner}   UserName: ${createUserName(objInUse.owner)}`
// );

// console.log(movements.filter(mov => mov > 0));
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// console.log(
//   account1.movements.reduce((acc, mov) => (mov > acc ? mov : acc), movements[0])
// );

//Coding Challenge # 2

// const dogAges = [5, 2, 4, 1, 15, 8, 3];
// console.log(dogAges.length);

// const calcAverageHumanAge = function (dogAges) {
//   const dogAgesinHuman = dogAges.map(age => (age > 2 ? 16 + age * 4 : 2 * age));
//   const adultDogs = dogAgesinHuman.filter(age => age >= 18);
//   const avgAgeAdultDogs =
//     adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;

//   console.log(`Dog Ages in Human: ${dogAgesinHuman}`);
//   console.log(`Adult Dogs: ${adultDogs}`);
//   console.log(`Avergae Age of Adult Dogs: ${avgAgeAdultDogs}`);

//   //return avgAgeAdultDogs;
// };

// const calcAverageHumanAgeChaining = dogAges => {
//   const dogAgesinHuman = dogAges.map(age => (age > 2 ? 16 + age * 4 : 2 * age));
//   const adultDogs = dogAges
//     .map(age => (age > 2 ? 16 + age * 4 : 2 * age))
//     .filter(age => age >= 18);
//   const avgAgeAdultDogs = dogAges
//     .map(age => (age > 2 ? 16 + age * 4 : 2 * age))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

//   console.log(`Dog Ages in Human: ${dogAgesinHuman}`);
//   console.log(`Adult Dogs: ${adultDogs}`);
//   console.log(`Avergae Age of Adult Dogs: ${avgAgeAdultDogs}`);

//   //return avgAgeAdultDogs;
// };

// calcAverageHumanAge(dogAges);
// calcAverageHumanAgeChaining(dogAges);
