// Assignment 1:

let task1 = {
  name: "Elzero",
  age: 38,
  country: "Egypt",

  fulldetails: function () {
    return `My Name Is ${task1.name}, My Age Is ${task1.age}, I Live in ${task1.country}`;
  },
};

console.log(task1.fulldetails());

console.log("--------------------------------------------");
//--------------------------------------------------------
// Assignment 2:

// Method One
// Create Your Object Here

let objMethodOne = {
  property: 1,
};
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here

let objMethodTwo = new Object({ property: 2 });
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here

let objMethodThree = Object.create({ property: 3 });
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here

let objMethodFour = Object.assign({}, { property: 4 });
console.log(objMethodFour.property); // "Method Four"

console.log("--------------------------------------------");
//--------------------------------------------------------
// Assignment 3:

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line

let finalObject = Object.assign({ a }, threeNums, twoNums);

console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

console.log("--------------------------------------------");
//--------------------------------------------------------

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
console.log(`Object Length is : ${objectLength}`);

let val = Object.keys(myFavGames);

console.log(val);
// console.log(myFavGames["Trinity Universe"].publisher);
// console.log(myFavGames["Titan Quest"].publisher);
// console.log(myFavGames[val[2]].publisher);
console.log("---------------");

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${val[i]}`);
  console.log(`The Publisher Is ${myFavGames[val[i]].publisher}`);
  console.log(`The Price Is ${myFavGames[val[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[val[i]].bestThree !== undefined) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[val[i]].bestThree.one}`);
    console.log(`Second => ${myFavGames[val[i]].bestThree.two}`);
    console.log(`Third => ${myFavGames[val[i]].bestThree.three}`);
  }
  console.log("#".repeat(20));
}

/*
// Ouput
"The Game Name Is Trinity Universe"
"The Publisher Is NIS America"
"The Price Is 40"
"####################"
"The Game Name Is Titan Quest"
"The Publisher Is THQ"
"The Price Is 50"
"- Game Has Releases"
"First => Immortal Throne"
"Second => Ragnarök"
"Third => Atlantis"
"####################"
"The Game Name Is YS"
"The Publisher Is Falcom"
"The Price Is 40"
"- Game Has Releases"
"First => Oath in Felghana"
"Second => Ark Of Napishtim"
"Third => origin"
"####################"
*/
