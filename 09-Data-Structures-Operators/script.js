'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals: function (...playerArr) {
//     console.log('Goals were scored by ' + [...playerArr]);
//     console.log(`${playerArr.length} goals scored`);
//   },
//   avgOdd() {
//     let total = 0;
//     const oddArr = Object.values(this.odds);
//     for (const i of oddArr) total += i;
//     console.log(`Average Odd: ${total / oddArr.length}`);
//   },
// };

// //*************Challenge # 1*******************************//
// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gkTeam1, ...fieldPlayersTeam1] = players1;

// console.log(gkTeam1, fieldPlayersTeam1);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// game.printGoals(...game.scored);
// game.printGoals('Davies', 'Muller', 'Lewandowski');

// team1 > team2 && console.log('Team2 likely to win');
// team2 > team1 && console.log('Team1 likely to win');
// /*****************************************************************/

// const users = [{ name: 'Prithwi Ghosh', email: 'email.com' }];
// console.log(users[0]?.name ?? 'firstname field not found');

// /**************************Challenge # 2**********************/
// for (const [key, value] of game.scored.entries()) {
//   console.log(`Goal ${key + 1}:${value}`);
//   //console.log(item);
// }

// game.avgOdd();

// for (const [team, odd] of Object.entries(game.odds)) {
//   console.log(
//     game[team] ? `Odd of victory ${game[team]}: ${odd}` : `Odd of draw: ${odd}`
//   );
// }

// let scorers = {};

// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// console.log(scorers);
// /********************************************************************/

// const scorersSet = new Set(game.scored);
// console.log(scorersSet);

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
// }

// //const answer = Number(prompt('Please provide your answer.'));
// const answer = 2;

// console.log(question.get(answer === question.get('correct')));

// console.log(question.get('adas'));

// /**********************Coding Challenge # 3******************************/

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// const time = [...gameEvents.keys()].pop();

// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// for (const [key, value] of gameEvents.entries())
//   console.log(`[${key <= 45 ? 'FIRST' : 'SECOND'} HALF]${key}: ${value}`);

// /***********************************************************************/

// const announce =
//   'All passengers come to boarding door 23. Boarding door 23!!!!!';

// console.log(announce.replaceAll('door', 'gate'));

// /************************Challenge #4********************************/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', camelCaseConverter);

// function camelCaseConverter() {
//   const inputData = document.querySelector('textarea').value;
//   const splitData = inputData.split('\n');
//   const outData = [];
//   //console.log(inputData.split('\n'));
//   for (const [i, line] of splitData.entries()) {
//     if (line.trim().split('_').length === 2) {
//       const [firstWord, secondWord] = line.trim().toLowerCase().split('_');
//       const newWord = `${`${firstWord}${secondWord.replace(
//         secondWord[0],
//         secondWord[0].toUpperCase()
//       )}`.padEnd(20)}${'*'.repeat(i + 1)}`;

//       // const newWord =
//       //   (
//       //     firstWord +
//       //     secondWord.replace(secondWord[0], secondWord[0].toUpperCase())
//       //   ).padEnd(20, ' ') + '*'.repeat(i + 1);
//       outData.push(newWord);
//     }
//   }
//   console.log(outData.join('\n'));
// }

// const inputData = document.querySelector('textarea');

const flightDetails = flights.split('+');
console.log(flightDetails);

for (const details of flightDetails) {
  const [type, from, to, time] = details.split(';');

  const getAirportCode = str => str.slice(0, 3).toUpperCase();

  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${getAirportCode(from)} to ${getAirportCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);

  console.log(output);
}
