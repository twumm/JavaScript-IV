/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObjectOld({ name, createdAt, dimensions }) {
  this.name = name;
  this.createdAt = createdAt;
  this.dimensions = dimensions;
}

GameObjectOld.prototype.destroy = function() {
  console.log(`${this.name} was removed from the game.`);
};

class GameObject {
  constructor(attrs) {
    this.name = attrs.name;
    this.createdAt = attrs.createdAt;
    this.dimensions = attrs.dimensions;
  }

  destroy() {
    console.log(`${this.name} was removed from the game.`);
  }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStatsOld({ healthPoints, name, createdAt, dimensions }) {
  GameObjectOld.call(this, { name, createdAt, dimensions });
  this.healthPoints = healthPoints;
}
CharacterStatsOld.prototype = Object.create(GameObjectOld.prototype);
CharacterStatsOld.prototype.takeDamage = function() {
  return `${this.name} took damage`;
};

class CharacterStats extends GameObject {
  constructor(attrs) {
    super(attrs);
    this.healthPoints = attrs.healthPoints;
  }

  takeDamage() {
    console.log(`${this.name} took damage`);
  }
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function HumanoidOld({ team, weapons, language, name, healthPoints, dimensions }) {
  CharacterStatsOld.call(this, { healthPoints, name, dimensions });
  this.team = team;
  this.weapons = weapons;
  this.language = language;
}

HumanoidOld.prototype = Object.create(CharacterStatsOld.prototype);
HumanoidOld.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
};

class Humanoid extends CharacterStats {
  constructor(attrs) {
    super(attrs)
    this.team = attrs.team;
    this.weapons = attrs.weapons;
    this.language = attrs.language;
  }

  greet() {
    console.log(`${this.name} offers a greeting in ${this.language}`);
  }
}

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

function HeroKumVillainOld({ team, weapons, language, name, healthPoints, dimensions }) {
  Humanoid.call(this, { team, weapons, language, name, healthPoints, dimensions });
}

HeroKumVillainOld.prototype.hit = function(player, hit) {
  player.healthPoints = player.healthPoints - hit;

  player.healthPoints <= 0
    ? console.log(`${player.name} is dead!`)
    : console.log(
        `${player.name} lost ${hit} HP! ${player.healthPoints} HP left!`
      );
};

class HeroKumVillain extends Humanoid {
  constructor(attrs) {
    super(attrs)
  }

  hit(player, hit) {
    player.healthPoints = player.healthPoints - hit;
  
    player.healthPoints <= 0
      ? console.log(`${player.name} is dead!`)
      : console.log(
          `${player.name} lost ${hit} HP! ${player.healthPoints} HP left!`
        );
  }
}

const sinbad = new HeroKumVillain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Sinbad",
  team: "Ship",
  weapons: ["Sword"],
  language: "Darthraki"
});

const oneEyed = new HeroKumVillain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 8
  },
  healthPoints: 10,
  name: "One Eye",
  team: "Ware",
  weapons: ["Bow", "Dagger", "Spear"],
  language: "Elvish"
});

console.log(oneEyed.hit(sinbad, 3));
console.log(sinbad.hit(oneEyed, 6));
console.log(`${oneEyed.name} gets infuriated and draws a huge one from ${sinbad.name}!`);
console.log('Boooooom!!!')
console.log(oneEyed.hit(sinbad, 3));