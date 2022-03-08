/* eslint-disable */

import "bootstrap";
import "./style.css";
const suits = ["&spades;", "&hearts;", "&diams;", "&clubs;"];
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

//write your code here

function getRandomNumber(min, max) {
  const float = Math.random() * (max - min) + min;
  return Math.floor(float);
}

let suitsIndex = getRandomNumber(0, suits.length - 1);
let numbersIndex = getRandomNumber(0, numbers.length - 1);

window.onload = function() {
  let cardrandom = document.querySelector(".suits.top");
  cardrandom.innerHTML = suits[suitsIndex];

  let numberRandom = document.querySelector(".number");
  numberRandom.innerHTML = numbers[numbersIndex];

  let suitsRandom = document.querySelector(".suits.bottom");
  suitsRandom.innerHTML = suits[suitsIndex];
};
