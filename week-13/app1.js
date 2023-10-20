/* 
  094 - Event Simulation – Click, Focus, Blur
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

let two = document.querySelector(".two");
// focus on input nub two => when window uploaded
window.onload = function () {
  two.focus();
};

let one = document.querySelector(".one");
one.onblur = function () {
  document.links[0].click();
};
