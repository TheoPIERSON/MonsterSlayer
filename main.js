"use strict";

//create life bar
const YourDiv = document.getElementById("you");
const MonsterDiv = document.getElementById("monster");
const ActionButtons = document.getElementById("ActionButtons");

let yourLife = 100;
let monstersLife = 100;

// Create Your life level element
let yourLifeBar = document.createElement("h2");
yourLifeBar.textContent = yourLife;
yourLifeBar.className = "player";
YourDiv.appendChild(yourLifeBar);

// Create monster's life level element
let monstersLifeBar = document.createElement("h2");
monstersLifeBar.textContent = monstersLife;
monstersLifeBar.className = "player";
MonsterDiv.appendChild(monstersLifeBar);

// Create buttons

let AttackButton = document.createElement("button");
AttackButton.textContent = "Attaque";
ActionButtons.appendChild(AttackButton);

let specialAttackButton = document.createElement("button");
specialAttackButton.textContent = "Attaque Spéciale";
ActionButtons.appendChild(specialAttackButton);

let btnHeal = document.createElement("button");
btnHeal.textContent = "Soin";
ActionButtons.appendChild(btnHeal);

let btnGiveUp = document.createElement("button");
btnGiveUp.textContent = "Abandonner";
ActionButtons.appendChild(btnGiveUp);

// Connect buttons to life bars

AttackButton.addEventListener("click", function () {
  if (monstersLife <= 0) {
    alert("Vous avez gagné");
  } else if (yourLife >= 0) {
    console.log("samarsh");
    monstersLife = monstersLife - generateRandomIntegerInRange(3, 10);
    monstersLifeBar.textContent = monstersLife;
    yourLife = yourLife - generateRandomIntegerInRange(5, 10);
    yourLifeBar.textContent = yourLife;
  } else {
    alert("Vous avez perdu...");
  }
});

specialAttackButton.addEventListener("click", function () {
  if (monstersLife <= 0) {
    alert("Vous avez gagné");
  } else if (yourLife >= 0) {
    monstersLife = monstersLife - generateRandomIntegerInRange(10, 20);
    monstersLifeBar.textContent = monstersLife;
    yourLife = yourLife - generateRandomIntegerInRange(5, 10);
    yourLifeBar.textContent = yourLife;
  } else {
    alert("Vous avez perdu...");
  }
});

btnHeal.addEventListener("click", function () {
  if (yourLife >= 100) {
    alert("Votre vie est pleine !");
  } else {
    yourLife = yourLife + 10;
    yourLifeBar.textContent = yourLife;
  }
});

btnGiveUp.addEventListener("click", function () {
  yourLife = 100;
  yourLifeBar.textContent = yourLife;
  monstersLife = 100;
  monstersLifeBar.textContent = monstersLife;
});
// Generate a random number between 2 and 10, including both 2 and 10
function generateRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
