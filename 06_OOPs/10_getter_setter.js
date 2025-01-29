// Getters and Setters
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  set email(value) {
    this._email = value.toUpperCase();
  }

  get email() {
    return `email is ${this._email}`;
  }

  set password(value) {
    this._password = value;
  }

  get password() {
    return `password is ${this._password.toUpperCase()}`;
  }
}

const userOne = new User("user@one.com", "user123");
console.log(userOne);
console.log(userOne.email);
console.log(userOne.password);
