// التكليف 01

// Add Variables Here
var numberOne = 10;
var numberTwo = 20;
// Output
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberTwo + "\n" + numberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne}`);
/*
  Template Literals Way
  20
  10
*/

// التكليف 02
console.log("===============================");
console.log(elzeroID.innerHTML); // object
console.log(typeof elzeroID); // object

helloID.innerHTML = "Option";
console.log(helloID);

//التكليف  03
console.log("===============================");
console.log(`\`I'm In 
\\\\
Love \\\\ """ '''
++ With ++
\\"""\\"""
""JavaScript""\`\`
`);

// التكليف 04
console.log("===============================");
let x = 21;
let y = 20;
let z = ("_" + y + x + "_").repeat(3); //_2021_2021_2021_

console.log("_" + x + z + y + "_"); // _21_2021_2021_2021_20_
//---------------------------------------------------------------
