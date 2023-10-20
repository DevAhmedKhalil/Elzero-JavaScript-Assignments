//التكليف 01
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(-++num, --num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//------------------------------------------------------
//التكليف 02

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

friends.pop();
friends.shift();

console.log(friends); // ["Eman", "Osama"]

//------------------------------------------------------
//التكليف 03

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//------------------------------------------------------
//التكليف 04

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
  // words.slice(website.length)[0][0].slice(website.length).toUpperCase()
  words.slice(website.length)[0][0].toUpperCase().slice(website.length)
); // ZERO

//------------------------------------------------------
//التكليف 05

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.indexOf(needle) !== -1) {
  console.log("Found");
}

if (haystack.lastIndexOf(needle) !== -1) {
  console.log("Found");
}

if (haystack.includes(needle) !== -1) {
  console.log("Found");
}

//------------------------------------------------------
//التكليف 06

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

allArrs = allArrs
  .concat(arr1.slice(arr1.length - true), arr2.slice(arr1.length - true))
  .sort()
  .join("")
  .toLocaleLowerCase();

console.log(allArrs); // fxy
