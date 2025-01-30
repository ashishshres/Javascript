// apply
const user = {
  name: "Ashish",
  greet: function (message) {
    console.log(`${message}, ${this.name}!`);
  },
};

const newUser = { name: "Shres" };

// object.function.apply(reference, [arg1, arg2])
user.greet.apply(newUser, ["Hi"]);
// Output: "Hi, Shres!"
