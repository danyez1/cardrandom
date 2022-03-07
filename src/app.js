/* eslint-disable */
const suits = ["&spades;", "&hearts;", "&diams;", "&clubs;"];
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

//write your code here

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

let suitsIndex = getRandomNumber(0, suits.length - 1);
let numbersIndex = getRandomNumber(0, numbers.length - 1);

window.onload = function() {
  let cardn = document.querySelector("#card");
  cardn.innerHTML = numbersIndex;
};
