/*
  097 - Before, After, Prepend, Append, Remove
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

let element = document.getElementById("my-div");
let createdP = document.createElement("p");

// element.before("HEllO From JS");
// element.after("HEllO From JS");

element.after(createdP);
element.before(createdP);

// element.prepend("Hello prepend");
// element.append("Hello append");
// element.prepend(createdP);
// element.append(createdP);

// Delete Element form DOM Tree ***
// element.remove();
// display: none;       [ css ] ***