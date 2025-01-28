// Abstraction
class CoffeeMachine {
  start() {
    // statements
    return "Starting the machine...";
  }

  brewCoffee() {
    // statements
    return "Brewing coffee...";
  }

  // hides the implementation
  pressStartButton() {
    let msgStart = this.start();
    let msgBrew = this.brewCoffee();
    return `${msgStart}\n${msgBrew}`;
  }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());
