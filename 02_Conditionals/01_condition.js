// Check if a number is greater than another number
let num1 = 4;
let num2 = 8;

console.log("I am upper code");

if (num1 < num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("num1 is smaller than num2");
}

console.log("I am bottom code");

// else if ladder
let num3 = 4;
let num4 = 8;
let num5 = 6;

if (num3 >= num4 && num3 >= num5) {
  console.log("num3 is greater than num4 and num5");
} else if (num4 >= num3 && num4 >= num5) {
  console.log("num4 is greater than num3 and num5");
} else {
  console.log("num5 is greater than num3 and num4");
}
