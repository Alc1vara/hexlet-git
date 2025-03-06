const getTotalAmount = (array = [], currency = '') => {
  const trueCurrency = currency.slice(0, 3);
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    const nominal = Number(array[i].slice(4));
    if (array[i].slice(0, 3) === trueCurrency) {
      sum += nominal;
    }
    i += 1;
  }
  return sum;
};
const money1 = ['eur 10', 'rub 2000', 'usd 15', 'eur 34', 'usd 66', 'rub 5400'];
console.log(getTotalAmount(money1, 'rubbles'));