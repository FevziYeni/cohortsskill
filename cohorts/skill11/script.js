// Dizi tanımlama ve değerleri atama
var sayilar = [10, 5, 8, 12, 6];

// Toplamı hesaplama
var toplam = 0;
for (var i = 0; i < sayilar.length; i++) {
  toplam += sayilar[i];
}

// Ortalamayı hesaplama
var ortalama = toplam / sayilar.length;

// Sonucu yazdırma
console.log("Dizinin ortalaması: " + ortalama);
