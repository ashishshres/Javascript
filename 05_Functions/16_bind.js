const user = {
  name: "Ashish",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

user.greet();

// context is missing
let greetFunction = user.greet;
greetFunction();

// binding context
let bindGreet = user.greet.bind(user);
bindGreet();
