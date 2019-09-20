import { random } from "./utils.js";

export function spot(
  min = { x: 0, y: 0 },
  max = { x: 200, y: 100 },
  zones = 5
) {
  const zoneX = (max.x - min.x) / zones;
  const zoneY = (max.y - min.y) / zones;
  let top = [],
    right = [],
    left = [],
    bottom = [];

  for (let zone = 1; zone < zones - 1; zone++) {
    const minFloatX = min.x + zoneX * zone;
    const minFloatY = min.y + zoneY * zone;
    const maxFloatX = zoneX * (zone + 1);
    const maxFloatY = zoneY * (zone + 1);

    top.push([random(minFloatX, maxFloatX), random(min.y, zoneY)]);
    bottom.push([
      random(minFloatX, maxFloatX),
      random(zoneY * (zones - 1), zoneY * zones)
    ]);
    left.push([random(min.x, zoneX), random(minFloatY, maxFloatY)]);
    right.push([
      random(zoneX * (zones - 1), zoneX * zones),
      random(minFloatY, maxFloatY)
    ]);
  }
  top = top.concat(
    right.slice(1, zones - 1),
    bottom.reverse(),
    left.slice(1, zones - 1).reverse()
  );
  top.push(top[0]);

  return top;
}
