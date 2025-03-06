const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs ** 2 + ys ** 2);
};
const getTheNearestLocation = (locations = [], currentPoint = []) => {
  if (locations.length === 0) {
    return null;
  }
  let closestLocation;
  let minDistance = 0;
  for (const location of locations) {
    const [name, coordinates] = location;
    const curLocationDistance = getDistance(coordinates, currentPoint);
    if (closestLocation === undefined) {
      closestLocation = location;
      minDistance = curLocationDistance;
    }
    if (curLocationDistance === 0) {
      return location;
    }
    if (minDistance > curLocationDistance) {
      minDistance = curLocationDistance;
      closestLocation = location;
    }
  }
  return closestLocation;
};
const locations = [
  ['Inferno', [9, 1]],
  ['Mirage', [2, 5]],
  //['Train', [4, 3]],
  ['Nuke', [5, 5]],
  ['Ancient', [4.1, 3.2]]
  ];
const currentPoint = [4, 3];
console.log(getTheNearestLocation(locations, currentPoint));
/*const x1 = [3];
const y1 = [11];
const x2 = [7];
const y2 = [6];
console.log(getDistance([x1, y1], [x2, y2]));*/

