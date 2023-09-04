// Kullanıcıdan bir sayı alın
const num = parseInt(prompt("Bir sayı girin:"));

// Sayının basamak sayısını bulun
const numDigits = num.toString().length;

let sum = 0;
let temp = num;

// Her basamağın üssünü alıp toplam hesaplayın
while (temp > 0) {
  const digit = temp % 10;
  sum += Math.pow(digit, numDigits);
  temp = Math.floor(temp / 10);
}

// Armstrong sayısı kontrolü yapın
if (num === sum) {
  console.log(num + " Armstrong bir sayıdır.");
} else {
  console.log(num + " Armstrong bir sayı değildir.");
}
