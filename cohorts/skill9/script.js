function checkDuplication(sentence) {
  const words = sentence.toLowerCase().split(" ");

  for (let i = 0; i < words.length - 1; i++) {
    if (words[i] === words[i + 1]) {
      return true;
    }
  }

  return false;
}

const userSentence = prompt("Bir cümle girin:");
const isDuplicated = checkDuplication(userSentence);

if (isDuplicated) {
  console.log("Bu cümlede ikileme bulunmaktadır.");
} else {
  console.log("Bu cümlede ikileme bulunmamaktadır.");
}
