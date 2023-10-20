/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

//------------------------
let myData = [1, 1, 1, 2, 3, "A"];
console.log(myData);
//------------------------
// let myUniqueData = new Set([1, 1, 1, 2, 3, "A"]);
//------------------------
// let myUniqueData = new Set(myData);
//------------------------
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3).add("A");
//------------------------
let myUniqueData = new Set();
myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A").add("b");
//------------------------
console.log(myUniqueData);
//------------------------
//------------------------
console.log("myData [0] =", myData[0]);
//------------------------
console.log("myUniqueData [0] =", myUniqueData[0]); // Undefined
//------------------------
console.log("Deleted myUniqueData value of 2 >> ", myUniqueData.delete(2));
console.log("Deleted myUniqueData value of 4 >> ", myUniqueData.delete(4));
console.log("Deleted myUniqueData value of A >> ", myUniqueData.delete("A"));
console.log(myUniqueData);
console.log("myUniqueData Size is :", myUniqueData.size);
//------------------------
console.log("Is Set Has => b", myUniqueData.has("B".toLowerCase()));
console.log(`Is Set Has => b ${myUniqueData.has("B".toLowerCase())}`);
//------------------------
myUniqueData.clear();
console.log(myUniqueData);
console.log("myUniqueData Size is :", myUniqueData.size);
console.log(myUniqueData.clear()); // undefined
