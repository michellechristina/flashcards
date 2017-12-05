// requiring our Classroom module exported from classroom.js
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

// test basic card
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
console.log("------------------------------------");
console.log("basic flashcard");
console.log("basic question: " + firstPresident.front);
console.log("basic anwser: " + firstPresident.back);
console.log("------------------------------------");

// test cloze card
console.log("cloze flashcard");
var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

console.log("cloze anwser: " + firstPresidentCloze.cloze);
console.log("partial statement: " + firstPresidentCloze.partial);
console.log("full anwser: " + firstPresidentCloze.full);
console.log("------------------------------------");

// test error
var brokenCloze = new ClozeCard("This doesn't work", "oops");