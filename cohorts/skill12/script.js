// Toplam hayvan sayısı
var toplamHayvanSayisi = 36;

// Toplam bacak sayısı
var toplamBacakSayisi = 100;

// Tavuk sayısını hesaplamak için iki değişken tanımlıyoruz
var tavukSayisi = 0;
var koyunSayisi = 0;

// Tavuk sayısını bulmak için bir döngü kullanıyoruz
for (tavukSayisi = 0; tavukSayisi <= toplamHayvanSayisi; tavukSayisi++) {
  // Koyun sayısını bulmak için tavuk sayısını kullanıyoruz
  koyunSayisi = toplamHayvanSayisi - tavukSayisi;

  // Toplam bacak sayısını kontrol ediyoruz
  if (tavukSayisi * 2 + koyunSayisi * 4 === toplamBacakSayisi) {
    break;
  }
}

// Sonuçları yazdırıyoruz
console.log("Tavuk Sayısı: " + tavukSayisi);
console.log("Koyun Sayısı: " + koyunSayisi);
