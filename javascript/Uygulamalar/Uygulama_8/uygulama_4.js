let vize1 = 40;
let vize2 = 50;
let final = 60;
var ort = (vize1 + vize2 + final) / 3;

if (final >= 70) {
  console.log("Dersi başarıyla geçtiniz.");
} else if (ort >= 50 && final >= 50) {
  console.log("Dersi geçtiniz.");
} else {
  console.log("Dersi geçemediniz.");
}
