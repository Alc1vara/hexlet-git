const isPerfect = (number) => {
  let sumDel = 0;
  for (i = 1; i <= (number / 2); i +=1) {
    if (number % i === 0) {
      SumDel += i;
    }
  }
  if (sumDel === number) {
    return true;
  } else {
    return false;
  }
};
console.log(isPerfect(28));