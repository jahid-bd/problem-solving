// function first() {
//   setTimeout(() => {
//     console.log("I am console after 2 second");
//   }, 2000);
// }

// function second() {
//   setTimeout(() => {
//     console.log("I am console after 3 second");
//   }, 3000);
// }

// function third() {
//   setTimeout(() => {
//     console.log("I am console after 5 second");
//   }, 5000);
// }

// first();
// second();
// third();

// function first(cb) {
//   setTimeout(() => {
//     console.log("1");
//     cb();
//   }, 5000);
// }

// function second(cb) {
//   setTimeout(() => {
//     console.log("2");
//     cb();
//   }, 2000);
// }

// function third() {
//   setTimeout(() => {
//     console.log("3");
//   }, 4000);
// }

// first(() => {
//   second(() => third());
// });

// let data;

// setTimeout(() => {
//   data = 'Data comes from server';
// }, 1000);

// console.log(data)

function first() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1");
    }, 5000);
  });

  return promise;
}

function second() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2");
    }, 2000);
  });

  return promise;
}

function third() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3");
    }, 4000);
  });

  return promise;
}

first()
  .then((v) => {
    console.log(v)
    return second()
  })
  .then((v) => {
    console.log(v)
    return third()
  })
  .then((v) => {
    console.log(v)
  })

async function test() {
  const step1 = await first();
  console.log(step1);
  const step2 = await second();
  console.log(step2);
  const step3 = await third();
  console.log(step3);
}

test();
