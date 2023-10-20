// Assignment : 1
class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  // Methods
  run() {
    return `${this.n} Car Is Running Now`;
  }
  stop() {
    return `Car Is Stopped`;
  }
}

const BMW = new Car("BMW", 2023, 1000_000);
console.log(
  `Car One Name Is ${BMW.n}, And Model Is ${BMW.m}, And Price Is ${BMW.p}`
);
console.log(BMW.run());

const Mercedes = new Car("Mercedes", 2023, 2000_000);
console.log(Mercedes);

const Audi = new Car("Audi", 2023, 3000_000);
console.log(Audi);
console.log("-".repeat(40));

//--------------------------------------------------------------------------
// Assignment : 2

class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here
class Tablet extends Phone {
  constructor(name, serial, price, size = "UnKnown") {
    super(name, serial, price);
    this.size = size || "UNknown";
  }
  fullDetails() {
    return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown
console.log("-".repeat(40));

//--------------------------------------------------------------------------
// Assignment : 3

// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  // Way : 2
  cardNum() {
    return this.#c.toString().match(/\d{4}/g).join("_");
  }
  get showData() {
    return `Hello ${this.u} Your Credit Card Number is ${this.cardNum()}`;
  }

  // Way : 1
  // showData() {
  //   let RegEx = /\d{4}-\d{4}-\d{4}-\d{4}/gi;
  //   let Reg = /\d{4}/gi;
  //   return `Hello ${this.u} Your Credit Card Number Is ${(() => {
  //     if (typeof this.#c === "string") {
  //       return `${
  //         RegEx.test(this.#c) ? this.#c : this.#c.match(Reg).join("-")
  //       }`;
  //     } else {
  //       let cc = this.#c.toString().match(Reg).join("-");
  //       return cc;
  //     }
  //   })()}`;
  // }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
console.log("-".repeat(40));

//--------------------------------------------------------------------------
// Assignment : 4

// Write Your Code Here
// String || Object
String.prototype.addLove = function (val) {
  return `I Love ${this} Web School`;
};

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School
console.log("-".repeat(40));

//--------------------------------------------------------------------------
// Assignment : 5

const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here

Object.defineProperties(myObj, {
  score: {
    writable: false, // don't edit value of Score
  },
  id: {
    enumerable: false, // don't show id in loop
  },
  // country: {
  //   enumerable: false, // don't show in loop
  //   configurable: true, // Don't show in object in console
  // },
});

delete myObj.country; // don't show country in loop && object

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
