/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/

console.log(document.getElementsByTagName("p"));
console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementsByTagName("p")[0];

console.log("-----------------------------------");
if (myP.hasAttribute("data-src")) {
  // console.log("FOUND");
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "newValue");
  }
} else {
  console.log("NOT FOUND");
}

console.log("-----------------------------------");
if (myP.hasAttributes()) {
  console.log(`Has Attributes`);
}

console.log("-----------------------------------");
if (document.getElementsByTagName("div")[0].hasAttributes()) {
  console.log(`Has Attributes`);
} else {
  console.log(`Div has no Attributes`);
}
console.log("-----------------------------------");
console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByTagName("div")[0]);
console.log(document.getElementsByTagName("div")[1]);
