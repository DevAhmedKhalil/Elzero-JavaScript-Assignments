// // التكليف 01

// // Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// // Your Solutions
// console.log(1e5); // 100000
// console.log(10 * 10000); // 100000
// console.log(1_000_00); // 100000
// console.log(10 ** 5); // 100000
// console.log(Number("100000")); // 100000
// console.log(+"100000"); // 100000
// console.log(parseInt("100000")); // 100000
// console.log(Math.pow(10, 5)); // 100000
// console.log(Math.floor(100000.4)); // 100000
// console.log(Math.trunc(100000.5)); // 100000
// console.log(Math.round(100000.3)); // 100000
// console.log(Math.ceil(100000.0)); // 100000


// //التكليف 02
// console.log(-(Number.MIN_SAFE_INTEGER)); // 9007199254740991


// //التكليف 03
// console.log(Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER + 15); // 16

// //التكليف 04
// let myVar = "100.56789 Views";

// console.log(parseInt(myVar)); // 100
// console.log(parseFloat(myVar).toFixed(2)); // 100.57



// //التكليف 05
// let num = 10;

// console.log(Number.isInteger(num) + 1); // 2

// //التكليف 06
// let flt = 10.4;

// console.log(flt.toFixed(0)); // 10  string
// console.log(Number.parseInt(flt)); // 10
// console.log(Math.floor(flt)); // 10
// console.log(Math.round(flt)) // 10
// console.log(Math.trunc(flt)); // 10
// console.log(Math.ceil(flt)-1); // 10
// console.log(Math.ceil(--flt)); // 10

// //التكليف 07
// console.log( Math.floor(Math.random() * 5) ); // 0 || 1 || 2 || 3 || 4     


// الدروس من رقم 027 إلى رقم 030 من الدورة التعليمية الموجودة

// التكليف 01

let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLocaleLowerCase()); // e
console.log(userName.slice(3, 4)); // e
console.log(userName.substr(3, 1)); // e
console.log(userName.substring(3, 4)); // e
console.log(userName.substring(userName.length-3, userName.length-2).repeat(3)); // eee

//التكليف 02

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True