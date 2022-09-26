'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 21.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...playerArr) {
    console.log('Goals were scored by ' + [...playerArr]);
    console.log(`${playerArr.length} goals scored`);
  },
  avgOdd() {
    let total = 0;
    const oddArr = Object.entries(this.odds);
    for (const [key, i] of oddArr) total += i;
    console.log(`Average Odd: ${total / oddArr.length}`);
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gkTeam1, ...fieldPlayersTeam1] = players1;

console.log(gkTeam1, fieldPlayersTeam1);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

game.printGoals(...game.scored);
game.printGoals('Davies', 'Muller', 'Lewandowski');

team1 > team2 && console.log('Team2 likely to win');
team2 > team1 && console.log('Team1 likely to win');

const users = [{ name: 'Prithwi Ghosh', email: 'email.com' }];
console.log(users[0]?.name ?? 'firstname field not found');

for (const [key, value] of game.scored.entries()) {
  console.log(`Goal ${key}:${value}`);
  //console.log(item);
}

game.avgOdd();

console.log(`Odd of victory ${game.team1}: ${team1}
Odd of draw:${draw}
Odd of victory ${game.team2}: ${team2}`);
