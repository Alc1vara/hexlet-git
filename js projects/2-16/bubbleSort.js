const bubbleSort = (array = []) => { 
  let steps = array.length;
  let swap;
  do {
    swap = false;
    for (let i = 0; i < steps; i += 1) {
      if (array[i] > array[i + 1]) {
        const correctPlace = array[i];
        array[i] = array[i + 1];
        array[i + 1] = correctPlace;
        swap = true;
      }
    }
    //steps -= 1;
  } while (swap === true);
    return array;
};
const array = [1, 5, 3, 65, 2, 7];
console.log(bubbleSort(array));