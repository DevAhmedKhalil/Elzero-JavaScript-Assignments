//التكليف 01
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

let newMix = mix
  .map(function (element) {
    return isNaN(parseInt(element)) ? element : "";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });
console.log(newMix);

//------------------------------------------------------------
/*
#073 – Higher Order Functions – Filter
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/
//التكليف 02
let myString = "EElllzzzzzzzeroo";

// Elzero

let myNewString = myString
  .split("")
  .filter(function (element, index, arr) {
    console.log(`
    mystring = ${myString}
    element => ${element}
    index = ${index}
    arr = ${arr}
    arr.indexOf(${element}) = ${arr.indexOf(element)} 
    result = ${arr.indexOf(element) === index}
    `);
    return arr.indexOf(element) === index;
  })
  .join("");
// indexOf take ONLY the first element zzzzzzzz
console.log(myNewString);
console.log("#".repeat(20));

//------------------------------------------------------------

//JavaScript Demo: Array.flat()
// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
// // expected output: [0, 1, 2, 3, 4]

// const arr2 = [0, 1, 2, [[[3, 4]]]];

// console.log(arr2.flat(2));
// // expected output: [0, 1, 2, [3, 4]]

// التكليف 03
let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero

const newarray = myArray.reduce((acc, curr) => {
  return Array.isArray(curr)
  ? acc + curr.reduce((subAcc, subCurr) => `${subAcc}${subCurr}`)
  : acc + curr;
}, "");
console.log("1");
console.log(newarray);


let myArr = myArray.flat().reduce((acc, curr) => `${acc}${curr}`);
console.log("2");
console.log(myArr);


const newArr = myArray.reduce((acc, curr) => acc.concat(curr), []).join("");
console.log("3");
console.log(newArr);

console.log("#".repeat(20));
//------------------------------------------------------------

//التكليف 04

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let NewArray = numsAndStrings
.filter((ele) => (typeof ele === "number" ? ele : ""))
.map((ele) => -ele);

// [-1, -10, 10, 20, -5, -3]
console.log(NewArray);

//------------------------------------------------------------

//التكليف 05

let nums = [2, 12, 11, 5, 10, 1, 99];

let Nums = nums.reduce(
  (acc, current) => (current % 2 !== 0 ? acc + current : acc * current)
);

// 500
console.log(Nums);
