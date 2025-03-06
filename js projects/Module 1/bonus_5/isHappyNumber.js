const sumOfSquareDigits = (number) => {
  const numberString = number.toString(); //переводим число в строку
  const qON = numberString.length;
  let sumSquare = 0; // сумма квадратов цифр числа
  for (let i = 0; i < qON; i += 1) {
    sumSquare += Math.pow(parseInt(numberString[i]), 2);
  }
    return sumSquare;
};
const isHappyNumber = (number) => {
  let figure = number;
  for (let i = 1; i <= 10; i += 1) {
    if (figure === 1) {
      return true;
    } else {
      figure = sumOfSquareDigits(figure);
    }
  }
  return false;
};
console.log(isHappyNumber(10));