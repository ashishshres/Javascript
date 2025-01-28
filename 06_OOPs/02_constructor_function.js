// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(name, seats) {
  this.name = name;
  this.seats = seats;
}

const carA = new Car("Toyota", 4);
// console.log(carA);

const carB = new Car("Ford", 6);
// console.log(carB);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a cup of ${this.type}`;
  };
}

const lemonTea = new Tea("lemon tea");
// console.log(lemonTea);
// console.log(lemonTea.describe());

function Student(name, faculty) {
  this.name = name;
  this.faculty = faculty;
}

Student.prototype.describe = function () {
  return `${this.name}'s faculty is ${this.faculty}.`;
};

let ram = new Student("Ram", "Education");
console.log(ram.describe());

function Drink(drink) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword.");
  }
  this.drink = drink;
}

const tea = new Drink("tea");
const coffee = Drink("coffee");
