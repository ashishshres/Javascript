/*
Array
Function
Object
*/

// Object
let user = {
  username: "userone",
  "full name": "user example",
  isLoggedIn: false,
};
console.log(user);
console.log(typeof user);

console.log(user.username); // userone
console.log(user["username"]); // userone
console.log(user["full name"]); // user example

user.username = "usertwo";
console.log(user.username); // usertwo
console.log(user["username"]); // usertwo

let today = new Date();
// console.log(today.getFullYear());

// Array
let fruits = ["apple", "banana", "cherry", "dragon fruit", "kiwi"];
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // cherry
console.log(fruits[3]); // dragon fruit
console.log(fruits[4]); // kiwi
