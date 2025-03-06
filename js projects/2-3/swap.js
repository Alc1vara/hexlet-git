const swap = (input = []) => {  
  const a = input.at(0);
  const b = input.at(-1);
  if (input.length < 2) {
    return input;
  }
  input[0] = b;
  input[input.length - 1] = a;
  return input;
};
console.log(swap(['one', 'two', 'three', 'four', 'five', 'six', 'seven']));