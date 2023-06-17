"use strict";

//create life bar
const YourDiv = document.getElementById("you");
const MonsterDiv = document.getElementById("monster");
const ActionButtons = document.getElementById("ActionButtons");
const DamageDiv = document.getElementById("Damages");

let yourLife = 100;
let monstersLife = 100;

// Create Your life level element
let yourLifeBar = document.createElement("h2");
yourLifeBar.textContent = yourLife;
yourLifeBar.className = "player yourLifeBar";
YourDiv.appendChild(yourLifeBar);

// Create monster's life level element
let monstersLifeBar = document.createElement("h2");
monstersLifeBar.textContent = monstersLife;
monstersLifeBar.className = "player monsterLifeBar";
MonsterDiv.appendChild(monstersLifeBar);

// Get healthbar from html
let health = document.getElementById("health");
let healthMonster = document.getElementById("healthMonster");

// Create buttons

let AttackButton = document.createElement("button");
AttackButton.textContent = "Attaque 🔪";
AttackButton.className = "actionBtn Atk";
ActionButtons.appendChild(AttackButton);

let specialAttackButton = document.createElement("button");
specialAttackButton.textContent = "Attaque Spéciale 🔫";
specialAttackButton.className = "actionBtn AtkSpe";
ActionButtons.appendChild(specialAttackButton);

let btnHeal = document.createElement("button");
btnHeal.textContent = "Soin 🌱";
btnHeal.className = "actionBtn Heal";
ActionButtons.appendChild(btnHeal);

let btnGiveUp = document.createElement("button");
btnGiveUp.textContent = "Abandonner 💩";
btnGiveUp.className = "actionBtn GiveUp";
ActionButtons.appendChild(btnGiveUp);

// Connect buttons to life bars

AttackButton.addEventListener("click", function () {
  if (monstersLife <= 0) {
    alert("Vous avez gagné");
    resetValues();
  } else if (yourLife >= 0) {
    //
    let yourRandom = generateRandomIntegerInRange(3, 10);
    monstersLife = monstersLife - yourRandom;
    monstersLifeBar.textContent = monstersLife;
    console.log(yourRandom);
    healthMonster.value -= yourRandom; //Or whatever you want to do with it.

    let damageHistory = document.createElement("p");
    damageHistory.textContent = "Vous avez attaqué de " + yourRandom;
    damageHistory.className = "damages";
    DamageDiv.appendChild(damageHistory);

    let monsterRandom = generateRandomIntegerInRange(5, 10);
    yourLife = yourLife - monsterRandom;
    yourLifeBar.textContent = yourLife;
    console.log(monsterRandom);
    health.value -= monsterRandom; //Or whatever you want to do with it.

    //create damage history
    damageHistory = document.createElement("p");
    damageHistory.textContent = "Le monstre vous enlève " + monsterRandom + " PV";
    damageHistory.className = "damages";
    DamageDiv.appendChild(damageHistory);
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
    let random = generateRandomIntegerInRange(10, 20);
    monstersLife = monstersLife - random;
    monstersLifeBar.textContent = monstersLife;
    console.log(monstersLife);
    healthMonster.value -= random; //Or whatever you want to do with it.

    //
    let damageHistory = document.createElement("p");
    damageHistory.textContent = "Vous avez attaqué de " + random;
    damageHistory.className = "damages";
    DamageDiv.appendChild(damageHistory);
    //
    let monsterRandom = generateRandomIntegerInRange(5, 10);
    yourLife = yourLife - monsterRandom;
    console.log(monsterRandom);
    yourLifeBar.textContent = yourLife;
    health.value -= monsterRandom; //Or whatever you want to do with it.

    //
    damageHistory = document.createElement("p");
    damageHistory.textContent = "Le monstre vous enlève " + monsterRandom + " PV";
    damageHistory.className = "damages";
    DamageDiv.appendChild(damageHistory);
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
    health.value += 10; //Or whatever you want to do with it.

    let monsterRandom = generateRandomIntegerInRange(5, 10);
    yourLife = yourLife - monsterRandom;
    yourLifeBar.textContent = yourLife;
    health.value -= monsterRandom; //Or whatever you want to do with it.
  }
  //
  let damageHistory = document.createElement("p");
  damageHistory.textContent = "Le monstre vous enlève " + monsterRandom + " PV";
  damageHistory.className = "damages";
  DamageDiv.appendChild(damageHistory);
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
  DamageDiv.style.display = "none";
  healthMonster.value = 100;
  health.value = 100;
}
