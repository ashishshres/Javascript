// Closures
function outer() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
// console.log(increment);
// let result = increment();
// console.log(result);
console.log(increment());
console.log(increment());
console.log(increment());
