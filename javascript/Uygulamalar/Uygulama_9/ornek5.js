let urunler = [
  "iphone 12",
  "iphone 13",
  "iphone 13 pro",
  " samsung s21",
  "samsung s23",
];
let count = 0;
for (let i in urunler) {
  if (urunler[i].includes("samsung")) {
    count++;
  }
}
console.log(count);
