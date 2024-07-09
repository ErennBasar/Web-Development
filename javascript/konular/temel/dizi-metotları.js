let ogrenciler = ["engin", "derin", "salih"];

sonuc = ogrenciler.length; // 3
// array to string
sonuc = ogrenciler.toString(); // engin,derin,salih

sonuc = ogrenciler.join(" - "); // engin - derin - salih

sonuc = ogrenciler.pop(); // salih (son elemanı çıkarır ve geri döndürür)

sonuc = ogrenciler.shift(); // engin (ilk elemanı çıkarır ve geri döndürür)

sonuc = ogrenciler.push("emel"); // 2 (dizinin sonuna eleman ekler ve dizinin yeni uzunluğunu döndürür)

sonuc = ogrenciler.unshift("hakan"); // 3 (dizinin başına eleman ekler ve dizinin yeni uzunluğunu döndürür)

let markalar1 = ["mazda", "bmw"];
let markalar2 = ["mercedes", "audi"];
let markalar3 = ["fiat", "renault"];

sonuc = markalar1.concat(markalar2, markalar3); // ["mazda", "bmw", "mercedes", "audi", "fiat", "renault"]

markalar1.splice(1, 0, "opel"); // ["mazda", "opel", "bmw"]

console.log(sonuc);
//console.log(ogrenciler);
