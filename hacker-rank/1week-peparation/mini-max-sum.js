//This is 1 week peparation day 1 second problem

/**
 * minumum = find out the minimum number from given array
 * maximum = find out the maximum number from the the given array
 * newArr = filter the array without minimum and maximum number
 * result1 = summing the filter array with minimum number
 * result2 = summing the filter array with maximum number
 */

function miniMaxSum(arr) {
  // Write your code here
  let miniNum = Math.min(...arr);
  let maxNum = Math.max(...arr);

  let newArr = [];

  if (miniNum === maxNum) {
    newArr = [...arr.slice(2)];
  } else {
    newArr = arr.filter((item) => item !== miniNum && item !== maxNum);
  }

  let sum = 0;

  newArr.map((item) => {
    sum += item;
  });

  const result1 = parseInt(sum) + parseInt(miniNum);
  const result2 = parseInt(sum) + parseInt(maxNum);

  console.log(`${result1} ${result2}`);
}

miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([5, 5, 5, 5, 5]);
