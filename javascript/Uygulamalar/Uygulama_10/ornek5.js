function toplam() {
  let sonuc = 0;

  for (let i = 0; i < arguments.length; i++) {
    sonuc += arguments[i];
  }
  return sonuc;
}

console.log(toplam(2, 5));
console.log(toplam(2, 5, 7));
console.log(toplam(2, 5, 7, 10));
console.log(toplam(2, 5, 7, 10, 14));
