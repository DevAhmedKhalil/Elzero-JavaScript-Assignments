/* 
  092 - DOM Events
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus   *
  --- onblur    *
  --- onsubmit  *
*/

let myButton = document.getElementById("btn");
myButton.onclick = function () {
  console.log("IT juct Clicked pro!");
};

myButton.onmouseenter = function () {
  console.log("IT juct Enterd pro!");
};

myButton.onmouseleave = function () {
  console.log("IT juct Leaved pro!");
};

window.onscroll = function () {
  console.log("Scrolled");
};

window.onresize = function () {
  console.log("Resized");
};
