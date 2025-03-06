const reverseInt = (number) => {
  let positiveNum = Math.abs(number);
  let text = positiveNum.toString();
  let positiveResult = '';
  let result = '';
  for (let i = 1; i <= text.length; i += 1) {
      positiveResult = `${[positiveResult]}${text[text.length - i]}`;
  }
    if (number >= 0) {
      result = positiveResult;
    } else {
      result = '-' + positiveResult;
    }
  return result;
};
console.log(reverseInt(-13423));