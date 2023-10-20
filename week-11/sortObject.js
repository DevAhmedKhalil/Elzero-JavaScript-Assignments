const people = [
  { id: 12, name: "Ahmed", dob: "1998-10-05" },
  { id: 5, name: "Yasmin", dob: "1993-02-15" },
  { id: 45, name: "zead", dob: "1996-01-31" },
  { id: 67, name: "bosy", dob: "1998-04-09" },
  { id: 89, name: "sohaila", dob: "1996-07-08" },
  { id: 34, name: "randa", dob: "1994-09-12" },
  { id: 234, name: "mohamed", dob: "2000-01-01" },
];

const log = console.log;

log(people);

log("---------------------");
log("Sort By Name :)");
log(people.sort(sortByName));
function sortByName(a, b) {
  // Alphabeticallly by name
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  } else {
    return 0;
  }
}

log("---------------------");
log("Sort By ID :)");
log(people.sort(sortById));

function sortById(a, b) {
  // numerically by id
  return parseInt(a.id) - parseInt(b.id);
}

log("---------------------");
log("Sort By Date :)");
log(people.sort(sortByDate));

function sortByDate(a, b) {
  // Chronologically by year, month, day
  return new Date(a.dob).valueOf() - new Date(b.dob).valueOf(); //timestamps
}

log("---------------------");
log("Sort By BirthDay (month, day) :)");
log(people.sort(sortByBirthday));

function sortByBirthday(a, b) {
  // by Month and then by Day
  let d1 = new Date(a.dob);
  let d2 = new Date(b.dob);
  console.log(d1.getDate(), d1.getUTCDate(), d1.getMonth(), d1.getUTCMonth())

  if (d1.getUTCMonth() > d2.getUTCMonth()) {
    return 1;
  } else if (d1.getUTCMonth() < d2.getUTCMonth()) {
    return -1;
  } else {
    // same month
    return d1.getUTCDate() - d2.getUTCDate();
  }
}
