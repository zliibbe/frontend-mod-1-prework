// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear; declares a function named buildABear that has inputs of name, age, fur, clothes, and specialPower
function buildABear(name, age, fur, clothes, specialPower) {
  //add a variable that concatenates name into the greeting
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //create a variable that is an array that includes name and age which are
  var demographics = [name, age];
  //creates a variable that is a string that concatenates specialPower, which is inputed by user in function
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //this creates an object for a bear that is built with key:value pairs describing what it is
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
//this returns the prototype bear to the console for review
  return builtBear
}
//this uses the function buildABear to allow for input into making a Bear. These make object instances of buildABear
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz is function with inputs of num1, num2, and range
function fizzBuzz(num1, num2, range) {
//this is a for loop that starts the counter at zero and iteriates sequentially by 1 until the iterations are
//at was initially specified in range
  for (var i = 0; i <= range; i++) {
    //log 'fizzbuzz' to the console if the counter (i) divided(with remainder assignment) by num 1 is strictly equitable
    // 0 (no remainder) and counter (i) divided(with remainder assignment) by num2 is stricly equal to 0 (no remainder)
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      //otherwise log 'fizz' to the console if the counter (i) is divisible by num1 with no remainder and strictly
      //equal to 0
    } else if (i % num1 === 0) {
      console.log('fizz');
      // otherwise log 'buzz' to the console if the counter (i) is divisible by num2 with no remainder and strictly
      //equal to 0
    } else if (i % num2 === 0) {
      console.log('buzz');
      //if none of the above apply, log i to the console
    } else {
      console.log(i);
    }
  }
}
//this fizzBuzz will log 100 things to the console according to the above if/else statements
fizzBuzz(3, 5, 100);
//this function will not execture because it has an error and 'buzz' in the name is not capitalized
fizzbuzz(5, 8, 400);
