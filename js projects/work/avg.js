const countAvg = (array = [], comparedNumber = 0) => {
  let result;
  let quantity = 0;
  let sum = 0;
  for (const element of array) {
    if (element > comparedNumber) {
      sum += element;
      quantity += 1;
    }
  }
  if (quantity === 0) {
    result = 0;
  } else {
    result = sum / quantity;
  }
  return result;
};
const array = [2, 5, 6, 8, 4, 12, 18];
const comparedNumber = 20;
console.log(countAvg(array, comparedNumber));