// create h1 "Elzero"
document.write("<h1>Elzero</h1>");

document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";

//-----------------------------------------------------------

// print Elzero Web School in console
console.log(
  "%cElzero %cWeb %cSchool",
  "color:red; font-size:40px;",
  "color:green; font-weight: bold; font-size:40px;",
  "background-color:blue; font-size:40px;"
);

//-----------------------------------------------------------

console.group("group 1");
console.log("message one");
console.log("message two");
console.group("child group");
console.log("message one");
console.log("message two");
console.group("grand child group");
console.log("message one");
console.log("message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("message one");
console.log("message two");
console.groupEnd();

//-----------------------------------------------------------

console.table(["Elzero", "Ahmed", "Khalil", "Mohamed"]);
console.table(["yasmin", "ahmed"]);

//-----------------------------------------------------------

console.log("Iam In Console");
document.write("Iam In Page");
