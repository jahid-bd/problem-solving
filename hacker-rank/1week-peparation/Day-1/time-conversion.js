//This is 1 week peparation day 1 second problem
// Time Conversion

function timeConversion(s) {
  // Write your code here
  const inputArr = s.split(":");
  const hour = inputArr[0];
  const miniute = inputArr[1];
  const sAndF = inputArr[2].split("");
  const second = sAndF.slice(0, 2).join("");
  const format = sAndF.slice(2, 4).join("");

  let outputHour = null;

  if (format === "AM" && hour === "12") {
    outputHour = "00";
  } else if (format === "AM") {
    outputHour = hour;
  }

  if (format === "PM" && hour === "12") {
    outputHour = "12";
  } else if (format === "PM") {
    outputHour = String(Number(hour) + 12);
  }

  return `${outputHour}:${miniute}:${second}`;
}

console.log(timeConversion("1:05:45AM"));
