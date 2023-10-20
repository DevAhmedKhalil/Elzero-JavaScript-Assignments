/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

let mapUser = { theName: "Elzero" };
let not_object = "Ahmed";
let arr1 = [1, 2, 3, 4];

let myMap = new Map();

myMap.set(mapUser, "Value Of Object");
myMap.set(not_object, "Name");
myMap.set(arr1, "Array1");

console.log(myMap);

myUser = null; // Override The Reference => Garbage delete it, but it's don't have specific time

console.log(myMap);

//--------------------------
console.log("#".repeat(20));
//--------------------------

let weakMapUser = { theName: "Ahmed" };
// let notObject = "Ahmed";
let arr2 = [1, 2, 3];

let myWeakMap = new WeakMap();

myWeakMap.set(weakMapUser, "Object Value !");
// myWeakMap.set(notObject, "Name"); // Error string Not Object , Array is Object
myWeakMap.set(arr2, "Array2");

console.log(myWeakMap);

weakMapUser = null; // Override The Reference

console.log(myWeakMap);
