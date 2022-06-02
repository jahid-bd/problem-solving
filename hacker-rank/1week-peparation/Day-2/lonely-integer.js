// Hacker rank 1week peparation day-2 lonely-integer problem

function lonelyinteger(a) {
  // Write your code here

  let count = 1;

  const arrObj = a.reduce((acc, cur) => {
    acc[cur] = 0;

    return acc;
  }, {});

  for (key in arrObj) {
    a.map((item) => {
      if (item == key) {
        arrObj[key] = count++;
      }
    });
    count = 1;
  }

  // let result = [];
  let result = "";

  for (key in arrObj) {
    if (arrObj[key] < 2) {
      // result.push(key);
      result = key;
    }
  }

  // console.log(result);

  return result;
}

const lonelyItem = lonelyinteger([1, 2, 3, 4, 3, 1, 2, 3]);

console.log(lonelyItem);

// node lonely-integer
