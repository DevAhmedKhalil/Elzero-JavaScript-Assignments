/*
  Class
  - Static Properties And Methods
*/

class User {
  // Static Property
  static count = 0;

  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
    User.count++; // static property
  }

  // Static Method
  static sayHello() {
    return `Hello From Class`;
  }
  static countMembers() {
    return `${this.count} Members Created`;
  }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Ahmed", 5000);
let userThree = new User(102, "Sayed", 5000);

console.log(userOne.u); // Elzero
console.log(userTwo.u); // Ahmed
console.log(userOne.count); // undefined

console.log(User.count); // 3 => static Property
console.log(User.sayHello()); // Hello From Class => static method
console.log(User.countMembers()); // 3 Members Created => static method

