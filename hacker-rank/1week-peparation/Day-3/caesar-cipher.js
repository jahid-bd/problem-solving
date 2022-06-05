/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

// Original alphabet:      abcdefghijklmnopqrstuvwxyz
// Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

// Sample Input : middle-Outz, 2
// Sample Output : okffng-Qwvb

/**
 * To Do
 * put alfabest in a position -> make a alfabiticlal array
 *
 */

function caesarCipher(s, k) {
  // Write your code here
  const alfabet = "abcdefghijklmnopqrstuvwxyz";
  const alfaArray = alfabet.split("");
  const upperCaseArr = alfabet.toUpperCase().split("");
  const inputArr = s.split("");

  const rotatedArr = [...alfaArray];

  for (let i = 0; i < k; i++) {
    rotatedArr.push(rotatedArr.shift());
  }

  const resultObj = inputArr.reduce((acc, cur) => {
    acc[cur] = cur;
    alfaArray.map((item, index) => {
      if (item == cur) {
        acc[item] = rotatedArr[index];
      }
    });

    upperCaseArr.map((item, index) => {
      if (item == cur) {
        acc[item] = rotatedArr[index].toUpperCase();
      }
    });

    return acc;
  }, {});

  const result = [];

  inputArr.map((item) => {
    Object.entries(resultObj).forEach(([key, value]) => {
      if (item == key) {
        result.push(value);
      }
    });
  });

  return result.join("");
}

console.log(caesarCipher("www.abc.xy", 87));

// node caesar-cipher
