/*
  Regular Expression

  - replace
  - replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";

console.log(txt.replace("@", "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));

let re = /@/gi;
console.log(txt.replaceAll(re, "java-script"));
console.log(txt.replaceAll(/@/gi, "java-script"));
