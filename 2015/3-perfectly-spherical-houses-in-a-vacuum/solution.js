const directionMap = new Map([
  [">", { x: 1, y: 0 }],
  ["v", { x: 0, y: 1 }],
  ["<", { x: -1, y: 0 }],
  ["^", { x: 0, y: -1 }],
]);

export const partOne = (input = "") => {
  const directions = input.split("");
  let houseMap = new Map([["0|0", 1]]);
  let x = 0;
  let y = 0;

  for (let direction of directions) {
    x += directionMap.get(direction).x;
    y += directionMap.get(direction).y;
    const key = `${x}|${y}`;
    if (!houseMap.has(key)) houseMap.set(key, 0);
    houseMap.set(key, houseMap.get(key) + 1);
  }
  return [...houseMap].length;
};

export const partTwo = (input = "") => {};
