/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format:
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"  GMT+0200 => {6:10:00 + 02:00:00} = 8:10:00
  - "1982-10-25T06:10:00"   
*/

console.log(Date.parse("Mar 3 2003")); // 1046642400000

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(1046642400000); // Mon Mar 03 2003 00:00:00 GMT+0200
console.log(date2);

let date3 = new Date("3-3-2003"); // Mon Mar 03 2003 00:00:00 GMT+0200
console.log(date3);

let date4 = new Date("2001-12-15"); // Sat Dec 15 2001 02:00:00 GMT+0200
console.log(date4);

let date5 = new Date("2003-3");
console.log(date5);

let date6 = new Date("95");
console.log(date6);

let date7 = new Date("1995");
console.log(date7);

let date8 = new Date(2003, 2, 28, 2, 10, 13); //Fri Mar 28 2003 02:10:13 GMT+0200
console.log(date8);

let date9 = new Date("2003-02-28T05:10:44Z"); // Fri Feb 28 2003 07:10:44 GMT+0200
console.log(date9);

let date10 = new Date("2003-02-28T05:10:44"); // Fri Feb 28 2003 05:10:44 GMT+0200
console.log(date10);
