const getSameParity = (array = []) => {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[0] % 2 === 0 && array[i] % 2 === 0) {
      result.push(array[i]);
    }
    if (array[0] % 2 !== 0 && array[i] % 2 !== 0) {
      result.push(array[i]);
    }
  }
  return result;
};
const kills = [0, 2 ,4 ,5 ,6, 7, 8, 9, 11, 23, -1, -2];
console.log(getSameParity(kills));