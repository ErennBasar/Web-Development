let meyve = ["Elma", "Armut", "Muz", "Çilek"];

sonuc = meyve.length; // 4

sonuc = meyve[0]; // Elma
sonuc = meyve[3]; // Çilek

sonuc = meyve.includes("Elma"); // true

sonuc = meyve.push("kiraz"); // 5 [ 'Elma', 'Armut', 'Muz', 'Çilek', 'kiraz' ]
//sonuc = meyve[4]; // kiraz

sonuc = meyve.splice(meyve.length - 2, 2);

console.log(sonuc);
console.log(meyve);
