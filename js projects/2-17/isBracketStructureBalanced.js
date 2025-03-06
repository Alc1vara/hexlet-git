const isBracketStructureBalanced = (text = '') => {
  const openingSymbols = ['(', '[', '{', '<'];
  const closingSymbols = [')', ']', '}', '>'];
  const stack = [];
  for (const symbol of text) {
    const a = openingSymbols.indexOf(symbol);
    const b = closingSymbols.indexOf(symbol);
    if (b === -1) {
      stack.push(a)
    } else if (b === stack[stack.length - 1]) {
      stack.pop(b);
    } else return false;
  }
  return stack.length === 0;
};
//const text = '<(>({()}))';
const text = '<()>({()})';
console.log(isBracketStructureBalanced(text));