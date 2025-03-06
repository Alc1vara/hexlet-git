const getSuperSeriesWinner = (array = [[]]) => {
  const arrUSSR = array[0];
  const arrCanada = array[1];
  let i = 0;
  let Uscore = 0;
  let Cscore = 0;
  let result = '';
  while (i < arrUSSR.length) {
    if (arrUSSR[i] > arrCanada[i]) {
      Uscore += 1;
    } else if (arrUSSR[i] < arrCanada[i]) {
      Cscore += 1;
    }
    i += 1;
  }
  if (Uscore > Cscore) {
    return result = 'ussr';
  } else if (Uscore < Cscore) {
    return result = 'canada';
  } else if (Uscore === Cscore)
  return null;
};
const scores = [[3, 5, 4, 3], [1, 4, 3, 5]];
console.log(getSuperSeriesWinner(scores));