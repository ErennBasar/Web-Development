let ogrenci1 = ["Yiğit Bilgi", 2010, [70, 60, 80]];
let ogrenci2 = ["Ada Bilgi", 2012, [80, 80, 90]];
let ogrenci3 = ["Ahmet Turan", 2009, [60, 60, 70]];

let ogrenciler = [ogrenci1, ogrenci2, ogrenci3];

let ogrenci1_Yas = new Date().getFullYear() - ogrenciler[0][1];
let ogrenci2_Yas = new Date().getFullYear() - ogrenciler[1][1];
let ogrenci3_Yas = new Date().getFullYear() - ogrenciler[2][1];

let ogr1_NotOrt =
  (ogrenciler[0][2][0] + ogrenciler[0][2][1] + ogrenciler[0][2][2]) / 3;
let ogr2_NotOrt =
  (ogrenciler[1][2][0] + ogrenciler[1][2][1] + ogrenciler[1][2][2]) / 3;
let ogr3_NotOrt =
  (ogrenciler[2][2][0] + ogrenciler[2][2][1] + ogrenciler[2][2][2]) / 3;

console.log(
  `yigit'in yaşı: ${ogrenci1_Yas}\nAda'nın yaşı: ${ogrenci2_Yas} \n Ahmet'in yaşı: ${ogrenci3_Yas}`
);

console.log("*****************");

console.log(
  `yigit'in not ortalaması: ${ogr1_NotOrt} \n Ada'nın not ortalaması: ${ogr2_NotOrt.toFixed(
    0
  )} \n Ahmet'in not ortalaması: ${ogr3_NotOrt.toFixed(0)}`
);
