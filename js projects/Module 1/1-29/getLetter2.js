const getLetter = (name = '', letterNumber = 0) => {
  const cutNumber = name[letterNumber - 1];
  const nameLength = name.length;

  return letterNumber <= nameLength ? cutNumber : 'gg';
};
console.log(getLetter('distophy', 65));