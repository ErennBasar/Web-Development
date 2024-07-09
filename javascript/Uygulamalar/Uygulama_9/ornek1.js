let sayilar = [1, 5, 7, 15, 3, 25];

console.log(`dizideki elemanlarin kareleri:`);

for (let i = 0; i < sayilar.length; i++) {
  let sonuc = sayilar[i] * sayilar[i];
  console.log(`${sayilar[i]}'in karesi: ${sonuc}`);
}
