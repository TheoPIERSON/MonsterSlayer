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
AttackButton.className = "actionBtn";
ActionButtons.appendChild(AttackButton);

let specialAttackButton = document.createElement("button");
specialAttackButton.textContent = "Attaque Spéciale";
specialAttackButton.className = "actionBtn";
ActionButtons.appendChild(specialAttackButton);

let btnHeal = document.createElement("button");
btnHeal.textContent = "Soin";
btnHeal.className = "actionBtn";
ActionButtons.appendChild(btnHeal);

let btnGiveUp = document.createElement("button");
btnGiveUp.textContent = "Abandonner";
btnGiveUp.className = "actionBtn";
ActionButtons.appendChild(btnGiveUp);

// Connect buttons to life bars

AttackButton.addEventListener("click", function () {
  if (monstersLife <= 0) {
    alert("Vous avez gagné");
    resetValues();
  } else if (yourLife >= 0) {
    monstersLife = monstersLife - generateRandomIntegerInRange(3, 10);
    monstersLifeBar.textContent = monstersLife;
    console.log("Vous attaquez");
    yourLife = yourLife - generateRandomIntegerInRange(5, 10);
    yourLifeBar.textContent = yourLife;
  } else {
    alert("Vous avez perdu...");
    resetValues();
  }
});

specialAttackButton.addEventListener("click", function () {
  if (monstersLife <= 0) {
    alert("Vous avez gagné");
    resetValues();
  } else if (yourLife >= 0) {
    monstersLife = monstersLife - generateRandomIntegerInRange(10, 20);
    monstersLifeBar.textContent = monstersLife;
    console.log(monstersLife);
    yourLife = yourLife - generateRandomIntegerInRange(5, 10);
    yourLifeBar.textContent = yourLife;
  } else {
    alert("Vous avez perdu...");
    resetValues();
  }
});

btnHeal.addEventListener("click", function () {
  if (yourLife >= 100) {
    alert("Votre vie est pleine !");
  } else {
    yourLife = yourLife + 10;
    yourLifeBar.textContent = yourLife;
  }
  yourLife = yourLife - generateRandomIntegerInRange(5, 10);
  yourLifeBar.textContent = yourLife;
});

btnGiveUp.addEventListener("click", function () {
  resetValues();
});
// Generate a random number between min and max, including both min and max
function generateRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetValues() {
  yourLife = 100;
  yourLifeBar.textContent = yourLife;
  monstersLife = 100;
  monstersLifeBar.textContent = monstersLife;
}
