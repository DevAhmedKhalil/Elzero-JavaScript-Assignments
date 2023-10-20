/*
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  updateName(newName) {
    this.u = newName;
  }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.u);
userOne.updateName("Osama");
console.log(userOne.u);

console.log("#".repeat(10));

let strOne = "Elzero";
let strTwo = new String("Elzero");

console.log(typeof strOne); // string
console.log(typeof strTwo); // object

console.log("#".repeat(10));

console.log(strOne instanceof String); // false
console.log(strTwo instanceof String); // true

console.log("#".repeat(10));

console.log(strOne.constructor === String); // true
console.log(strTwo.constructor === String); // true

console.log("#".repeat(10));
