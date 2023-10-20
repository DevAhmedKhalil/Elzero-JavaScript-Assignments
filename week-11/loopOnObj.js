// How to loop over objects in js
let user = {
  name: "Ahmed",
  age: 20,
  occupation: "Brogrammer",
  gender: "Male",
};

// looping over object properties names
// Keys Methods will return an :"Array":
// that array will contain all properties of passed objects as its element

let properties = Object.keys(user);
console.log(properties);

for (let val of properties) {
  console.log(val);
}
console.log("==============");
for (let i = 0; i < properties.length; i++) {
  console.log(properties[i]);
}

console.log("----------------------------------------");
//-------------------------------------------------------------------------------------

// looping over object properties VALUES
// "values" Methods will return an :"Array":
// that array will contain all properties VALUES of passed objects as its element

let values = Object.values(user);
console.log(values);

for (let val of values) {
  console.log(val);
}
console.log("==============");
for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}

console.log("----------------------------------------");
//--------------------------------------------------------------------------------------

let entries = Object.entries(user);
console.log(entries);

for (let val of entries) {
  console.log(val);
}

console.log("-----------");
for (let val of entries) {
  console.log(`arr[0](keys)= ${val[0]} : arr[1](values)= ${val[1]}`);
}

console.log("-----------");
for (let [key, val] of entries) {
  console.log(`(keys) = ${key} : (values) = ${val}`);
}

console.log("-----------");
for (let i = 0; i < entries.length; i++) {
  console.log(entries[i]);
}

console.log("-----------");
for (let i = 0; i < entries.length; i++) {
  console.log(`keys = ${entries[i][0]}, values = ${entries[i][1]}`);
}
