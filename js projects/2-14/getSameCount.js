const getSameCount = (array1 = [], array2 = []) => {
  let result = 0;
  const trueArray = [];
  for (const item1 of array1) {
    for (const item2 of array2) {
      if (item1 === item2) {
        trueArray.push(item1);
      }
    }
  }  
  for(let i = 0; i < trueArray.length; i ++)  {
    let unique = true;
    for(let j = i + 1; j < trueArray.length; j ++) {
      if(trueArray[i] === trueArray[j]) {
        unique = false;
        break;
      }
    }
    if(unique === true) {
      result += 1;
    }    
  }
  return result;

};
const array1 = [2, 10, 2, 2, 2, 10, 10, 42, 76];
const array2 = [2, 5, 10, 2, 6, 65, 3];
console.log(getSameCount(array1, array2));