/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

// this.close(); // main window

// THIS IS IN CONSOLE
window.scrollTo(500, 500);

window.scrollBy(500, 500);

window.scrollTo({
  left: 1500,
  top: 1200,
  behavior: "smooth",
});
