const getMax = (array = []) => {
  if (array.length === 0) {
    return null;
  }
  const [firstNumber, ...rest] = array;
  let curMaxNumber = firstNumber;
  for (const element of rest) {
    if (element > curMaxNumber) {
      curMaxNumber = element;
    }
  }
  return curMaxNumber;
};
const array = [2, 5, 7, 92, 30, 52];
console.log(getMax(array));