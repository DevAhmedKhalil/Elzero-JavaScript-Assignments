// التكليف 01

console.log("----------------------------------------------------");
// Replace ? With Arithmetic Operators
console.log((10 * 20 * 15 * 3 * 190 * 10) % 400); // 0

// التكليف 02

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * 2); // 6

// Solution Three
console.log(num + num * true); // 6

// Solution Four
console.log(num + true + true + true); // 6

// Solution Five
console.log(num * true + num); // 6

// Solution Six
console.log(true + true + true + true + true + true); // 6

// التكليف 03

let numm = "10";

// Solution One
console.log(+numm + +numm); // 20

// Solution Two
console.log((+numm * +numm) / (true + true + true + true + true)); // 20

// Solution Three
console.log(
  +numm + (+true + true + true + true + true + true + true + true + true + true)
); // 20

// Solution Four
// console.log(++numm);
console.log(++numm + ++numm - (+true + true + true)); // 20
