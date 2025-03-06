const invertText = (text) => {
  let i = 0;
  let result = '';
  while (i < text.length) {
    if (text[i] === text[i].toUpperCase()) {
      result = `${result}${text[i].toLowerCase()}`
    } else {
      result = `${result}${ text[i].toUpperCase()}`
    }
    i += 1;
  }
  return result;
};
const text = 'My name is Slim Shady!'
console.log(invertText(text));