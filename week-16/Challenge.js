let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// WAY 2:
chosenFun(myFriends);
function chosenFun(myFriends) {
  if (chosen > 0 && chosen <= myFriends.length) {
    const {
      title,
      age,
      available,
      skills: [, sk],
    } = myFriends[chosen - 1];

    console.log(`"${title}"`);
    console.log(age); // `` make is in console show string
    console.log(`${available ? "Available" : "Not Available"}`);
    console.log(`${sk}`);
  } else {
    console.log(`Choose Number From 1 to 3`);
  }
}

// WAY 1: EASY
// const [
//   {
//     title: t1,
//     age: a1,
//     available: av1,
//     skills: [, css1],
//   },
//   {
//     title: t2,
//     age: a2,
//     available: av2,
//     skills: [, css2],
//   },
//   {
//     title: t3,
//     age: a3,
//     available: av3,
//     skills: [, css3],
//   },
// ] = myFriends;

// fun(chosen);
// function fun(num) {
//   if (num === 1) {
//     console.log(`"${t1}"`);
//     console.log(`${a1}`);
//     console.log(`${av1 ? "Available" : "Not Available"}`);
//     console.log(`${css1}`);
//   }
//   if (num === 2) {
//     console.log(`"${t2}"`);
//     console.log(`${a2}`);
//     console.log(`${av2 ? "Available" : "Not Available"}`);
//     console.log(`${css2}`);
//   }
//   if (num === 3) {
//     console.log(`"${t3}"`);
//     console.log(`${a3}`);
//     console.log(`${av3 ? "Available" : "Not Available"}`);
//     console.log(`${css3}`);
//   }
// }
