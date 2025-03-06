const joinNumbersFromRange = (start, finish) => {
  let i = start;
  let sum = '';

  while (i <= finish) {
    sum = `${sum}${i}`;
    i += 1;
  }
  return sum;
};
joinNumbersFromRange(1, 6);