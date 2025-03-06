const getNumberExplanation = (count = 0) => {
  switch (count) {
    case 666:
      return 'devil number';
    case 42:
      return 'answer for everything';
    case 7:
      return 'prime number';
    default:
      return 'just a number';
  }
};
console.log(getNumberExplanation(6));