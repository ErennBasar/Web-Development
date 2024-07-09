let ogrenciler = [
  { ad: "Ali", soyad: "Yılmaz", notlar: [60, 70, 60] },
  { ad: "Ayşe", soyad: "Demir", notlar: [80, 70, 80] },
  { ad: "Fatma", soyad: "Kara", notlar: [70, 70, 60] },
];

let ogr1_ort =
  (ogrenciler[0].notlar[0] +
    ogrenciler[0].notlar[1] +
    ogrenciler[0].notlar[2]) /
  3;
let ogr2_ort =
  (ogrenciler[1].notlar[0] +
    ogrenciler[1].notlar[1] +
    ogrenciler[1].notlar[2]) /
  3;
let ogr3_ort =
  (ogrenciler[2].notlar[0] +
    ogrenciler[2].notlar[1] +
    ogrenciler[2].notlar[2]) /
  3;
let ortalamalar = [ogr1_ort, ogr2_ort, ogr3_ort];

for (let i = 0; i < ortalamalar.length; i++) {
  if (ortalamalar[i] >= 70) {
    console.log(
      `${ogrenciler[i].ad} ${ogrenciler[i].soyad} ortalamasi : ${ortalamalar[
        i
      ].toFixed(0)}  Geçti`
    );
  } else {
    console.log(
      `${ogrenciler[i].ad} ${ogrenciler[i].soyad} ortalamasi : ${ortalamalar[
        i
      ].toFixed(0)}  Kaldı`
    );
  }
}
let toplam = 0;
for (let i in ortalamalar) {
  toplam += ortalamalar[i];
  sonuc = toplam / ortalamalar.length;
}
console.log("tum ogrencilerin not ortalamasi: " + sonuc.toFixed(0));
