//export { getWeekends } from './dates.js'
const getWeekends = (size = 'long') => {
  if (size === 'short') {
    return ['sat', 'sun'];
  } else {
    return ['saturday', 'sunday'];
  }
};
console.log(getWeekends('short'));