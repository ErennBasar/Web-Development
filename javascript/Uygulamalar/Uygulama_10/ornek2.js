function dikdortgenCevre_Alan(kenar1, kenar2) {
  let cevre = kenar1 * 2 + kenar2 * 2;

  let alan = kenar1 * kenar2;

  return ` alan: ${alan}\n cevre: ${cevre}`;
}

console.log(dikdortgenCevre_Alan(5, 6));
