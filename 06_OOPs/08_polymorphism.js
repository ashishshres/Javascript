// Polymorphism
class Bird {
  fly() {
    return "Flying...";
  }
}

class Penguin extends Bird {
  fly() {
    return "Penguins cannot fly.";
  }
}

let sparrow = new Bird();
let penguin = new Penguin();
console.log(sparrow.fly());
console.log(penguin.fly());
