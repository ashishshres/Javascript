/*
Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like "Making green tea" when called with "green tea" .
Store the result in a variable named `teaOrders` .
*/
function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

const teaOrders = makeTea("green tea");
console.log(teaOrders);
