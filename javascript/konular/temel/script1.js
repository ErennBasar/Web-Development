let yil = new Date().getFullYear();

var ogr1_isim = "Ada Bilgi";
var ogr1_dt = "2012";
var ogr1_matNot1 = 70;
var ogr1_matNot2 = 70;
var ogr1_matNot3 = 80;
var ogr1_yas = yil - Number(ogr1_dt);
var ogr1_ort = (ogr1_matNot1 + ogr1_matNot2 + ogr1_matNot3) / 3;
console.log("isim: " + ogr1_isim);
console.log("yas: " + ogr1_yas);
console.log("ortalama: " + ogr1_ort);
console.log(ogr1_ort >= 50 ? "Durum: Geçti" : "Durum: Kaldı");
console.log("***********************");

var ogr2_isim = "Cemil Bilgi";
var ogr2_dt = "2010";
var ogr2_matNot1 = 40;
var ogr2_matNot2 = 40;
var ogr2_matNot3 = 50;
var ogr2_yas = yil - Number(ogr2_dt);
var ogr2_ort = (ogr2_matNot1 + ogr2_matNot2 + ogr2_matNot3) / 3;
console.log("isim: " + ogr2_isim);
console.log("yas: " + ogr2_yas);
console.log("ortalama: " + ogr2_ort);
console.log(ogr2_ort >= 50 ? "Durum: Geçti" : "Durum: Kaldı");
