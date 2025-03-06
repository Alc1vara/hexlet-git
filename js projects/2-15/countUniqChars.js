const countUniqChars = (text = '') => {
  let result = 0;
  for(let i = 0; i < text.length; i += 1) {
    let unique = true;
    for(let j = i + 1; j < text.length; j += 1) {
      if (text[i].includes(text[j])) {
        unique = false;
        break;
      }
    }
    if (unique === true) {
      result += 1;
    }
  }
  return result;
};
const text = 'абвгд';
console.log(countUniqChars(text));