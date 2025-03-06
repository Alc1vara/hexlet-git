const EAN13 = (number) => {
  const numberString = number.toString();
  if (numberString.length !== 12) {
    return 'Wrong length.';
  }
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 1; i < numberString.length + 1; i += 2) {
      sumEven = sumEven+ parseInt(numberString[i]);
      sumOdd = sumOdd + parseInt(numberString[i - 1]);
    }
    const sumTotal = (sumEven * 3 + sumOdd) % 10;
    return numberString + sumTotal.toString();
};
console.log(EAN13(461337746999));