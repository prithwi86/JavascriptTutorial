'use strict';
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(44,23,71);
const avgKoalas = calcAverage(65,54,49);
checkWinner(avgDolphins,avgKoalas);

function checkWinner(avgDolphins, avgKoalas)
{
    if (avgDolphins >= avgKoalas * 2)
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    else if (avgKoalas >= avgDolphins * 2)
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    else
        console.log(`No one wins (Dolphins(${avgDolphins}) vs. Koalas(${avgKoalas}))`);
}
*/

/*
const calcTip = billValue => billValue >= 50 && billValue <= 300 ? billValue * .15 : billValue * .2;

console.log(calcTip(100));

const bills = [125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Total: ${total}`);
*/
/*
const jonas = 
{
    firstName: "Jonas",
    lastName: "Schmedtmann",
    job: "Teacher",
    birthyear: 1991,
    friends: ['Michael','Tom','Steven'],
    calcAge: function()
    {
        return this.age = 2037 - this.birthyear;
    },
    hasDriversLicense: false,
    getSummary: function() 
    {
        //this.calcAge;
        //let license;
        //this.hasDriversLicense? license = 'a': license = 'no';
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, 
        and he has ${this.hasDriversLicense? 'a': 'no'} 
        driver's license.`
    }
    
};
//jonas.calcAge();
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend
 is ${jonas.friends[0]}`);
 console.log(jonas.getSummary());
*/ 

/* const calcBMI = (weight, height) => weight / height ** 2;

const mark = 
{
    firstName: 'Mark',
    lastName: 'Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function(){ return calcBMI(this.weight,this.height)}
}

const john = 
{
    firstName: 'John',
    lastName: 'Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function(){ return calcBMI(this.weight,this.height)}
}

const objName = mark.calcBMI() > john.calcBMI() ? console.log(`${mark.firstName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName} BMI (${john.calcBMI()})!!`)
: console.log(`${john.firstName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName} BMI (${mark.calcBMI()})!!`);

//console.log(`${${objName}['firstName']}'s BMI (${objName['calcBMI']}) is higher `);
*/
/*let dice = Math.trunc(Math.random() * 6) + 1;

do
{
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6)
        console.log(`You rolled a ${dice}. Loop is about to end......`);
}
while(dice !== 6)*/

const bills = [22,295,176,440,37,105,10,1100,86,52];
const calcTip = billValue => billValue >= 50 && billValue <= 300 ? billValue * .15 : billValue * .2;

let tips = [];
let totals = [];

for (let i = 0; i < bills.length ; i++)
{
    const tempTip = calcTip(bills[i]);
    tips.push(tempTip);
    totals.push(bills[i] + tempTip);   
}
console.log(tips,totals);
const calcAverage = function (arr)
    {
        let arrSum = 0;
        for(let i = 0; i < arr.length; i++)
        {
            arrSum += arr[i];
        }
        return arrSum / arr.length;
    };

console.log(`Totals avg ${calcAverage(totals)}`);
console.log(`Totals avg ${calcAverage(tips)}`);

