/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

// Creating Elements

let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraph = document.createElement("p");

// Creating Text
let headingText = document.createTextNode("Product Title");
let paragraphText = document.createTextNode("Product Description");

// Add headingText to Heading
myHeading.appendChild(headingText);

// Add Heading To Main Element(div)
myMainElement.appendChild(myHeading);

// Add paragraphText to Paragraph
myParagraph.appendChild(paragraphText);

// Add Paragraph To Main Element(div)
myMainElement.appendChild(myParagraph);

// Add Class 'product' to myMainElement(div)
myMainElement.className = "product";

// Append Element(div) To Body
document.body.appendChild(myMainElement);
