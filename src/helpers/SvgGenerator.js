import { mapPoints } from "./utils.js";
import { spot } from "./figures.js";

export default class SvgGenerator {
  constructor(width = 200, height = 100) {
    this.min = { x: 10, y: 10 };
    this.max = { x: width - this.min.x, y: height - this.min.y };
  }

  get(zones = 5) {
    return mapPoints(spot(this.min, this.max, zones));
  }
}
