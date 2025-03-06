const isHappyTicket = (number) => {
  const numberString = number.toString();
  const qON = numberString.length;
  if (numberString.length % 2 === 0) {
    const halfqON = qON / 2;
    const h1 = numberString.slice(0, halfqON);
    const h2 = numberString.slice(halfqON);
    let sumH1 = 0;
    let sumH2 = 0;
    for (let i = 0; i < halfqON; i += 1) {
      sumH1 = sumH1 + parseInt(h1[i]);
      sumH2 = sumH2 + parseInt(h2[i]);
    }
    if (sumH1 === sumH2) {
      return true;
    }
    return false;
}
};
console.log(isHappyTicket(123231));