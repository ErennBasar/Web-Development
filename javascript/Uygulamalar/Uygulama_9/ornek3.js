let sayilar = [1, 5, 10, 7, 15, 3, 25, 20, 8, 2];

let toplam = 0;

for (let i in sayilar) {
  if (sayilar[i] % 2 == 0) {
    toplam += sayilar[i];
  }
}
console.log(toplam);
