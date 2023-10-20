/*
  Generators
  - Delegate Generator
*/

function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll() {
  yield* generateNums();
  yield* generateLetters();
  // yield [4, 5, 6]; // {value: Array(3), done: false}
  yield* [4, 5, 6];
}

let generator = generateAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); // {value: 'A', done: false}
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.return("Z")); // {value: 'Z', done: true}
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
