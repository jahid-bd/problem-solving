for (let i = 1; i < 200; i++) {
  let onum = String(i);
  let cnum = onum.split("").reverse();

  let rnum = cnum.join('')

  if (onum == rnum) {
    console.log(i);
  }
}
