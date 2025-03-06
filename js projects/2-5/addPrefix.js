const addPrefix = (array = [], prefix = '') => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray[i] = `${prefix} ${array[i]}`;

    //const array = newArrayrray;
    //array[i] = newArray;
  }
  return newArray;
};
const letters = ['a', 'b', 'c', 'd'];
console.log(addPrefix(letters, 'Ms'));
//console.log(addPrefix(letters, 'Mr'));
//(addPrefix(letters, 'Mr'));