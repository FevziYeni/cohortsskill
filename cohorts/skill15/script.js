// Kullanıcıdan doğum tarihini al
var dogumTarihi = prompt("Doğum tarihinizi girin (GG/AA/YYYY):");

// Doğum tarihini ayrıştır
var dogumTarihiParcalari = dogumTarihi.split("/"); // ['GG', 'AA', 'YYYY']
var gun = parseInt(dogumTarihiParcalari[0]);
var ay = parseInt(dogumTarihiParcalari[1]);
var yil = parseInt(dogumTarihiParcalari[2]);

// Şu anki tarihi al
var suAnkiTarih = new Date();
var suAnkiGun = suAnkiTarih.getDate();
var suAnkiAy = suAnkiTarih.getMonth() + 1; // Ay değeri 0'dan başlar, bu yüzden +1 ekliyoruz
var suAnkiYil = suAnkiTarih.getFullYear();

// Kullanıcının yaşını hesapla
var yas = suAnkiYil - yil;

// Henüz doğum günü gelmediyse bir yıl çıkar
if (suAnkiAy < ay || (suAnkiAy === ay && suAnkiGun < gun)) {
  yas--;
}

// Sonucu ekrana yazdır
console.log("Yaşınız: " + yas);
