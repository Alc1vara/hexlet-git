const printNumbers = (initialNumber) => {
  let i = initialNumber;

  while (i > 0) {
    console.log(i);
    i -= 7;
  }
  console.log("i'm tired of this place");
};
printNumbers(1000);
