let tarih = new Date();

sonuc = tarih;
sonuc = tarih.getDate(); // gün
sonuc = tarih.getDay(); // haftanın günü
sonuc = tarih.getFullYear(); // yıl
sonuc = tarih.getHours(); // saat
sonuc = tarih.getMinutes(); // dakika
sonuc = tarih.getSeconds(); // saniye
sonuc = tarih.getTime(); // milisaniye cinsinden tarih

console.log(sonuc);
console.log(typeof sonuc);
