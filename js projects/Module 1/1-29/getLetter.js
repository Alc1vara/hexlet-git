const getLetter = (name = '', letterNumber = 0) => {
  const cutNumber = name[letterNumber - 1];
  const nameLength = name.length;

  if (letterNumber <= nameLength && letterNumber > 0) {
    return cutNumber;
  } else {
    return ('');
  }
};
console.log(getLetter('distophy', 4));