function asalCarpan(sayi1) {
  let carpanlar = [];
  //let sonuc;
  let j = 2;

  //let count = 0;
  for (let i = 0; i < sayi1; i++) {
    while (sayi1 % j == 0) {
      sayi1 = sayi1 / j;
      carpanlar.push(j);
    }
    j++;
  }
  return carpanlar;
}

console.log(asalCarpan(1872));
