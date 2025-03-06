const fizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i += 1) {
    if (i <= end) {
      result = '';
    }
    if (i % 3 === 0) {
      result = 'Fizz';
    }

    if (i % 5 === 0) {
      result = `${result}${'Buzz'}`;
    }

    if (result === '') {
      result = i;
    }
    
    console.log(result);
  }
  return;
};
console.log(fizzBuzz(1, 20));