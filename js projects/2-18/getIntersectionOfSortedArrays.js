const getIntersectionOfSortedArrays = (array1 = [], array2 = []) => {
  /*let result = [];
  const trueArray = [];
  for (const item1 of array1) {
    for (const item2 of array2) {
      if (item1 === item2) {
        trueArray.push(item1);
      }
    }
  }*/
  let result = [];
  let trueArray1 = [];
  let trueArray2 = [];
  for (let n = 0; n < array1.length; n += 1) {
    trueArray1.push(Number(array1[n]));
  }
  for (let m = 0; m <array2.length; m += 1) {
    trueArray2.push(Number(array2[m]));
  }
  for (let i = 0; i < trueArray.length; i += 1) {
    let unique = true;
    for (let j = i + 1; j < trueArray.length; j += 1) {
      if (trueArray[i] === trueArray[j]) {
        unique = false;
        break;
      }
    }
    if (unique === true) {
      result.push(trueArray[i]);
    }
  }
  return result;
};
const array1 = [1, 2, 233, 3, 1, 3, 5, 233, 65, 435, 64];
const array2 = [1, 3, 243, 233, 64];
console.log(getIntersectionOfSortedArrays(array1, array2));