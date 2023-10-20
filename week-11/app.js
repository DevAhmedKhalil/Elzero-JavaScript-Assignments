/*
  079 - Object – Introduction
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

let user = {
  //Properties
  theName: "Ahmed",
  theAge: 20,
  //Methods
  sayHello: function () {
    return `hello ${this.theName}`;
  },
  getAge: function () {
    return `The Age : ${this.theAge}`;
  },
};

console.log(user.sayHello());
console.log(user.getAge());

console.log("-----------------------------");

/*
  080 - Dot Notation vs Bracket Notation
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

var country = "tala";
var myVar = "country";

let user1 = {
  theName: "Elsayed",
  "country of": "Egypt",
  15: "fav num",
  country: "Cairo",
};

console.log(user1.theName); // Dot Notation
console.log(user1["theName"]); // Bracket Notation
console.log(user1["country of"]); // Bracket Notation
console.log(user1[country]); // Bracket Notation
console.log(user1["country"]); // Bracket Notation
console.log(user1["15"]); // Bracket Notation
console.log(user1[15]); // Bracket Notation
console.log(user1.myVar); // Bracket Notation
console.log(user1[myVar]); // Bracket Notation


console.log("-----------------------------");

/*
  081 - Nested Object And Advanced Examples
  Object
  - Nested Object And Trainings
*/

let person = {
  name: "ahmed khalil",
  age: 20,
  available: false,
  skills: ["HTML", "CSS", "JS"],
  address: {
    ksa: "Elreyad",
    egypt: {
      one: "cairo",
      two: "giza",
    },
  },
  // Methods
  checkAvl: function () {
    // person.available === true ? "Free Work" : "Not Free" ; // not worked
    if (person.available === true) {
      return `Free for work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(person.name);
console.log(person.age);
console.log(person.available);

console.log(person.skills);
console.log(person.skills.join(" | "));
console.log(person["skills"].join(" | "));
console.log(person.skills[2]); // access with index

console.log(person.address);
console.log(person["address"].ksa);
console.log(person.address.egypt.one);
console.log(person.address["egypt"].one);
console.log(person["address"]["egypt"].two);
console.log(person["address"]["egypt"]["two"]);

console.log(person.checkAvl());

console.log("-----------------------------");

/*
  082 - Create object With New Keyword
*/

let user2 = new Object({
  age: 19,
});

console.log(user2);

user2.name = "Osama";
user2["age"] = 20;
user2["country"] = "Shiben";

// methods
user2.sayHello = function () {
  return `Hi ${user2.name}`;
};

console.log(user2.sayHello());
console.log(user2.name);
console.log(user2.age);
console.log(user2["country"]);

console.log("-----------------------------");

/*
  083 - This Keyword
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

console.log(this);
console.log(this === window);

myVar = 100;
console.log(window.myVar);
console.log(this.myVar);

function sayHi() {
  console.log(this);
  return this;
}
sayHi();
console.log(sayHi() === window);

document.getElementById("cl").onclick = function () {
  console.log(this);
};

let user3 = {
  age: 20,
  ageInDays: function () {
    console.log(this);
    return this.age * 365;
  },
};
console.log(user3.age);
console.log(user3.ageInDays());

console.log("-----------------------------");

/*
  084 - Create Object With Create Method
  Object
  - Create Object With Create Method
*/

let user4 = {
  age: 20,
  doubleAge: function () {
    // return `Double Age = ${user4.age * 2}`;  // it will return user4.age*2 in copyUser4 also
    return `Double Age = ${this.age * 2}`;
  },
};

console.log(user4);
console.log("Age = " + user4.age);
console.log(user4.doubleAge());

let obj = Object.create({ b: 200 });
obj.a = 100;
console.log(obj);
console.log(obj.a);
console.log(obj.b);

console.log("///////////");
let copyUser4 = Object.create(user4);
copyUser4.age = 30;
console.log(copyUser4);
console.log("Age = " + copyUser4.age);
console.log(copyUser4.doubleAge());

console.log("-----------------------------");

/*
  085 - Create Object With Assign Method
  Object
  - Create Object With Assign Method
*/

let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100,
  prop2: 200,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);
// take the first properties
console.log(finalObject);

finalObject.prop1 = 111;
finalObject.prop2 = 222;
finalObject.prop3 = 333;
console.log(finalObject);

let newObject = Object.assign({ a: 123 }, obj1, { prop5: 5, prop6: 6 });
console.log(newObject);


