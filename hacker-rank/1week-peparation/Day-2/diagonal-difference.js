// Hacker rank 1 week peparation day-2 diagonal-difference problem

function diagonalDifference(arr) {
  // Write your code here

  const diagonal1 = [];
  const diagonal2 = [];

  for (let i = 0; i < arr.length; i++) {
    diagonal1.push(arr[i][i]);
  }

  const reversedArr = arr.reverse();

  for (let j = 0; j < reversedArr.length; j++) {
    diagonal2.push(reversedArr[j][j]);
  }

  const diagonalsum1 = diagonal1.reduce((acc, cur) => acc + cur);
  const diagonalsum2 = diagonal2.reduce((acc, cur) => acc + cur);

  const result = Math.abs(diagonalsum1 - diagonalsum2);

  return result;
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);

// node diagonal-difference
