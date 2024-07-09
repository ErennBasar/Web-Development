let url = "https://www.sadikturan.com/";
let kursAdi = "komple web geliştirme kursu";

let sonuc;

sonuc = url.length;
console.log(sonuc);
sonuc = kursAdi.split(" ").length; // split() methodu stringi parçalara ayırır ve diziye atar
console.log(sonuc);
sonuc = url.startsWith("https");
if (sonuc) {
  console.log("url https ile başlıyor");
}
sonuc = kursAdi.includes("python");
console.log(sonuc);
kursAdi = kursAdi.replaceAll(" ", "-");
sonuc = url.concat(" ", kursAdi);
console.log(sonuc);
