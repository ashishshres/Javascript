/*
You have two arrays: `europeanCities` containing "Paris" and "Rome", and `asianCities` containing "Tokyo" and "Bangkok".
Merge these two arrays into a new array named `worldCities`.
*/
const europeanCities = ["Paris", "Rome"];
const asianCities = ["Tokyo", "Bangkok"];
// const worldCities = europeanCities + asianCities;
// const worldCities = [europeanCities, asianCities];
// const worldCities = europeanCities.concat(asianCities);
const worldCities = [...europeanCities, ...asianCities];
console.log(worldCities);
