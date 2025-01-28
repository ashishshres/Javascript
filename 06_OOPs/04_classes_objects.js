// Class
class Fruit {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  // Methods
  describe() {
    return `${this.name} is ${this.color} color.`;
  }
}

// Objects
const kiwi = new Fruit("kiwi", "green");
console.log(kiwi);
console.log(kiwi.describe());
