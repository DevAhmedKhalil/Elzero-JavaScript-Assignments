/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNumber = 8;

// let check = nums.some(function (e) {
//   console.log("Test", e);
//   return e > 5;
// });

// let check = nums.some(function (e) {
//   console.log("This => ", myNumber, "---- E => ", e);
//   return e > myNumber;
// });

let check = nums.some(function (e) {
  console.log("This => ", this, "---- E => ", e);
  return e > this;
}, myNumber);

console.log(check);

//-------------------------------------------------
console.log("#".repeat(40));
//-------------------------------------------------

function checkValues(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}
console.log(checkValues(nums, 20));
console.log(checkValues(nums, 10));

//-------------------------------------------------
console.log("#".repeat(40));
//-------------------------------------------------

let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = nums.some(function (e) {
  console.log("this.min = ", this.min, "---- this.max = ", this.max);
  return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange);
