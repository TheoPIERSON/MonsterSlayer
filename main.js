"use strict";

//create life bar
const YourDiv = document.getElementById("you");
const MonsterDiv = document.getElementById("monster");
const ActionButtons = document.getElementById("ActionButtons");

let yourLife = 100;
let monsterAtk = 20;
let monstersLife = 100;

// Generate a random number between 2 and 10, including both 2 and 10
function generateRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let yourAtk = generateRandomIntegerInRange(3, 10);

let yourActualLife = yourLife - monsterAtk;
let monstersActualLife = monstersLife - yourAtk;

// Create Your life level element
let yourLifeBar = document.createElement("h2");
yourLifeBar.textContent = yourActualLife;
yourLifeBar.setAttribute("class", "player");
YourDiv.appendChild(yourLifeBar);

// Create monster's life level element
let monstersLifeBar = document.createElement("h2");
monstersLifeBar.textContent = monstersActualLife;
monstersLifeBar.setAttribute("class", "player");
MonsterDiv.appendChild(monstersLifeBar);

// Create buttons

let btnAtk = document.createElement("button");
btnAtk.textContent = "Attaque";
ActionButtons.appendChild(btnAtk);

let btnAtkSpe = document.createElement("button");
btnAtkSpe.textContent = "Attaque Spéciale";
ActionButtons.appendChild(btnAtkSpe);

let btnHeal = document.createElement("button");
btnHeal.textContent = "Soin";
ActionButtons.appendChild(btnHeal);

let btnGiveUp = document.createElement("button");
btnGiveUp.textContent = "Abandonner";
ActionButtons.appendChild(btnGiveUp);
