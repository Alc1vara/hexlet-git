const count = (sentense = '', stringLength = 0) => {
  let result = 0;
  let newSentense = sentense.split('\n');
  /*for (let i = 0; i < sentense.length; i += 1) {
    if (sentense[i] === '\n') {
      result += 1;
    }
  }*/
  let strings = 0;
  for (const element of newSentense) {
    strings = element.length / stringLength;
    if (strings === 0) {
      result += 1;
    }
    if (strings !== 0) {
      result += Math.ceil(strings);
    }
  }
return result;
};
const sentense = 'A\nB\nC';
const stringLength = 25;
console.log(count(sentense, stringLength));