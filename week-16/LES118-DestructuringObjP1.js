/*
  Destructuring
  - Destructuring Object
*/

const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

let theName = user.theName;
let theAge = user.theAge;
let theTitle = user.theTitle;
let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

//--------------------------------------

// NEW SECTION HERE

({ theName, theAge, theTitle, theCountry } = user); // if there is initializing before
// const { theName, theAge, theCountry } = user;    // if there is NOT a variable before

console.log(theName);
console.log(theAge);
// console.log(theTitle); // its about The KEY of Obj
console.log(theCountry);
