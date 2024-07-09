let sayilar = [1, 5, 7, 15, 3, 25];

console.log(`5'in kati olan sayilar:`);

for (let sayi in sayilar) {
  if (sayilar[sayi] % 5 == 0) {
    console.log(sayilar[sayi]);
  }
}
