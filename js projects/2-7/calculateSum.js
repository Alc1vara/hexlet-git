const calculateSum = (array = []) => {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0) {
      sum += array[i];
    }
  }
  return sum;
};
const numbers = [1, 2, 3, 9, 12, 14, 15, 27, 100];
console.log(calculateSum(numbers));