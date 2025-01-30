function greet() {
  console.log(`Hello, I am ${this.name}.`);
}

let userOne = {
  name: "Ashish",
};

let userTwo = {
  name: "Shrestha",
};

// call
greet.call(userOne);
greet.call(userTwo);
