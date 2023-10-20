/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

window.localStorage.setItem("color", "red");
window.sessionStorage.setItem("color", "blue");

if (window.sessionStorage.getItem("input-name")) {
  document.querySelector(".name").value =
    window.sessionStorage.getItem("input-name");
}

document.querySelector(".name").onblur = function () {
  console.log(this);
  console.log(this.value);

  window.sessionStorage.setItem("input-name", this.value);
};
