/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

class User {
  // Private Property
  #e;
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    this.#e = eSalary;
  }
  getSalary() {
    return parseInt(this.#e);
  }
  setSalary(salary) {
    this.#e = salary;
  }
}

let userOne = new User(100, "Elzero", "5000 pound");

console.log(userOne);
console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.getSalary() * 0.3); // 1500
// console.log(userOne.#e); // Private field '#e' must be declared in an enclosing class

console.log(userOne.setSalary(1000)); // undefined
console.log(userOne.getSalary()); // 1000
