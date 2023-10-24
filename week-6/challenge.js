// CHALLENGE :- 047 - Array Challenge

/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

my.reverse().splice(zero, --counter);
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
//---------------------

// zero = 0, counter = 2

console.log(my.slice(++zero, -counter).concat(my.slice(++zero, ++counter))); // ["Elham", "Mazero"]

// zero = 2, counter = 3

//---------------------

// "Elzero"
let a = my.slice(--zero, --counter); //Elham
// console.log(a); // array One item

// zero = 1, counter = 2
let b = my.slice(counter, ++counter); // Mazero
// console.log(b); // array One item

console.log(a[0][0].concat(a[0][1]) + b[0][2] + b[0][3] + b[0][4] + b[0][5]);

// zero = 1, counter = 3
//---------------------

console.log(b[0][4] + b[0][5].toUpperCase()); // "rO"
