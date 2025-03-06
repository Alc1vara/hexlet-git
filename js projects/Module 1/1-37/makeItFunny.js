const makeItFunny = (text, number) => {
  let i = 0;
  let joke = '';
  while (i < text.length) {
    if ((i + 1) % number === 0) {
      joke = `${joke}${text[i].toUpperCase()}`;
    } else {
      joke = `${joke}${text[i]}`;
    }
    ++i;
  }
  return joke;
};
const text = 'i never look back';
makeItFunny(text, 2);
