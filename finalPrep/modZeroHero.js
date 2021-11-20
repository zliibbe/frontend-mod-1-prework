// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Cornelius";
var specialAbility = "super speed"

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Well howdy " + heroName + "!";
var catchphrase = `Great Scott I'm about to ` + specialAbility + `the crap out of you!`;


// Declare two variables - power AND energy - set to integers
var power = 50;
var energy = 100;


// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500;
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Timeout", "Mega Super Duper Evil Villian", "Backslider"]
var sidekicks = ["Mario", "Luigi", "Yoshi"]

// Print the first sidekick to your console
console.log(sidekicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Global Warming");

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);

// Remove the first sidekick from the sidekicks array
sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
function assessSituation(dangerLevel, saveTheDay, badExcuse) {
    dangerLevel = 50;
    saveTheDay = "I done did it! Y'all are welcome!";
    badExcuse = "Uh...sorry. Er, um, I didn't have my coffee yet...";

    if (dangerLevel > 50) {
      console.log(badExcuse);
    } else if (dangerLevel >= 10 && dangerLevel<=50){
      console.log(saveTheDay);
    } else {
      console.log("Meh. Hard pass.");
    }
}


// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';

assessSituation (99, announcement, excuse);
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
assessSituation (21, announcement, excuse);
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
assessSituation(3, announcement, excuse);
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

//OBJECT^
var scaryMonster = {
  name: "Scott",
  smell: "phew! stinky!",
  weight: 325,
  citiesDestroyed: ["Tokyo", "Chicago", "Melbourne", "Paris"],
  luckyNumbers: [4, 7, 8, 13],
  address: myAddress = {
        number: "614",
        street: "Glen Eyrie",
        state: "Colorado",
        zip: "80904",
      }
};
/*class Monster {
  constructor(name, smell, weight, citiesDestroyed, luckyNumbers, address){
    this.name = name;
    this.smell = smell;
    this.weight = weight;
    this.citiesDestroyed = citiesDestroyed;
    this.luckyNumbers = luckyNumbers;
    this.address = address;
  };*/
//    }
//  }

//}

//var scaryMonster = new Monster("Scott", "phew! stinky!", 325,
  //    ["Tokyo", "Chicago", "Melbourne", "Paris"], [4, 7, 8, 13], "Colorado");

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50


class SuperHero {
  constructor(name, superpower, age){
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName() {
    console.log(this.name);
  }
  maximizeEnergy() {
    this.energyLevel = 1000
  }
  gainPower(pointsIncrease) {
    this.powerLevel = this.powerLevel + pointsIncrease;
  }
}

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class

var superSeptuagenarian = new SuperHero ("Grandpa", "Leathal Halotosis", 89);
console.log(superSeptuagenarian);

var youthfulYouth = new SuperHero ("Youngling", "Endless Energy", 17);
console.log(youthfulYouth);

superSeptuagenarian.sayName();
superSeptuagenarian.maximizeEnergy();
console.log(superSeptuagenarian);
superSeptuagenarian.gainPower();
console.log(superSeptuagenarian);




// Reflection
// What parts were most difficult about this exerise?
// Getting comfortable with classes and the (relatively) new syntax. I'm also a little confused by the
// .this syntax because I don't yet understand the "why". I know I will in the future and that will likely solidify
// the concept in my head.

// What parts felt most comfortable to you?
// I felt most comfortable with variable declaration and if-else statements. I think this is because I simply
// had more experience and practice with them.

// What skills do you need to continue to practice before starting Mod 1?
// I will continue to work on classes and class methods in particular. 
