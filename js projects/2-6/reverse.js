const reverse = (array = []) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray[i] = array[i];
  }
  for (let i = 0; i < newArray.length; i += 1) {
    array[i] = newArray[newArray.length - (i + 1)];
  }
  return array;
};
//const letters = ['один', 'два', 'три', 'четыре'];
const letters = [false, true, false, false];
console.log(reverse(letters));