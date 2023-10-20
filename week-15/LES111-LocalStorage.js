/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set
window.localStorage.setItem("color", "red");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

console.log("#".repeat(20));

// // Remove One Item
// window.localStorage.removeItem("color");

// // Clear All Items
// window.localStorage.clear();

// Get Key
console.log(window.localStorage.key(0));
console.log(window.localStorage.key(1));
console.log(window.localStorage.key(2));

console.log("#".repeat(20));

// Set Color In Page
document.body.style.backgroundColor = window.localStorage.getItem("color");

console.log(window.localStorage);
console.log(typeof window.localStorage);
