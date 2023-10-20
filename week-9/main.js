/*
  064 - Anonymous Function and Use Cases
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

// console.log(calcc(10, 20));
// // the function is after console.log, and it works pro :)
// function calcc(num1, num2){
//   return num1 + num2;
// }

// // the Anonymous function must be before console.log
// let calculator = function (num1, num2) {
//   return num1 + num2;
// };
// console.log(calculator(20, 20));

// document.getElementById("show").onclick = function() {
//   console.log("Hello Ahmed")
// }

// document.getElementById("show").onclick = sayHello;
// function sayHello() {
//   console.log("Hello AhmedK");
// }

// // Anonymous function don't want a name :)(we can delete elzero)
// setTimeout(function elzero() {
//   console.log("Good");
// }, 2000);

//--------------------------------------------------

/*
  065 - Return Nested Function
  Function
  - Function Inside Function
  - Return Function
*/

// Example 1

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     message = `${message} ${fName} ${lName}`;
//   }
//   concatMsg();
//   return message;
// }

// console.log(sayMessage("Osama", "Mohamed"));

// Example 2

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     return `${message} ${fName} ${lName}`;
//   }
//   return concatMsg();
// }

// console.log(sayMessage("Osama", "Mohamed"));

// Example 3

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     function getFullName() {
//       return `${fName} ${lName}`;
//     }
//     return `${message} ${getFullName()}`;
//   }
//   return concatMsg();
// }

// console.log(sayMessage("Osama", "Mohamed"));

//--------------------------------------------------

/*
  066 - Arrow Function Syntax
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

// let print = function () {
//   return 10;
// };

// let print = () => 10;

// let print = function (num) {
//   return num;
// };

// let print = num => num;
// console.log(print(100));

// let print = function (num1, num2) {
//   return num1 + num2;
// };

// let print = (num1, num2) => num1 + num2;
// console.log(print(100, 50));

//--------------------------------------------------

/* 
  067 - Scope – Global And Local
  Scope
  - Global And Local Scope
*/

// var a = 1;
// let b = 2;
// var c = 3;

// function showText() {
//   console.log(`Function - From Local ${a}`);
//   console.log(`Function - From Local ${b}`);
//   console.log(`Function - From Local ${c}`);
//   console.log(`Function - From Local ${x}`);
//   var a = 10;
//   var x = 40;
//   // let b = 20;
// }

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);
// console.log(`From Global ${c}`);
// // console.log(`From Global ${x}`); Error

// showText();

//--------------------------------------------------

/* 
  068 - Scope – Block
  Scope
  - Block Scope [If, Switch, For]
  * var is not Block Scope ITS override the value
  * let is Block Scope
*/

// var x = 10;

// if (10 === 10) {
//   let x = 50;
//   console.log(`From If Block ${x}`);
//   // let or const
// }

// console.log(`From Global ${x}`);

//--------------------------------------------------

/* 
  069 - Scope – Lexical (Static)
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/

// function parent() {
//   let a = 10;

//   function child() {
//     console.log(a);
//     // console.log(`From Child ${b}`);

//     function grand() {

//       let b = 100;
//       console.log(`From Grand ${a}`);
//       console.log(`From Grand ${b}`);
//     }
//     grand();
//   }
//   child();
// }
// parent();

