// yıldızdan üçgen yapma

// 1. Yöntem
/*
let rows = 5;

let yildiz = "";
for (let i = 0; i < rows; i++) {
  yildiz += "*";
  console.log(yildiz);
}
  */

// 2. Yöntem
/*
let rows = 10;

for (let i = 1; i <= rows; i++) {
  let yildiz = "";
  for (let j = 1; j <= i; j++) {
    yildiz += "*";
  }
  console.log(yildiz);
} 
  */

let sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let toplam = 0;

for (let i in sayilar) {
  toplam += sayilar[i];
  console.log(sayilar[i]);
}
console.log(`sayilarin toplami: ${toplam}`);

let user = {
  name: "eren",
  username: "erenb09",
  password: "12345",
};

for (let k in user) {
  console.log(k, user[k]);
}
