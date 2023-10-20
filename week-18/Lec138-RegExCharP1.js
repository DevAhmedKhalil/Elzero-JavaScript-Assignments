/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org _ \n1@1.com";

let dot = /./g;
console.log("Dot =>", email.match(dot));

let NOTdot = /./g;
console.log("NOTdot =>", email.match(NOTdot));

let word = /\w/g;
console.log("word =>", email.match(word));

let NOTword = /\W/g;
console.log("NOTword =>", email.match(NOTword));

let valid = /\w@\w.(com|net)/g;
console.log("valid Email =>", email.match(valid));

let digit = /\d/g;
console.log("digit =>", email.match(digit));

let NOTdigit = /\D/g;
console.log("NOTdigit =>", email.match(NOTdigit));

let spaces = /\s/g;
console.log("spaces =>", email.match(spaces));

let NOTspaces = /\S/g;
console.log("NOTspaces =>", email.match(NOTspaces));
