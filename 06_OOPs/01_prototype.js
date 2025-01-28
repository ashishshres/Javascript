// Browser
let computerA = {
  cpu: 8,
};

let computerB = {
  screen: "HD",
  __proto__: computerA,
};

let computerC = {};

// console.log("computerA ", computerA.__proto__);
// console.log("computerB ", computerB.__proto__);

let genericCar = { tyres: 4 };
let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);
console.log("tesla ", tesla);
console.log("genericCar ", genericCar);
// console.log("tesla ", tesla.tyres);
console.log("tesla", Object.getPrototypeOf(tesla));
