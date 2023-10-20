// Assignment Link ==> https://elzero.org/javascript-bootcamp-assignments-lesson-from-086-to-093/

// Challenge :

let app = () => {
  const form = document.forms[0];
  const numOfElements = document.querySelector("form input[type='number']");
  const text = document.querySelector("form input[type='text']");
  const type = document.querySelector("form select");
  const result = document.querySelector("form .results");

  form.onsubmit = (event) => {
    // Prevent the default act for a form when submit it (refresh and empty the fields).
    event.preventDefault();

    // Remove all childs of the result element. ***
    document.querySelectorAll(".results .box").forEach((box) => box.remove());

    if (numOfElements.value !== "" && text.value.trim() !== "") {
      if (numOfElements.value > 0) {
        for (let i = 0; i < numOfElements.value; i++) {
          let box = document.createElement(type.value);
          box.className = "box";
          box.title = "Element";
          box.id = `id-${i + 1}`; //****
          let boxText = document.createTextNode(text.value);

          box.appendChild(boxText);
          result.appendChild(box);
        }
      } else {
        alert("Number of Elements shoud be greater than 0");
      }
    } else {
      alert("Please fill in all the required fields.");
    }
  };
};

app();
