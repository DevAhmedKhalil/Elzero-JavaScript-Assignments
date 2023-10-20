// Assignment 1:
console.log("Assignment 1:", "-".repeat(20));

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let ipRegEx = /\d{4}:\w{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/gi;
console.log(ip.match(ipRegEx));

let ipRegEx2 = /\d{4}:\w{3}:(\d{4}:)+\d+/gi;
console.log(ip.match(ipRegEx2));

let ipRegEx3 = /(\w+:\w+:?)/gi;
console.log([ip.match(ipRegEx3).join("")]);

let ipRegEx4 = /(\d{4}|\w{2}\d{1}):?/gi;
console.log(ip.match(ipRegEx4));

// Assignment 2:
console.log("Assignment 2:", "-".repeat(20));

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let namesRegEx1 = /os(\d+|)o/gi;
console.log(specialNames.match(namesRegEx1));

let namesRegEx2 = /os(\d+)?o/gi;
console.log(specialNames.match(namesRegEx2));

// Output
// ['Os10O', 'OsO', 'Os100O']

// Assignment 3:
console.log("Assignment 3:", "-".repeat(20));

let phone = "+(995)-123 (4567)";

let phoneReEx = /\+\(\d{3}\)-\d{3} \(\d{4}\)/gi;
console.log(phone.match(phoneReEx));

// Assignment 4:
console.log("Assignment 4:", "-".repeat(20));

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
console.log(re);
/*
  https?:\/\/___(?:[-\w]+\.)?___([-\w]+)\.\w+___(?:\.\w+)?___\/?.*
  1-https?:\/\/ ==> http// ,, https// ==> U can write s or don't
  2-(?:[-\w]+\.) => if after (https://) matched but,
  does not create the non capturing group (?:) list characters([-\w]\.)
  ?: => not capturing group
  [-/w]+ => list characters
  ? => access or not
  3-([-\w]+)\.\w+ => 'https://elzero.org' check listChars(elzero) and . and 
  one or more character
  ([-\w]+) => list characters
  \. => .
  \w+ => one or more char
  4-(?:\.\w+)? => none capturing group of dot and one or more chars
  ?: => non capturing group
  \. => .
  \w+ => one or more char
  5-\/?.* => 
  \/? => / write it or not
  .* => . any character ,, * zero or more
  EX::
  http://elzero.org
  https://elzero.org
  https://elzero.net
  https://elzero.web.school.org/aAFGDFdsjhfjas
*/

// Assignment 5:
console.log("Assignment 5:", "-".repeat(20));

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let reg = /(\d+(\/|\s(-)?\s?)\d+(\/|\s(-)?\s?)\d+)/; // Write Pattern Here

console.log(date1.match(reg)); // "25/10/1982"
console.log(date2.match(reg)); // "25 - 10 - 1982"
console.log(date3.match(reg)); // "25 10 1982"
console.log(date4.match(reg)); // "25 10 82"

// Assignment 6: CHALLENGE
console.log("Assignment 5:", "-".repeat(20));

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let regEx = /(https?:\/\/)?(www.)?\w+.\w+(:\d{4}\/\w+.\w+\?\w+=\d+&\w+=\w+)?/; // Write Your Pattern Here

console.log(url1.match(regEx));
console.log(url2.match(regEx));
console.log(url3.match(regEx));
console.log(url4.match(regEx));
console.log(url5.match(regEx));
