function tamBolemler(sayi) {
  let bolensayilar = [];

  let count = 0;

  for (let i = 2; i <= sayi; i++) {
    if (sayi % i == 0) {
      bolensayilar.push(i);
      count++;
    }
  }
  if (count == 1) {
    console.log(`asal sayi`);
  }
  return bolensayilar;
}

console.log(tamBolemler(1872));
