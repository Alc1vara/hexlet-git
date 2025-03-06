const isInternationalPhone = (string) => {
  const firstSymbol = string[0];
  return firstSymbol === '+';
};
isInternationalPhone('89257024810');