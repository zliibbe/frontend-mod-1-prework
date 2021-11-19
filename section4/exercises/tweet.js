/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = [comments];

  }

  incrementLikes(newLikes) {
    this.numberOfLikes += newLikes;
  }

  incrementComments(newComments) {
    this.comments.push(newComments);
  }
};

var tweet1 = new Tweet("Zach", "A picture of a mountain", "1439 MST", 31, "Wow!");
var tweet2 = new Tweet("Amelie", "my squishmallow", "1159 MST", 40, "So soft!");
var tweet3 = new Tweet("Laura", "A picture Amelie and Panda", "1622 MST", 309, "She is so cute!");
var tweet4 = new Tweet("Panda", "A picture of a tasty bone", "0807 MST", 135, "Yummy!");

console.log(tweet2);

tweet2.incrementLikes(1);
tweet2.incrementComments("I love squishmallows!");
console.log(tweet2);

tweet1.incrementLikes(7);
tweet1.incrementComments("Beautiful view!");
console.log(tweet1);

tweet4.incrementLikes(5);
tweet4.incrementComments("Classic dog pic lol");
console.log(tweet4);

tweet3.incrementLikes(13);
tweet3.incrementComments("They are so cute!");
console.log(tweet3);
