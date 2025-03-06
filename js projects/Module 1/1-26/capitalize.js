/*
Реализуйте функцию capitalize(), которая принимает непустую строку и приводит первую букву строки к верхнему регистру:
*/
const capitalize = (word = '') => {
  const partName = word.slice(0, 1);
  const secondName = word.slice(1);
  const firstName = partName.toUpperCase();
  const fullName = firstName + secondName;
  return fullName;
};
const name = 'anya';
console.log(capitalize(name));

