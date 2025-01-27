/*
Write a `forEach` loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"].
Skip the loop when "chai" is found, and store all previous tea types in an array named 'availableTeas'.
*/
let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
let isChai = false;

teaCollection.forEach((tea) => {
  if (isChai) {
    return;
  }

  if (tea === "chai") {
    isChai = true;
    return;
  }
  availableTeas.push(tea);
});

console.log(availableTeas);
