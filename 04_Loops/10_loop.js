/*
Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip "herbal tea". 
Store the other teas in an array named `preferedTeas`.
*/
let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let preferedTeas = [];

for (const tea of teaTypes) {
  if (tea === "herbal tea") {
    continue;
  }
  preferedTeas.push(tea);
}

console.log(preferedTeas);
