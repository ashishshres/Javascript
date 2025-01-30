function greet(faculty, semester) {
  console.log(
    `Hello, I am ${this.name} from ${faculty} faculty. I am currently studying in ${semester} semester.`
  );
}

let userOne = {
  name: "Ashish",
};

// apply
greet.apply(userOne, ["Education", 5]);
