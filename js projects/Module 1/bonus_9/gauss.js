const gauss = (n) => {
    if (n % 2 === 0) {
    let a = 1;
    let b = n;
    let sum = 0;
    let product = 0;
    for (let i = 1; i <= n / 2; i += 1) {
      product = a * b; 
      sum += product;
      b = n - a;
      a += 1;
    }
    return sum;
  }
};
console.log(gauss(2)); //6+10+12