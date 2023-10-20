/*
  089 - Create And Append Elements
  DOM [Create Elements]
  - createElement
  - createAttribute
  - createTextNode
  - createComment
  - appendChild
*/

let myElement = document.createElement("div");
myElement.className = "product";

let myAttr = document.createAttribute("data-custom");
myElement.setAttributeNode(myAttr);

let myText = document.createTextNode("Product One");
let myComment = document.createComment("This Is Div");

myElement.setAttribute("data-test", "Testing");

// Append Comment To Element
myElement.appendChild(myComment);

// Append Text To Element
myElement.appendChild(myText);

// Append Element To Body
document.body.appendChild(myElement);

// console.log(myElement);
