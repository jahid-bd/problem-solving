// function getPrice(x, y) {
//   parseInt(x);
//   parseInt(y);
//   let price = 0;

//   switch (x) {
//     case 1:
//       price = 4.0;
//       break;
//     case 2:
//       price = 4.5;
//       break;
//     case 3:
//       price = 5.0;
//       break;
//     case 4:
//       price = 2.0;
//       break;
//     case 5:
//       price = 1.5;
//       break;
//   }
//   const total = y * price;
//   total.toFixed(2);

//   console.log(`Total : R$ ${total}`);
// }

// getPrice(2, 3);

const value = 400;

const years = Math.floor(value / 365);

const months = Math.floor((value - years * 365) / 30);

const days = value - (years * 365 + months * 30);

console.log(`${years} ano(s)`);

console.log(`${months} mes(es)`);

console.log(`${days} dia(s)`);
