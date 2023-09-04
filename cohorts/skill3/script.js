let kitapFiyati = 80;
let defterFiyati = 20;
let kalemFiyati = 5;

let kitapAdedi = 2;
let defterAdedi = 3;
let kalemAdedi = 4;

let kitapToplamFiyat = kitapFiyati * kitapAdedi;
let defterToplamFiyat = defterFiyati * defterAdedi;
let kalemToplamFiyat = kalemFiyati * kalemAdedi;

let toplamTutar = kitapToplamFiyat + defterToplamFiyat + kalemToplamFiyat;

console.log("Müşteri ödeme yapmalı: " + toplamTutar + " TL");
