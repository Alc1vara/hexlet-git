const fib = (n) => {
  let firstNumber = 1;
  let secondNumber = 1;
  for (let i = 3; i <= n; i += 1) {
    let thirdNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = thirdNumber;
  }
  return secondNumber;
};
console.log(fib(12));