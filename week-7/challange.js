/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
  "Amera",
  "Sara",
  "Omnia",
];

document.write(`<div>We Have X Admins</div>`);

let count = 0;
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  count++;
}

document.write(`<div>We Have ${count} Admins</div>`);

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  document.write(`<hr>`);
  document.write(`<div>The admin for team ${i + 1} is ${myAdmins[i]}</div>`);
  document.write(`<h3>Team Members: </h3>`);

  let x = 0;
  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j].charAt(0) === myAdmins[i].charAt(0)) {
      document.write(`<div>-${++x} ${myEmployees[j]}</div>`);
    }
  }
}
