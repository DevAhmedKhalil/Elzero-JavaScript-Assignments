/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/

// alert("Test");
// console.log("Test");

// let confirmMsg = confirm("Are You Sure?"); // ok = true || cancel = false
// console.log(confirmMsg);
// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item NOT Deleted");
// }

let promptMsg = prompt("Good Day To You is?", "Write Day With 3 Characters");
console.log(promptMsg);
