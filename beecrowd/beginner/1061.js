// const inputA1 = "Dia 5";
// const inputB1 = "08 : 12 : 23";

// const inputA2 = "Dia 9";
// const inputB2 = "06 : 13 : 23";

const inputA1 = "Dia 5";
const inputB1 = "10 : 30 : 50";

const inputA2 = "Dia 9";
const inputB2 = "10 : 10 : 20";

const sDate = inputA1.split(" ")[1];
const sHrs = inputB1.split(":")[0];
const sMins = inputB1.split(":")[1];
const sSecs = inputB1.split(":")[2];

const eDate = inputA2.split(" ")[1];
const eHrs = inputB2.split(":")[0];
const eMins = inputB2.split(":")[1];
const eSecs = inputB2.split(":")[2];

let days = 0;
let hrs = 0;
let mins = 0;
let secs = 0;

if (eHrs < sHrs) {
  hrs = 24 - (sHrs - eHrs);
  days = eDate - sDate - 1;
} else if (sHrs == eHrs) {
  hrs = 0;
  days = eDate - sDate;
} else {
  hrs = sHrs - eHrs;
  days = eDate - sDate;
}

if (eMins < sMins) {
  mins = 60 - (sMins - eMins);
} else if (sMins == eMins) {
  mins = 0;
} else {
  mins = eMins - sMins;
}

if (eSecs < sSecs) {
  secs = 60 - (sSecs - eSecs);
} else if (sSecs == eSecs) {
  secs = 0;
} else {
  secs = eSecs - sSecs;
}

console.log(
  `${days} dia(s) \n${hrs} hora(s) \n${mins} minuto(s) \n${secs} segundo(s)`
);
