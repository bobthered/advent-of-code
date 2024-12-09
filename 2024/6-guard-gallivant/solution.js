const guardDirections = new Map([
  ["^", { x: 0, y: -1 }],
  [">", { x: 1, y: 0 }],
  ["v", { x: 0, y: 1 }],
  ["<", { x: -1, y: 0 }],
]);

const guardIsInMap = (guard, map) => map?.[guard.y]?.[guard.x] !== undefined;

const moveGuard = (guard, map) => {
  const guardTranslate = guardDirections.get(guard.directionKey);
  const guardNewX = guard.x + guardTranslate.x;
  const guardNewY = guard.y + guardTranslate.y;
  if (map?.[guardNewY]?.[guardNewX] === "#") {
    const guardDirectionKeys = [...guardDirections].map(([key]) => key);
    let guardDirectionKeyIndex = guardDirectionKeys.indexOf(guard.directionKey);
    guardDirectionKeyIndex++;
    if (guardDirectionKeyIndex > guardDirectionKeys.length - 1)
      guardDirectionKeyIndex = 0;
    guard.directionKey = guardDirectionKeys[guardDirectionKeyIndex];
  } else {
    guard.x = guardNewX;
    guard.y = guardNewY;
    if (map?.[guard.y]?.[guard.x] !== undefined) map[guard.y][guard.x] = "X";
  }

  return { guard, map };
};

export const partOne = (input = "") => {
  let guard = { directionKey: "", x: -1, y: -1 };
  let map = input.split("\r\n").map((row, y) => {
    row = row.split("");
    if (guard.directionKey === "") {
      row.forEach((string, x) => {
        if (guardDirections.has(string)) {
          guard.directionKey = string;
          guard.x = x;
          guard.y = y;
          row[x] = "X";
        }
      });
    }
    return row;
  });

  while (guardIsInMap(guard, map)) {
    ({ guard, map } = moveGuard(guard, map));
    tries++;
  }

  const numberOfDistinctPositions = map.reduce(
    (total, row) =>
      total +
      row.reduce((total, string) => total + (string === "X" ? 1 : 0), 0),
    0
  );

  return numberOfDistinctPositions;
};

export const partTwo = (input = "") => {};
