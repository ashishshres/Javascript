/*
Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/
let countdown = [];
let i = 5;

while (i > 0) {
  countdown.push(i);
  i--;
}

console.log(countdown);
