/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands
 *
 * @param {Number} x
 * @param {Number} y
 *
 * @return {string}
 */
export function M(x, y) {
  return `M${point(x, y)} `;
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands
 *
 * @param {Object} p
 *
 * @return {string}
 */
export function L(x, y) {
  return `L${point(x, y)} `;
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands
 *
 * @return {string}
 */
export function closePath() {
  return "z";
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Curve_commands
 *
 * @param {Object} p - point
 * @param {Object} b1 - first cubic point
 * @param {Object} b2 - second cubic point
 *
 * @return {string}
 */
export function C(p = {}, b1 = {}, b2 = {}) {
  return `C${point(b1.x, b1.y)} ${point(b2.x, b2.y)} ${point(p.x, p.y)}`;
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Curve_commands
 *
 * @param {Object} p - point
 * @param {Object} q - quadratic bezier point
 *
 * @return {string}
 */
export function Q(p = {}, q = {}) {
  return `Q${point(q.x, q.y)} ${point(p.x, p.y)}`;
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Curve_commands
 *
 * @param {Object} p - point
 *
 * @return {string}
 */
export function T(p = {}) {
  return `T${point(p.x, p.y)} `;
}

function point(x, y) {
  return `${x},${y}`;
}
