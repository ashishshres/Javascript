// Generator and Iterator
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// console.log(numberGenerator);
// console.log(numberGenerator());
let genOne = numberGenerator();
console.log(genOne.next().value);
console.log(genOne.next().value);
console.log(genOne.next().value);

let genTwo = numberGenerator();
console.log(genTwo.next().value);
