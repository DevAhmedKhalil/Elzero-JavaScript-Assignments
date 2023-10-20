/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(100, "AhmedK");
console.log(userOne.i, userOne.u);
console.log(User.prototype);
console.log(userOne);

User.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
};

Object.prototype.love = "Elzero Web School";

String.prototype.addDotBeforeAndAfter = function (val) {
  return `.${this}.`;
};

let myString = "Elzero";

console.log(myString.addDotBeforeAndAfter());
console.log(Object.prototype);
console.log(Object.prototype.love);

console.log(Object.prototype.love.addDotBeforeAndAfter());

