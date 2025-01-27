/*
Write a `forEach` loop that iterates through the array ["Berlin", "Tokyo", "Sydney" ,"Paris"].
Skip "Sydney" and store the other cities in a new array named 'traveledCities'.
*/
let cities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

cities.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});

console.log(traveledCities);
