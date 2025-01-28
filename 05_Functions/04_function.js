/*
Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the "earl grey".
Return the result of calling `makeTea`.
*/
const makeTea = (teaType) => {
  return `Making ${teaType}`;
};

const processTeaOrder = (teaFunction) => {
  return teaFunction("earl grey");
};

const orderTea = processTeaOrder(makeTea);
console.log(orderTea);
