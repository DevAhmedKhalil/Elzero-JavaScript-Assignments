/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

// Way 1 :
// // Save Book Value In Stash
// let stash = book; // value = Video

// // Change Book Value
// book = video; // value = Book

// // Change Video Value
// video = stash; // value = Video

// console.log(`book = ${book}`);
// console.log(`video = ${video}`);

// Way 2 :
[book, video] = [video, book];
console.log(`book = ${book}`);
console.log(`video = ${video}`);
