/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {

}

var poodle = new Dog();
var austrailianShepherd = new Dog();
console.log(Dog.poodle);
console.log(Dog.austrailianShepherd);
//variables display on console as 'undefined' as there is nothing in the skeleton class

// Prompt 2: Snack
class Snack {

}

var chips = new Snack();
var bananas = new Snack();
console.log(Snack.chips);
console.log(Snack.bananas);

// Prompt 3: Shirt
class ShirtType {

}

var buttonDown = new ShirtType();
var sweatshirt = new ShirtType();
console.log(ShirtType.buttonDown);
console.log(ShirtType.sweatshirt);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Doggy {
  constructor() {
    this.tail = "short";
    this.color = "black & white";
    this.size = "large";
  }
};

var panda = new Doggy();

console.log(panda);

// Prompt 2: Snack
class Snacky {
  constructor() {
    this.salty = true;
    this.sweet = true;
    this.healthy = false;
  }
}

var pretzel = new Snacky();
console.log(pretzel);

// Prompt 3: Shirt
class ShirtTypes {
  constructor() {
  this.sleeveLength = "Long";
  this.collared = true;
  this.buttons = true;
  this.color = "Blue";
  }
}

var buttonDown = new ShirtTypes();
console.log(buttonDown);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Doggie {
  constructor(tail, color, size) {
    this.tail = tail;
    this.color = color;
    this.size = size;
  }
}

var panda = new Doggie ("Long", "black & white", "large");
console.log(panda);

// Prompt 2: Snack
class Snacks {
  constructor(salty, sweet, healthy) {
    this.salty = salty;
    this.sweet = sweet;
    this.healthy = false;
  }
}
var pretzel = new Snacks (true, true, false);
console.log(pretzel);

// Prompt 3: Shirt
class ShirtKinds {
  constructor(sleeveLength, collared, buttons, color) {
    this.sleeveLength = sleeveLength;
    this.collaredBoolean = collared;
    this.buttonsBoolean = buttons;
    this.color = color;
  }
}
var buttonUp = new ShirtKinds ("Long", true, true, "Blue");
console.log(buttonUp);
