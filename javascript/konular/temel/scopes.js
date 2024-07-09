var isim = "ahmet"; //global scope

function yazdir() {
  var isim = "ayse";
  var yas = 20;
  console.log("function scope: " + isim + yas);
}

if (true) {
  var isim = "mehmet"; //Let isim = "mehmet"; şeklinde tanımlansaydı isim değişkeni global scope'ta tanımlanmış olacaktı.
  // var ile tanımlanan değişkenler global scope'ta tanımlanır.

  // let ve const ile tanımlanan değişkenler block scope'ta tanımlanır.

  var cinsiyet = "erkek";
  console.log("if scope: " + isim);
}

console.log(isim);
yazdir();
