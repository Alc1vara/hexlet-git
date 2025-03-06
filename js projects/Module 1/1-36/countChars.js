const countChars = (text, letter) => {
  let i = 0;
  let count = 0;
  while (i < text.length) {
    if (text[i].toUpperCase() === letter.toUpperCase()) {
      count += 1;
    }
    i += 1;
  }
  return count;
};
const text = 'Gungnir';
console.log(countChars(text, 'g'));