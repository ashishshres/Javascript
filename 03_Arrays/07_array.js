/*
You have an array named `topCities` containing "Berlin", "Germany", and "Sydney".
Create a hard copy of this array named `hardCopyCities`.
*/
const topCities = ["Berlin", "Germany", "Sydney"];
// const hardCopyCities = [...topCities];
// const hardCopyCities = topCities.slice();
hardCopyCities.pop();
console.log(topCities);
console.log(hardCopyCities);
