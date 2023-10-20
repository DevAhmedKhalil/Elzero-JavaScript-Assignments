
/*
vid 18
Arithmetic Operators
  + Addition
  - Subtraction 
  * Multiplication
  / Division
  ** Exponentiation (ES7)  ELOS
  % Modulus (Division Remainder)
  ++ Increment [Post / Pre]
  -- Decrement [Post / Pre]
*/
console.log(10 + 20);
console.log(10 + "Osama");

console.log(10 - 20);
console.log(10 - "Osama"); // NaN
console.log(typeof NaN);

console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);

console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);

console.log(10 % 2);
console.log(11 % 2); // Remove 1

//---------------------------------------------------------------------------------

/*
vid 19

/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/

console.log("---------------------------------------");
console.log(+100);
console.log(+"100");
console.log("100");
console.log(+"-100");
console.log(+"Osama");
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);

console.log("---------------------------------------");
console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Osama");
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("100"));

//---------------------------------------------------------------------------------

/*
vid 20
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/

let aaa = "100";
let bbb = 20;
let ccc = true;

console.log("---------------------------------------");
console.log(aaa - bbb);
console.log(+"");
console.log(-"");
console.log(+false - +true);
console.log(+false - -true);
console.log(false - true);
console.log(aaa + bbb + ccc);
console.log(+aaa + bbb + ccc);

//---------------------------------------------------------------------------------

/*
vid 21
  Assignment Operators
*/

console.log("---------------------------------------");
// let a = 10;

// a = a + 20;

// a = a + 70;

// a += 100; // a = a + 100

// a -= 50; // a = a - 50

// a /= 50; // a = a / 50

//---------------------------------------------------------------------------------
/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;
console.log(++a + +b++ + +c++ - +a++);
// 11 + 20 + 80 - 11 = 100
/*
a = 12
b = 21
c = 81
*/
console.log(++a + -b + +c++ - -a++ + +a);
// 13 + -21 + 81 - -13 + 14 = 100
/*
a = 14
b = 21
c = 82
*/
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// 81 + 21 + 13 * 21  - 22 * 13 + 12 - 1 = 100
/*
c = 81
b = 22
a = 12
*/


/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(-d + (f+(+e * 2) + 3*+g)); // 173
