function yakalamaZamani(hiz1, hiz2) {
  // İlk yarışmacının hızını metre/saniye cinsinden hesaplayın
  let hiz1MetreSaniye = (hiz1 * 1000) / 3600;

  // İkinci yarışmacının hızını metre/saniye cinsinden hesaplayın
  let hiz2MetreSaniye = (hiz2 * 1000) / 3600;

  // İkinci yarışmacının ilk yarışmacıyı yakalama süresini hesaplayın
  let yakalamaSuresi = 1 / (hiz2MetreSaniye - hiz1MetreSaniye);

  // Sonucu döndürün
  return yakalamaSuresi;
}

// İlk yarışmacının hızı 15 km/saat ve ikinci yarışmacının hızı 20 km/saat olsun
let ilkYarismaciHizi = 15;
let ikinciYarismaciHizi = 20;

// İkinci yarışmacının ilk yarışmacıyı yakalama süresini hesaplayın ve sonucu yazdırın
let yakalamaZamaniSaat = yakalamaZamani(ilkYarismaciHizi, ikinciYarismaciHizi);
console.log(
  "İkinci yarışmacı ilk yarışmacıyı " +
    yakalamaZamaniSaat +
    " saat sonra yakalar."
);
