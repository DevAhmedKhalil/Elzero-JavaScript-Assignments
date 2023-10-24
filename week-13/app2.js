/*
  095 - ClassList Object and Methods
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

// <div class="one two show test" id="my-div">Div with many Classes</div>
let element = document.getElementById("my-div");

console.log(element);
console.log(element.classList);
console.log(typeof element.classList);

console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show"));

console.log(element.classList.item("0")); //index
console.log(element.classList.item("3")); //index

// when you click the div it will add two new classes
element.onclick = function () {
  // element.classList.add("add-one", "add-two"); // add classes
  // element.classList.remove("one", "add-two");  // remove classes
  element.classList.toggle("Osama"); // add,remove ONE class
  element.classList.toggle("test"); // add,remove ONE class
  // Toggle : add Osama => cause it not found,
  //          remove test => cause it Found
  //  And if you click again it will (toggle/Switch) again
};

//-----------------------------------------------------------------------
/*  
  096 - CSS Styling And Stylesheets
  DOM [CSS]
  - style
  - cssText
  - removeProperty(propertyName) [Inline, Stylesheet]
  - setProperty(propertyName, value, priority)
*/

let ele = document.querySelector(".show");

// inline style
ele.style.color = "red";
ele.style.fontWeight = "bold";
// cssText way
ele.style.cssText = "fontWeight: bold; color: green; opacity: 0.9;";
// removeProperty(propertyName) inline style
ele.style.removeProperty("color");
// setProperty(propertyName, value, priority) inline style
ele.style.setProperty("font-size", "40px", "important");

//--------------------------------------------------------------

// StyleSheet
console.log(document.styleSheets);
console.log(document.styleSheets[0].rules);
console.log(document.styleSheets[0].rules[0]);
console.log(document.styleSheets[0].rules[0].style);
// removeProperty()   // StyleSheet
document.styleSheets[0].rules[0].style.removeProperty("line-height");
document.styleSheets[0].rules[0].style.setProperty(
  "background-color",
  "red",
  "important"
);
