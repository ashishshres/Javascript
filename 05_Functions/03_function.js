/*
Write an arrow function named 'calculateTotal' that takes two parameters: `prices` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`.
Store the result in a variable named `totalCost`
*/
// const calculateTotal = (price, quantity) => {
//   return price * quantity;
// };
const calculateTotal = (price, quantity) => price * quantity;
const totalCost = calculateTotal(100, 2);
console.log(totalCost);
