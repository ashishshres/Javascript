// Inheritance
class Fruit {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  describe() {
    return `${this.name} is ${this.color} color.`;
  }
}

class Apple extends Fruit {
  type() {
    return `${this.name} is a sweet fruit.`;
  }
}

const apple = new Apple("apple", "red");
console.log(apple);
console.log(apple.type());

// const lemon = Fruit("lemon", "yellow");
// console.log(lemon);
// console.log(lemon.name);
