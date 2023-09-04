// Kullanıcıdan bir sayı alınır
let num = parseInt(prompt("Bir sayı girin:"));

// Toplamı saklamak için bir değişken oluşturulur
let sum = 0;

// Sayının her bir basamağını toplama eklenir
while (num > 0) {
  // Sayının son basamağı elde edilir
  let digit = num % 10;

  // Basamağın toplama eklenir
  sum += digit;

  // Sayının son basamağından kurtulmak için sayıyı 10'a bölünür
  num = Math.floor(num / 10);
}

// Toplam sonucu ekrana yazdırılır
console.log("Basamakların toplamı:", sum);
