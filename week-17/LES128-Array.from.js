/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

console.log(Array.from("Osama"));
//---------------------------------------------------
console.log(
  Array.from("12345", function (n) {
    return +n + +n;
  })
);

console.log(Array.from("12345", (n) => +n + +n)); //

//---------------------------------------------------
console.log("#".repeat(30));
//---------------------------------------------------

let myArray = [1, 1, 1, 2, 3, 4]; // [1, 1, 1, 2, 3, 4]
let mySet = new Set(myArray); // [1, 2, 3, 4]

console.log("myArray ", myArray);

console.log("mySet ", mySet);

console.log("Array.from(mySet) ", Array.from(mySet));

console.log("...new Set(myArray)", [...new Set(myArray)]); // Future

//---------------------------------------------------
console.log("#".repeat(30));
//---------------------------------------------------

function arrayFrom() {
  return Array.from(arguments);
}
console.log(arrayFrom("Ahmed", "sayed", "Osama", 1, 2, 3));

//---------------------------------------------------
console.log("#".repeat(30));
//---------------------------------------------------

function args() {
  return arguments;
}
console.log("Sara", "Mohamed", "Ali", 1, 2, 3);

console.log(["Sara", "Mohamed", "Ali", 1, 2, 3]);
console.log(...["Sara", "Mohamed", "Ali", 1, 2, 3]);
