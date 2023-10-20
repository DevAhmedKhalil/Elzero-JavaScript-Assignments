/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

setTimeout(() => {
  window.open("", "_blank", "", false);
}, 2000);

console.log("Done!");

setTimeout(() => {
  window.open(
    "https://google.com",
    "_self",
    "width=400,height=400,left=200,top=200",
  );
}, 3000);
