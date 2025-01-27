/*
Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/
let multipliedNumbers = [];
let nums = [2, 4, 6];

for (let i = 0; i < nums.length; i++) {
  multipliedNumbers.push(nums[i] * 2);
}

console.log(multipliedNumbers);
