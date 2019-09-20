import { M, Q, T, closePath } from "./points.js";

/**
 * @param {Bollean} spot - flag for transforming shape into patterned spot
 * @param {Array} shape - all points
 *
 * @return {String}
 */
export function mapPoints(shape = []) {
  return shape
    .map(([x, y], index, shape) => {
      if (index === 0) {
        return M(x, y);
      }
      return calculateCurvePoint({ x: x, y: y }, index, shape);
    })
    .join(" ")
    .concat(closePath());
}

/**
 * @param {Object} end - current point is end of previous point
 * @param {Number} index - current point in array
 * @param {Array} shape - all points
 *
 * @return {Array}
 */
function calculateCurvePoint(end, index, shape) {
  const [x, y] = shape[index - 1];
  let b1 = {
    x: getMiddle(x, getMiddle(x, end.x)),
    y: getMiddle(y, getMiddle(y, end.y))
  };
  let b2 = {
    x: getMiddle(getMiddle(x, end.x), x),
    y: getMiddle(getMiddle(y, end.y), y)
  };
  b1 = {
    x: b1.x - randomCurve(b2.x - b1.x, 0),
    y: b1.y + randomCurve(b2.y - b1.y, 0)
  };
  b2 = {
    x: b2.x - randomCurve(end.x - b2.x, 0),
    y: b2.y + randomCurve(end.y - b2.y, 0)
  };

  return Q(b2, b1) + T(end);
}

function randomCurve(point, coef = 0) {
  return (point > 0 ? random(1, point) : random(point, -1)) + coef;
}

/**
 * returns middle of the line
 *
 * @param {Number} start - start point on line
 * @param {Number} end - end point on line
 *
 * @return {Number}
 */
export function getMiddle(start, end) {
  return (start + end) / 2;
}

export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
