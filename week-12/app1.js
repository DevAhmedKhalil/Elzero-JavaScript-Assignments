/*
  086 - What Is DOM ? And Select Elements
  DOM
  - What Is DOM = Document Object Model
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

let myIdElement = document.getElementById("my-div");
console.log(myIdElement);

let myTagElements = document.getElementsByTagName("p");
console.log(myTagElements[1]);
myTagElements[1].innerHTML = "ahmed khalil";
console.log(myTagElements[1]);

let myClassElements = document.getElementsByClassName("my-span");
console.log(myClassElements);
console.log(myClassElements[1]);

let myQueryElement = document.querySelector(".special");
console.log(myQueryElement);

let myQuerySeletcor = document.querySelector(".my-span");
console.log(myQuerySeletcor);

let myQuerySeletcorAll = document.querySelectorAll(".my-span");
console.log(myQuerySeletcorAll);
console.log(myQuerySeletcorAll[1]);

console.log(document.title);
console.log(document.body);
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms[0].one);
console.log(document.forms[0].one.value);
console.log(document.forms[1].two.value);
console.log(document.links[0]);
console.log(document.links[0].href);

