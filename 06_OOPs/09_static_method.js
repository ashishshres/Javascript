// Static method
class Calculator {
  // no objects can use this method
  static add(a, b) {
    return `sum: ${a + b}`;
  }
}

let calc = new Calculator();
// console.log(calc.add(10, 20));

console.log(Calculator.add(10, 20));
