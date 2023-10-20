/*
  Class
  - Inheritance
*/

// Parent Class
class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

// Derived Classes
class Admin extends User {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}

class Superman extends Admin {
  constructor(id, username, permissions, ability) {
    super(id, username, permissions);
    this.a = ability;
  }
}

let userOne = new User(100, "Elzero");
let adminOne = new Admin(110, "Mahmoud", 1);


console.log(userOne.u); // Elzero
console.log(userOne.sayHello()); // Hello Elzero

console.log("####");

console.log(adminOne.i); // 110
console.log(adminOne.u); // Mahmoud
console.log(adminOne.p) // 1
console.log(adminOne.sayHello()); // Hello Mahmoud