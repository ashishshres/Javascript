// Encapsulation
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return `$${this.#balance}`;
  }
}

let account = new BankAccount();
account.deposit(100);
console.log(account.getBalance());

// console.log(account.balance); // undefined
// console.log(account.#balance); // '#balance' is not accessible outside class 'BankAccount' because it has a private identifier.
