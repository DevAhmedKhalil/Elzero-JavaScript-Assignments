// vid 6
// Wait The Window To Load
window.onload = function () {
  // Single Line Comment
  document.querySelector("h1").style.color = "Blue"; // Single Line Comment
};

// Single Line Comment
// Single Line Comment
// Single Line Comment

/* Single Line Comment */

/*
    1
    2
    3
    4
    5
  */

// Ctrl + /

//-----------------------------------------------------------
//7
/*
  Output To Screen
  - window.alert()
  - document.write()
  - console.log()

  Syntax
*/

window.alert("Hello From JS File");

document.write("<h1>Hello <span>Page</span></h1>");

console.log("Hello From JS File");

//------------------------------------------------------------
//8
/*
  Console Methods
  - log
  - error
  - table

  Web API

  Styling Console
  - Directive %c
*/

console.log("Log");
console.error("Error");
console.table(["Osama", "Ahmed", "Sayed"]);

console.log(
  "Hello From %cJS %cFile",
  "color: red; font-size: 40px",
  "color: blue; font-size: 20px"
);

//--------------------------------------------------------------
//9
/*
  Console Methods
  - log
  - error
  - table

  Web API => console

  Styling Console
  - Directive %c
*/
console.log("Log");
console.error("Error");
console.table(["Osama", "Ahmed", "Sayed"]);

console.log(
  "Hello From %cJS %cFile",
  "color: red; font-size: 40px",
  "color: blue; font-size: 40px"
);
