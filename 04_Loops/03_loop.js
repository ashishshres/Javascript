/*
Write a `do-while` loop that prompts a user to enter their favourite fruit until they enter "stop".
Store each fruit in an array named `fruitCollection`
*/
let fruitCollection = [];
let fruit;

do {
  fruit = prompt("Enter your favourite fruit (type `stop` to finish)");

  if (fruit !== "stop") {
    fruitCollection.push(fruit);
  }
} while (fruit !== "stop");
