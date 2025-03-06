const getHiddenCard = (cardNumber = '', quantityOfStars = 4) => {
  const cutNumber = cardNumber.slice(-4);
  const starsWord = '*'.repeat(quantityOfStars);
  const hiddenCard = starsWord + cutNumber;
  return hiddenCard;
};
console.log(getHiddenCard (5454222856751488, 4));