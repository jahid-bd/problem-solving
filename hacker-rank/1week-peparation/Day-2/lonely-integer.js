// function lonelyinteger(a) {
//   // Write your code here
//   /**
//    * Start
//    * step-1 = unique = a[0]
//    * step-2 = a>loop
//    * step-3 = if(unique == item) > unique = unique
//    * step-4 = else > unique = item
//    */
//   let n = 0;
//   let unique = a[n];
//   let isDouble = false;

//   // for (i + 1; i < a.length; i++) {
//   //   if (unique === a[i]) {
//   //     unique = a[i + 1];
//   //     i = i + 1;
//   //   }
//   // }
//   // console.log(isDouble);

//   for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//       if (a[i] !== a[j]) {
//         unique = a[i];
//       } else {

//       }
//     }
//   }

//   console.log(unique);
// }

function lonelyinteger(a) {
  // Write your code here

  const arr = a.slice().short();

  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }

  // console.log(result);
}

// lonelyinteger([1, 2, 3, 4, 3, 1, 2, 3]);

function findNonRepeating(arr, n) {
  let res = 0;
  for (let i = 0; i < n; i++) res = res ^ arr[i];
  return res;
}

const arr = [1, 2, 3, 4, 3, 1, 2, 3];
let n = arr.length;

console.log(findNonRepeating(arr, n));
