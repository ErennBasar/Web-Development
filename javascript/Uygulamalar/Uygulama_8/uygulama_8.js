let siparis1 = {
  siparis_id: 101,
  siparis_tarih: "31.12.2022",
  siparis_odeme: "kredi kartı",
  kargo_adres: {
    mahalle: "yahya kaptan",
    ilce: "izmit",
    sehir: "kocaeli",
  },
  satin_Alinan_Urunler: [
    {
      id: 5,
      ad: "IPhone 13 Pro",
      url: "http://abc.com/iphone-13-pro",
      fiyat: 22000,
    },
    {
      id: 6,
      ad: "IPhone 13 Pro Max",
      url: "http://abc.com/iphone-13-pro-max",
      fiyat: 25000,
    },
  ],
  musteri: {
    id: 12,
  },
  satici: {
    firma_id: 34,
    firma_adi: "Apple Türkiye",
  },
};

let siparis2 = {
  siparis_id: 102,
  siparis_tarih: "31.12.2022",
  siparis_odeme: "kredi kartı",
  kargo_adres: {
    mahalle: "yahya kaptan",
    ilce: "izmit",
    sehir: "kocaeli",
  },
  satin_Alinan_Urunler: [
    {
      id: 6,
      ad: "IPhone 13 Pro Max",
      url: "http://abc.com/iphone-13-pro-max",
      fiyat: 25000,
    },
  ],
  musteri: {
    id: 21,
  },
  satici: {
    firma_id: 34,
    firma_adi: "Apple Türkiye",
  },
};
let kdv = 0.18;

let siparis1_toplam =
  siparis1.satin_Alinan_Urunler[0].fiyat +
  siparis1.satin_Alinan_Urunler[1].fiyat;

let siparis2_toplam = siparis2.satin_Alinan_Urunler[0].fiyat;

let siparis1_kdv = siparis1_toplam * kdv;
let siparis2_kdv = siparis2_toplam * kdv;

let siparis1_Kdv_fiyat = siparis1_toplam + siparis1_kdv;

let siparis2_Kdv_fiyat = siparis2_toplam + siparis2_kdv;

console.log(
  `\n siparis 1'in fiyatı: ${siparis1_Kdv_fiyat}\n siparis 1'in kdv'siz fiyat: ${siparis1_toplam}\n siparis 1'in KDV'si: ${siparis1_kdv} \n***********`
);
console.log(`KDV oranı: ${kdv} \n***********`);
console.log(
  ` siparis 2'in fiyatı: ${siparis2_Kdv_fiyat}\n siparis 2'in kdv'siz fiyat: ${siparis2_toplam}\n siparis 2'in KDV'si: ${siparis2_kdv}   \n*********** `
);
console.log(
  `siparislerin toplam fiyatı: ${siparis1_Kdv_fiyat + siparis2_Kdv_fiyat}`
);
