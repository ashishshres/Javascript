const user = {
  name: "Ashish",
  greet() {
    console.log(`Hi, I am ${this.name}`); // this -> user
  },
};

user.greet();
