/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  writable: true,
  enumerable: true, // don't show on Loop if == false
  configurable: true, // don't show on object if == true
  value: 3,
});

Object.getOwnPropertyDescriptor(myObject, "a", {
  // enumerable: false,
  configurable: true, // can't do it 
});

// Object.defineProperty(myObject, "c", {
//   writable: false,
//   enumerable: true,
//   configurable: true, // <= Cannot redefine property
//   value: 3,
// });

console.log(myObject.c); // 3

myObject.c = 100; // writable : true

console.log(myObject.c); // if writable : false => 3, else 100

console.log(delete myObject.c); // false

for (let prop in myObject) {
  // C: didn't show when => enumerable: false,
  console.log(prop, myObject[prop]);
}

console.log(myObject);
// c: did't show when => configurable: true
