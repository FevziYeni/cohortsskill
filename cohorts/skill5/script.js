// Kullanıcıdan sayıyı alın
var sayi = prompt("Bir sayı girin:");

// Karekökünü hesaplayın
var karekok = Math.sqrt(sayi);

// Karekökten çıkıyorsa çıktığı halini gösterin
if (karekok % 1 === 0) {
  console.log("Sonuç: " + karekok);
} else {
  // Tam olarak çıkmıyorsa hata mesajı verin
  console.log("Karekökten tam olarak çıkmıyor!");
}
