/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";

let Reg = /(\bspam|spam\b)/gi; //spam4, spam5 ,,, 1spam, 2spam, 3spam
console.log(names.match(Reg));

console.log("pattern.test(input) =>", Reg.test(names));

console.log(/(\bspam|spam\b)/gi.test("Osama"));
console.log(/(\b\w+\b)/gi.test("Osama"));
console.log(/(\bspam|spam\b)/gi.test("1spam"));
console.log(/(\bspam|spam\b)/gi.test("spam1"));

console.log(names.match(/\b\w+\b/gi));
console.log(names.match(/\wspam\w/gi));
console.log(names.match(/A+\w+d/g));
console.log(names.match(/A+\w+D/g));
