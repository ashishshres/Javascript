// bind
const user = {
  name: "Ashish",
  greet: function (message) {
    console.log(`${message}, ${this.name}!`);
  },
};

const newUser = { name: "Shres" };

// object.function.bind(reference, arg1, arg2)
const greetAlice = user.greet.bind(newUser);
greetAlice("Hey");
// Output: "Hey, Shres!"
