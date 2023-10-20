//-----------------------------------------------------------------------------
// Assignment 1 :
let setOfNumbers = new Set(["10"]);
setOfNumbers.add("20").add(setOfNumbers.size);

console.log(setOfNumbers);
console.log(+Math.min(...setOfNumbers));

//-----------------------------------------------------------------------------
// Assignment 2 :
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log(new Set(myFriends.sort()));

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

//-----------------------------------------------------------------------------
// Assignment 3 :
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

console.log("#".repeat(40));
console.log(Object.keys(myInfo));
console.log(Object.entries(myInfo));
console.log("#".repeat(40));

let infoMap = new Map(Object.entries(myInfo));
console.log(infoMap);
console.log(infoMap.size);
console.log(infoMap.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

// Help >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log("#".repeat(50));
const object1 = {
  a: "someString",
  b: 42,
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
// =================================================
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
// =================================================
const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}
console.log("#".repeat(50));
// Help >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//-----------------------------------------------------------------------------
// Assignment 4 :

let theNumber = 100020003000;

console.log(
  ...new Set([
    +theNumber
      .toString()
      .split("")
      .map((e) => {
        return e === "0" ? "" : +e;
      })
      .sort()
      .join(""),
  ])
);

console.log(
  +Array.from(new Set([...theNumber.toString()]))
    .sort()
    .splice(+true)
    .join("")
);

console.log(
  +Array.from(new Set(...[theNumber.toString()]))
    .map((e) => +e)
    .sort()
    .join("")
);

console.log(Array.from("1234443"));
console.log(Array.from([5415354].toString()));

// Needed Output
// 123

//-----------------------------------------------------------------------------
console.log("#".repeat(50));
//-----------------------------------------------------------------------------
// Assignment 5 :

let theName = "Elzero";

console.log([...theName]);

console.log(theName.split(""));

console.log(Array(...theName));

console.log(Array.from(theName));

console.log(Object.values(theName));

console.log(Object.assign([], theName));

let arr = [];
for (let i in theName) {
  arr.push(theName[i]);
}
console.log(arr);

console.log([...[...new Set(theName)]]);

console.log(new Map().set(theName, "Elzero").get(theName).split(""));

console.log(...[theName.split("")].map((e) => e));

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

//-----------------------------------------------------------------------------
console.log("#".repeat(50));
//-----------------------------------------------------------------------------
// Assignment 6 :

let test = ["A", "Z", 1, 2, "a", "z", "B", 3, 25, "#", "$", 66, "*", 8, 9];
console.log("Test Array ", test.sort());
console.log("#".repeat(50));
//-----------------

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// Way 3 :)
let numsArray = chars.filter((i) => typeof i === "number");
let charsArray = chars.filter((i) => typeof i === "string");
let finalArray = [...numsArray, ...charsArray];

finalArray.copyWithin(0, numsArray.length).copyWithin(numsArray.length);
console.log(finalArray);

// Way 2 :)
let numArr = [];
let charArr = [];

for (let i = 0; i < chars.length; i++) {
  if (typeof chars[i] === "number") {
    numArr.push(chars[i]);
  } else if (typeof chars[i] === "string") {
    charArr.push(chars[i]);
  }
}

let finalArr = [...[...numArr], ...[...charArr]];

// let num = 0;
// console.log(finalArr.map((e) => (parseInt(e) ? num++ : "")));
// console.log("finalArr => ",finalArr);
// console.log("Num of Numbers =>", num);
// finalArr.copyWithin(0, num, num-5)

finalArr.copyWithin(0, numArr.length, numArr.length - 5);
console.log(finalArr);

finalArr.copyWithin(0, numArr.length, numArr.length * 2);
console.log(finalArr);

// Way 1 :)
// It worked but, need Characters Sorted Array
// let newChars = chars;
// let num = 0;

// console.log(newChars.sort().map((e) => (parseInt(e) ? num++ : "")));
// console.log("newChars => ",newChars);
// console.log("Num of Numbers =>", num);

// newChars.copyWithin(0, num, num-5); // 4 => -1,,, 3 => -2,,, 2 => -3
// console.log(chars);

// // Needed Output
// // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

//-----------------------------------------------------------------------------
console.log("#".repeat(50));
//-----------------------------------------------------------------------------
// Assignment 7 :

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));
console.log([...Object.assign([], numsOne), ...Object.assign([], numsTwo)]);

let final1 = [];
let final2 = [];
Object.assign(final1, numsOne);
Object.assign(final2, numsTwo);
console.log([...final1, ...final2]);

for (let i = 0; i < numsTwo.length; i++) {
  numsOne.push(numsTwo[i]);
}
console.log(numsOne);

// // Needed Output
// [1, 2, 3, 4, 5, 6]
