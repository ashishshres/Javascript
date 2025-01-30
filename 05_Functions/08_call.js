// call
const user = {
  name: "Ashish",
  greet: function (message) {
    console.log(`${message}, ${this.name}!`);
  },
};

const newUser = { name: "Shres" };

// object.function.call(reference, arg1, arg2)
user.greet.call(newUser, "Hello");
// Output: "Hello, Shres!"
