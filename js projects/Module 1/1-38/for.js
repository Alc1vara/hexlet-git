const encrypt = (text) => {
  let result = '';
  for (let i = 0; i < text.length; i += 2) {
    const f = text[i];
    const s = text[i + 1];
    
    if (!s) {
      return result + f;
    }
  
    result = `${result}${s}${f}`;
  }
  return result;
};
const text = 'He always comeback!';
console.log(encrypt('welcome'));