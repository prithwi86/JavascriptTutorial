"use strict";

const playerE0 = document.querySelector(".player--0");
const playerE1 = document.querySelector(".player--1");
const score0E = document.querySelector("#score--0");
const score1E = document.getElementById("score--1");
const current0E = document.querySelector("#current--0");
const current1E = document.querySelector("#current--1");
const diceE = document.querySelector(".dice");
const btnRollE = document.querySelector(".btn--roll");
const btnNewE = document.querySelector(".btn--new");
const btnHoldE = document.querySelector(".btn--hold");
const winningScore = 100;

let scores, currentScore, activePlayer, playing;

const init = function () {
  diceE.classList.add("hidden");
  playing = true;
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;

  for (let i = 0; i < 2; i++) {
    document.querySelector(`#score--${i}`).textContent = 0;
    document.querySelector(`#current--${i}`).textContent = 0;
  }

  playerE0.classList.remove("player--winner");
  playerE1.classList.remove("player--winner");
  playerE0.classList.add("player--active");
  playerE1.classList.remove("player--active");
};

init();

const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer === 0 ? activePlayer++ : activePlayer--;
  playerE0.classList.toggle("player--active");
  playerE1.classList.toggle("player--active");
};

btnRollE.addEventListener("click", function () {
  if (playing) {
    const diceValue = Math.trunc(Math.random() * 6) + 1;
    diceE.src = `dice-${diceValue}.png`;
    if (diceE.classList.contains("hidden")) diceE.classList.remove("hidden");

    if (diceValue != 1) {
      currentScore += diceValue;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else switchPlayer();
  }
});

btnHoldE.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= winningScore) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.replace("player--active", "player--winner");
      playing = false;
      diceE.classList.add("hidden");
    } else switchPlayer();
  }
});

btnNewE.addEventListener("click", init);
