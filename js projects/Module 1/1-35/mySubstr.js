const text = 'gdbmjhkwqgfvdbjyt';
const mySubstr = (text, number) => {
  let i = 0;
  let result = '';
  while (i < number) {
    result = `${result}${text[i]}`;
    i += 1;
  }
  return result;
};
console.log(mySubstr(text, 4));
