let student = {
  name: "Ashish",
  faculty: "Education",
  year: 2022,
  start: function () {
    return `${this.name} studies in ${this.faculty}`;
  },
};

// console.log(student.start());

function Student(name, faculty) {
  this.name = name;
  this.faculty = faculty;
}

let ashish = new Student("Ashish", "Education");
// console.log(ashish.name);
// console.log(ashish.faculty);

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

const horse = new Animal("Horse");
// console.log(horse);
// console.log(horse.speak());

Array.prototype.ashish = function () {
  return `Custom method ${this}`;
};

const myArray = [1, 2, 3];
console.log(myArray.ashish());
