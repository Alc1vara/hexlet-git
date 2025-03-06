const convertText = (text = '') => {
  if (text === '') {
    return '';
  }

    const firstLetter = text[0];
    const result = (firstLetter === firstLetter.toUpperCase()) ? text : reverse(text);
    return result;
};
convertText('hello');