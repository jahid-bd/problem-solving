// function GCD(a, b) {
//   const aMultipurs = multiper(a);
//   const bMultipurs = multiper(b);

//   const sameMultipurs = [];

//   for (let i = 0; i < aMultipurs.length; i++) {
//     for (let j = 0; j < bMultipurs.length; j++) {
//       if (aMultipurs[i] == bMultipurs[j]) {
//         sameMultipurs.push(aMultipurs[i]);
//       }
//     }
//   }

//   let result = ''

//   for(let i = 0; i < sameMultipurs.length; i++){
//     let temp = 0

//     if(sameMultipurs[i] > temp){
//       temp = sameMultipurs[i]
//     }
//     result = temp;
//   }

//   return result;

// }

// function multiper(n) {
//   const arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// function GCD(a, b) {
//   let n = a > b ? b : a;

//   let result = null;

//   if(a % b == 0){
//     result = b
//     return result;
//   }else if(b % a == 0){
//     result = a;
//     return result;
//   }

//   for (let i = 1; i < n; i++) {
//     if (a % i == 0 && b % i == 0) {
//       let temp = i;
//       if (temp < i) {
//         temp = i;
//       }
//       result = temp;
//     }
//   }
//   return result;
// }

function GCD(a, b) {
  if (a % b == 0) {
    return b;
  }
  return GCD(b, a % b);
}

console.log(GCD(32, 24));
