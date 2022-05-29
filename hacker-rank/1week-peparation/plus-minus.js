// This is hacker rank 1 week preparation kit problem
// link : https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

function plusMinus(arr) {
  // Write your code here
  const length = arr.length;
  let positiveNum = 0;
  let negetiveNum = 0;
  let zoroNum = 0;

  arr.map((item) => {
    if (item > 0) {
      positiveNum += 1;
    } else if (item < 0) {
      negetiveNum += 1;
    } else {
      zoroNum += 1;
    }
  });

  const result1 = positiveNum / length;
  const result2 = negetiveNum / length;
  const result3 = zoroNum / length;

  console.log(
    `${result1.toFixed(6)}\n${result2.toFixed(6)}\n${result3.toFixed(6)}`
  );
}

const arr = [1, 1, 0, -1, -1];

plusMinus(arr);
