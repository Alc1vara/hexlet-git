const isContinuousSequence = (array = []) => {
  if (array.length <= 1) {
    return null;
  }
  let alright = true;
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] !== (array[i - 1] + 1)) {
      alright = false;
      break;
    }
  }
 return alright;
};
const array = [1, 2, 3, 4, 5, 6];
console.log(isContinuousSequence(array));