let userOne = {
  name: "Ashish",
  greet() {
    console.log(`Hello, I am ${this.name}.`);
  },
};

userOne.greet();

let userTwo = {
  name: "Shrestha",
};

// call
userOne.greet.call(userTwo); // function borrowing
