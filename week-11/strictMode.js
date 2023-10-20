//Strict Mode
//Sloppy Mode = non strict mode

//1
// "use strict";
// x = 5;
// strict mode you must define variable by var or let or const
// console.log(x);

//2
// "use strict";
// function f(y, y) {
//   //Strinct mode Error"Duplicate parameter name not allowed in this context"
//   console.log(y);
// }
// f(2, 4);

//3
// "use strict";
// function Constructor() {
//   this.v = 5;
// }
// let o = new Constructor();
// //Cannot set properties of undefined (setting 'v') // new KEYWORK
// console.log(o.v);

//4
// "use strict";
// let s = "hello";
// // s.length = 10;  // this line not affect the code But compiler don't !!Warnning 
// console.log(s.length);


