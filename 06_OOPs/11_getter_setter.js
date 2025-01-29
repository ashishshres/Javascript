class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.log(`${this.name} width must be a positive number`);
    }
  }

  get width() {
    return `${this.name} width: ${this._width}`;
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.log(`${this.name} height must be a positive number`);
    }
  }

  get height() {
    return `${this.name} height: ${this._height}`;
  }

  get area() {
    return `${this.name} area is ${this._width * this._height}`;
  }
}

const rectangleA = new Rectangle("rectangleA", -100, "abc");
console.log(rectangleA.width);
console.log(rectangleA.height);

const rectangleB = new Rectangle("rectangleB", 100, 200);
console.log(rectangleB.width);
console.log(rectangleB.height);

rectangleB.width = 400;
rectangleB.height = 800;
console.log(rectangleB.width);
console.log(rectangleB.height);
console.log(rectangleB.area);
