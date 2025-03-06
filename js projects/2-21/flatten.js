const flatten = (array = []) => {
  let flattenArray = [];
  for (const element of array) {
    if (Array.isArray(element) === false) {
      flattenArray.push(element);
     } else {
      flattenArray = flattenArray.concat(element);
        /*notFlattenArray.push(element);
        for (const element1 of element) {
          flattenArray.push(element1);
      }*/
    }
  }
  return flattenArray;
  /*return flattenArray;*/
};
const array = [1, 2, 5, [2, 5], [[44], 4]];
console.log(flatten(array));