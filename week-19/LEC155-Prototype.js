/*
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
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

let userOne = new User(100, "Elzero");
console.log(userOne.u); // Elzero

console.log(User.prototype); // {constructor: ƒ, sayHello: ƒ}

console.log(String.prototype); // String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}

let strOne = "Elzero";

console.log(strOne.prototype); // undefined