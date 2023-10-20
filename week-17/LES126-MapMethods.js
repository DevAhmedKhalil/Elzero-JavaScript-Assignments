/*
  - Map Data Type
  Methods
  --- set ✓
  --- get ✓
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/

let myMap = new Map([
  [10, "Number"],
  ["Name", "String"],
  [false, "Boolean"],
]);

console.log(myMap);
console.log(myMap.get(10));
console.log(myMap.get("Name"));
console.log(myMap.get(false));

//-----------------------------------------
console.log("#".repeat(20));
//-----------------------------------------

console.log(myMap.has("Name"));
console.log(myMap.has(100));

//-----------------------------------------
console.log("#".repeat(20));
//-----------------------------------------

console.log("myMap.size =", myMap.size);
// console.log(myMap.delete("Name"));
console.log(myMap.delete(110));
console.log(myMap);

//-----------------------------------------
console.log("#".repeat(20));
//-----------------------------------------
// future
console.log(...myMap);
console.log([...myMap]);
console.log([...[...myMap]]);

myMap.clear();
console.log("myMap.size =", myMap.size);