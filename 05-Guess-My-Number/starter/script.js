'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
const setMessage = msg =>
  (document.querySelector('.message').textContent = msg);

//console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score != 0 && !guess) {
    setMessage('⛔ No number');
  } else if (score != 0 && guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    setMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    if (score > document.querySelector('.highscore').textContent)
      document.querySelector('.highscore').textContent = score;
  } else if (score != 0 && secretNumber != guess) {
    setMessage(secretNumber > guess ? '📉 Too low!!!' : '📈 Too high!!!!');
    score--;
    document.querySelector('.score').textContent = score;
    if (score === 0) setMessage('😭 You lost!!!');
  }

  /*else if (score != 0 && guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!!!!';
    updateScore();
  } else if (score != 0 && guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low!!!';
    updateScore();
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  setMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '20';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //console.log(secretNumber);
});
