/*
  093 - Validate Form And Prevent Default
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

let userInput = document.querySelector("[name='username']");
// console.log(userInput);
let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
    console.log(userInput.value + " -> User Input VALID :)");
  } else {
    console.log("User Input NOT VALID :(");
  }

  if (ageInput.value !== "") {
    ageValid = true;
    console.log(ageInput.value + " -> 'Age' Input VALID :)");
  } else {
    console.log("Age Input NOT VALID :(");
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault(); // form will not submit
    // console.log(e);
  }
};

//----------------------------------------------
// Links => Google
console.log(document.links);
console.log(document.links[0]);

document.links[0].onclick = function (event) {
  console.log(event);
  event.preventDefault(); // stop opening google website
};
