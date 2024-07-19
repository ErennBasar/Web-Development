var a = 5;
var b = "a";
var c = true;
var d;
var e = [1, 2, 3];
var f = [1, 2, 3];
var g = [1, "a", true];
var h = ["a", 5, false]; //tuple
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 10] = "kredi";
    Payment[Payment["havale"] = 11] = "havale";
    Payment[Payment["eft"] = 12] = "eft";
})(Payment || (Payment = {}));
var payment = Payment.havale;
console.log(payment);
