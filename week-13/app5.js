/*
  099 - DOM Cloning
  DOM [Cloning]
  - cloneNode(Deep)
*/

let myP = document.querySelector("P").cloneNode(true);
let myDiv = document.querySelector("div");

// let myP = document.querySelector("P").cloneNode(false);
// console.log(myP);

myP.id = `${myP.id}-cloned`;
myDiv.appendChild(myP);

//-----------------------------------------------------------------

/*
  100 - addEventListener
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

let myPara = document.querySelector("p");

myPara.onclick = function () {
  console.log("Message From OnClick");
};
// Override
myPara.onclick = one;
// Override
myPara.onclick = two;

function one() {
  console.log("Message From OnClick 1");
}

function two() {
  console.log("Message From OnClick 2");
}

//--------------------------------------------------------------

// window.onload = "Osama";

myPara.addEventListener("click", function () {
  console.log("Message From OnClick 1 Event");
});
myPara.addEventListener("click", one);
myPara.addEventListener("click", two);

// myPara.addEventListener("click", "string"); // Error

//--------------------------------------------------------------

let parag = document.querySelector(".my-p");

parag.onclick = function () {
  let newP = parag.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};

// // not loaded yet in windows
// let cloned = document.querySelector(".clone");  //Error
// cloned.onclick = function () {
//   console.log("iam Cloned");
// };

document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    // console.log(e.target);
    console.log("Iam Cloned");
  }
});
