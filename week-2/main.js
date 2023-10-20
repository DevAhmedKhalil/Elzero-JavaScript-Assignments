/*
vd 10
  Data Types Intro
  - String
  - Number 
  - Array => Object prototype : array
  - Object
  
*/

console.log("Ahmed Khalil");
console.log(typeof "Ahmed Khalil");
console.log(typeof "Ahmed Khalil");

console.log(5000);
console.log(typeof 5000);
console.log(typeof 5000.99);

console.log([10, 15, 17]);
console.log(typeof [10, 15, 17]);
console.log(["Os", "Ah", "Sa"]);
console.log(typeof ["Os", "Ah", "Sa"]);

console.log({ name: "ahmed", age: 19, country: "Eg" });
console.log(typeof { name: "ahmed", age: 19, country: "Eg" });

console.log(typeof false);
console.log(typeof true);

console.log(typeof undefined);
console.log(typeof null);

console.log("------------------------");

//---------------------------------------------------------------------------------
/*
vid 11
  Variables Intro
  - What is Variable?
  - Why We Use VAriables?
  - Declare A VAriable And Use
  - Syntax( Keyword | Variable Name | Assignment Operator | Variable Vaule)
  - Variable Without Var
  - Multiple VAriables in The Same Line
  - Id And Global VAriable 
  -* Loosely Typed vs Strongly Typed *        ***
*/

var user = "ahmed",
  age = 13;

console.log(user);
console.log(age);

// console.log(hello);
// hello.innerHTML = "Option";

//---------------------------------------------------------------------------------
/*
vid 12
  Identifiers
  - Name Converntions And Rules
  - Reserved Words
*/

var $_us = "Elsayed";
console.log($_us);

//---------------------------------------------------------------------------------
/*
vid 13
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefiend)
  - Variable Scope Drama [Added To Window] ()  ***
  - Block or Function Scope

  Let
  - Redeclare (No -> Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block or Function Scope

  Const
  - Redeclare (No -> Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block or Function Scope
*/
var a = 1;
var a = 1;
var a = 2;
console.log(a);

let b = 3;
// let b = 5;  //    we can't makee override
console.log(b);

const c = 4;
// const c = 5;      we can't makee override
console.log(c);

//---------------------------------------------------------------------------------
/*
vid 14
  String Syntax + Character Escape Sequences
  \ Escape + Line Continue
  \n
*/

console.log("Elzero Web 'School'");
console.log('Elzero Web "School"');
// console.log("Elzero Web \"School\"");
// console.log('Elzero Web \'School\'');
console.log("Elzero \\Web School\\");
console.log(
  "Elzero\
Web\
School"
);

console.log("Elzero\nWeb\nSchool");

//---------------------------------------------------------------------------------
/*
vid 15
  Concatenation

*/

let aa = "We Love";
let bb = "JavaScript";

console.log(aa + " " + bb);
console.log(aa, bb);

//---------------------------------------------------------------------------------
/*
vid 16
  Template Literals ( Template Strings )
*/

let q = "We Love";
let w = "JavaScript";
let e = "And";
let r = "Programming";

console.log(q + ' "" ' + w + "\n" + e + " " + r);

console.log(`${q} "${w}" 
${e} / \\ ${r}`);

//-----

// let title = "Elzero";
// let desc = "Elzero Web School";

// let markUp = `
// <div class = "card">
//   <div class = "child">
//     <h2>${title}</h2>
//     <p>${desc}</p>
//   </div>
// </div>
// `;

// document.write(markUp);

//---------------------------------------------------------------------------------
/*
vid 17 
*/

let pageTitle = "Elzero",
  descContent = "Elzero Web School",
  dateContent = "25/10";

let markUp2 = `
<div class="container">
  <h1> Hello ${pageTitle}</h1>
  <p>${descContent}</p>
  <span>${dateContent}</span>
</div>`;

// document.write(markUp2);
document.write(markUp2.repeat(3));

//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
