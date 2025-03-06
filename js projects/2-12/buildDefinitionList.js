const buildDefinitionList = (array = []) => {
  const definitions = [];
  //const descriprions = array[1];
  for (const item of array) {
    definitions.push(`<dt>${item[0]}</dt><dd>${item[1]}</dd>`);
    //descriprions.push(`<dd>${item}</dd>`)
  }
  const innerValue = definitions.join('');
  const result = `<dl>${innerValue}</dl>`;
  return result;
};
const array = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];
console.log(buildDefinitionList(array));