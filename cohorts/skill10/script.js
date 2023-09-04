let sayilar = [10, 5, 8, 3, 12, 4];

let enKucuk = sayilar[0]; // En küçük değeri saklamak için ilk değeri atıyoruz
let enBuyuk = sayilar[0]; // En büyük değeri saklamak için ilk değeri atıyoruz

// Dizi üzerinde dönerek en büyük ve en küçük değerleri buluyoruz
for (let i = 1; i < sayilar.length; i++) {
  if (sayilar[i] < enKucuk) {
    enKucuk = sayilar[i];
  }

  if (sayilar[i] > enBuyuk) {
    enBuyuk = sayilar[i];
  }
}

console.log("En küçük değer: " + enKucuk);
console.log("En büyük değer: " + enBuyuk);
