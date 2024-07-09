function yaziTura() {
  let countYazi = 0;
  let countTura = 0;

  for (let i = 0; i < 100; i++) {
    let random = Math.floor(Math.random() * 10);

    console.log("rastgele sayi : " + random);

    if (random < 5) {
      countYazi++;
      console.log("yazı");
    } else {
      countTura++;
      console.log("tura");
    }
  }
  console.log(`yazi sayisi: ${countYazi}\ntura sayisi: ${countTura} `);
}
yaziTura();
