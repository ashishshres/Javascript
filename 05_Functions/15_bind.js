function about(color) {
  console.log(`${this.name} is ${color}`);
}

let apple = {
  name: "Apple",
};

let aboutApple = about.bind(apple, "red");
aboutApple();
