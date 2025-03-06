const get = (array, index, defaultValue = null) => {
  if (index < array.length && index >= 0) {
    return array[index];
  }
  return defaultValue;
};
const cities = ['moscow', 'london', 'berlin', 'porto', '', undefined];
console.log(get(cities, 8));