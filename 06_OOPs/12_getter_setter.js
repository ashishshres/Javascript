class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.log("First name must be a non-empty string");
    }
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.log("Last name must be a non-empty string");
    }
  }

  get lastName() {
    return this._lastName;
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge > 0) {
      this._age = newAge;
    } else {
      console.log("Age must be a non-negative number");
    }
  }

  get age() {
    return this._age;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

// const personA = new Person(123, 10, "Bishal");
// console.log(personA.firstName);
// console.log(personA.lastName);
// console.log(personA.age);

const personB = new Person("Bishal", "Baniya", 21);
console.log(personB.firstName);
console.log(personB.lastName);
console.log(personB.age);
