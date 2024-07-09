let user = {
  name: "eren",
  surname: "basar",
  age: 25,
  address: {
    city: "aydın",
    district: "efeler",
  },
  hobbies: ["music", "sport", "cinema"],
};

let sonuc;

sonuc = user.name;
sonuc = user.address.city;
sonuc = user.hobbies[1];

console.log(sonuc);
