const normalizeUrl = (url) => {
  let firstHalf = 'https://';

  if (url.startsWith('https://')) {
    return url;
  } else {
    const result = firstHalf + url;
    return result;
  }
};
normalizeUrl('ggru.hexlet.io/courses/js-basics/lessons/conditionals/exercise_unit');