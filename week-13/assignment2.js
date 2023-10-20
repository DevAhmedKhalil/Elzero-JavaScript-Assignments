
// CHALLENGE ***

const app = () => {
  const inputFields = document.querySelectorAll("input");
  const currentElement = document.querySelector(".assign > div:first-of-type");
  const allClasses = document.querySelector(".classes-list > div");

  // a function for show all of the aviliable classes on the current element
  function showClasses() {
    if (currentElement.classList.value !== "") {
      allClasses.innerHTML = "";
      currentElement.classList.value
        .split(" ")
        .sort()
        .forEach((cls) => {
          let curClass = document.createElement("span");
          let curText = document.createTextNode(cls);
          curClass.append(curText);
          allClasses.append(curClass);
        });
    } else {
      allClasses.innerHTML = "No Classes To Show";
    }
  }

  // Call hte showClasses function to make classes visiable at first.
  showClasses();

  inputFields.forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.value.trim() !== "") {
        this.value
          .trim()
          .split(" ")
          .forEach((cls) => {
            this.className === "classes-to-add"
              ? currentElement.classList.add(cls.toLowerCase())
              : currentElement.classList.remove(cls.toLowerCase());
          });
        this.value = "";
        showClasses();
      }
    });
  });
};

app();