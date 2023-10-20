/*
  098 - DOM Traversing
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/

let span = document.querySelector(".two");
console.log(span.nextSibling);
console.log(span.nextElementSibling);

console.log(span.previousSibling);
console.log(span.previousElementSibling);

span.onclick = function () {
  span.parentElement.style.opacity = "0";
  // span.parentElement.remove();
};
