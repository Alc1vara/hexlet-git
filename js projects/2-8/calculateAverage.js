const calculateAverage = (array = []) => {
  let sum = 0;
  for (const value of array) {
    sum += value / array.length;
  }
  if (array.length === 0) {
    return null;
  }
  return sum;
};
const kills = [];
console.log(calculateAverage(kills));