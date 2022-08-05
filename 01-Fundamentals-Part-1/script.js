/*const weightMark = 78;
const heightMark = 1.69;

const weightJohn = 92;
const heightJohn = 1.95

const BMIMark = weightMark / (heightMark ** 2);
const BMIJohn = weightJohn / (heightJohn ** 2);

const markHigherBMI = BMIMark > BMIJohn;

if(markHigherBMI)
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})`);
else
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})`);
*/
/*
console.log('Standard');
let avgScoreDolphins = (96 + 108 + 89) / 3;
let avgScroreKoalas = (88 + 91 + 110) / 3;

if (avgScoreDolphins === avgScroreKoalas)
    console.log(`Its a draw. Dolphin's avg score is ${avgScoreDolphins} and Koalas is ${avgScroreKoalas}.`);
else if (avgScoreDolphins > avgScroreKoalas)
    console.log(`Dolphins win as their avg score (${avgScoreDolphins}) is higher than Koalas (${avgScroreKoalas})`);
else
    console.log(`Koalas win as their avg score (${avgScroreKoalas}) is higher than Dophins (${avgScoreDolphins})`);


console.log('Bonus 1');
avgScoreDolphins = (97 + 112 + 101) / 3;
avgScroreKoalas = (109 + 95 + 123) / 3;

if (avgScoreDolphins === avgScroreKoalas && avgScoreDolphins >= 100)
    console.log(`Its a draw. Dolphin's avg score is ${avgScoreDolphins} and Koalas is ${avgScroreKoalas}.`);
else if (avgScoreDolphins > avgScroreKoalas && avgScoreDolphins >= 100)
    console.log(`Dolphins win as their avg score (${avgScoreDolphins}) is higher than Koalas (${avgScroreKoalas})`);
else if (avgScroreKoalas > avgScoreDolphins && avgScroreKoalas >= 100)
    console.log(`Koalas win as their avg score (${avgScroreKoalas}) is higher than Dophins (${avgScoreDolphins})`);
else
    console.log(`Nobody won. Dolphins score - ${avgScoreDolphins}. Koalas score - ${avgScroreKoalas}`);


console.log('Bonus 2');
avgScoreDolphins = (97 + 112 + 81) / 3;
avgScroreKoalas = (109 + 95 + 86) / 3;

if (avgScoreDolphins === avgScroreKoalas && avgScoreDolphins >= 100)
    console.log(`Its a draw. Dolphin's avg score is ${avgScoreDolphins} and Koalas is ${avgScroreKoalas}.`);
else if (avgScoreDolphins > avgScroreKoalas && avgScoreDolphins >= 100)
    console.log(`Dolphins win as their avg score (${avgScoreDolphins}) is higher than Koalas (${avgScroreKoalas})`);
else if (avgScroreKoalas > avgScoreDolphins && avgScroreKoalas >= 100)
    console.log(`Koalas win as their avg score (${avgScroreKoalas}) is higher than Dophins (${avgScoreDolphins})`);
else
    console.log(`Nobody won. Dolphins score - ${avgScoreDolphins}. Koalas score - ${avgScroreKoalas}`);
*/

const billAmount = Number(prompt("Please enter bill amount"));
const tip = (50 <= billAmount && billAmount <= 300? .15 : .20) * billAmount;

console.log(`The bill was ${billAmount}, the tip was ${tip}, and total value ${billAmount + tip}`);