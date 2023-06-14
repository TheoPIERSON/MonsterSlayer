"use strict";

//create life bar
const YourDiv = document.getElementById("you");
const MonsterDiv = document.getElementById("monster");

let yourLife = 100;
let monsterAtk = 20;
let monstersLife = 100;
let yourAtk = 20;

let yourActualLife = yourLife - monsterAtk;
let monstersActualLife = monstersLife - yourAtk;

let yourLifeBar = document.createElement("h2");
yourLifeBar.textContent = yourActualLife;
yourLifeBar.setAttribute("class", "player");
YourDiv.appendChild(yourLifeBar);

let monstersLifeBar = document.createElement("h2");
monstersLifeBar.textContent = monstersActualLife;
monstersLifeBar.setAttribute("class", "player");
MonsterDiv.appendChild(monstersLifeBar);
