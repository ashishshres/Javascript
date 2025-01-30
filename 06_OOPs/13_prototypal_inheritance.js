// Prototypal inheritance
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let person = new Person("Ashish");
person.greet();
