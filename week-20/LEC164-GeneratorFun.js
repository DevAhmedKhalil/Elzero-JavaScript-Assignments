/*
Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

function* generateNumbers() {
  yield 1;
  console.log("Hello After Yield 1");
  yield 2;
  yield 3;
  yield 4;
}

let generator = generateNumbers();

console.log(typeof generator);

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // Hello After Yield 1 ,,,{value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: undefined, done: true}

for (let value of generateNumbers()) {
  console.log(value);
}

console.log("#".repeat(11));

for (let value of generator) {
  console.log(value);
} // this will not work cuz: generator.next(); {Hold/Yield} on the values
