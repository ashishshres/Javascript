/*
String
Boolean
Number
Null
Undefined
Symbols
*/

// Number
let score = 100;
console.log(typeof score); // number

let anotherScore = new Number(40);
console.log(typeof anotherScore); // object

// Boolean
let isActive = true;
let isLoggedIn = new Boolean(true);

// Null and Undefined
let username;
console.log(username); // undefined
// console.log(useremail); // not defined

let useremail = null;
console.log(useremail); // null
console.log(typeof useremail); // object

let password = undefined;
console.log(password); // undefined
console.log(typeof password); // undefined

// String
let msgOne = "Hello";
let msgTwo = "Namaste";

let greetOne = msgOne + " " + "Ashish";
console.log(greetOne); // Hello Ashish

let greetTwo = `${msgTwo}, Ashish`;
console.log(greetTwo); // Namaste, Ashish

// Symbol
let sym1 = Symbol("ashish");
let sym2 = Symbol("ashish");
console.log(sym1 == sym2); // false
