type Guard = {
  directionKey: string;
  x: number;
  y: number;
};

type Map = {
  directionKeys: string[];
  value: string;
}[][];

const guardDirections = new Map([
  ["^", { x: 0, y: -1 }],
  [">", { x: 1, y: 0 }],
  ["v", { x: 0, y: 1 }],
  ["<", { x: -1, y: 0 }],
]);

const guardIsInMap = (guard: Guard, map: Map) =>
  map?.[guard.y]?.[guard.x]?.value !== undefined;

const haveVisitedNextPosition = (guard: Guard, map: Map) => {
  const guardTranslate = guardDirections.get(guard.directionKey) || {
    x: 0,
    y: 0,
  };
  const guardNewX = guard.x + guardTranslate.x;
  const guardNewY = guard.y + guardTranslate.y;
  return (map?.[guardNewY]?.[guardNewX]?.directionKeys || []).includes(
    guard.directionKey
  );
};

const initializeMap = (input = "", guard: Guard) => {
  const map = input.split("\r\n").map((string, y) => {
    const row = string.split("").map((string, x) => {
      const cell = { directionKeys: [], value: string };
      if (guardDirections.has(string)) {
        guard.directionKey = string;
        guard.x = x;
        guard.y = y;
        cell.value = "X";
      }
      return cell;
    });
    return row;
  });

  return { guard, map };
};

const moveGuard = (guard: Guard, map: Map) => {
  const guardTranslate = guardDirections.get(guard.directionKey) || {
    x: 0,
    y: 0,
  };
  const guardNewX = guard.x + guardTranslate.x;
  const guardNewY = guard.y + guardTranslate.y;
  if (map?.[guardNewY]?.[guardNewX]?.value === "#") {
    const guardDirectionKeys = [...guardDirections].map(([key]) => key);
    let guardDirectionKeyIndex = guardDirectionKeys.indexOf(guard.directionKey);
    guardDirectionKeyIndex++;
    if (guardDirectionKeyIndex > guardDirectionKeys.length - 1)
      guardDirectionKeyIndex = 0;
    guard.directionKey = guardDirectionKeys[guardDirectionKeyIndex];
  } else {
    guard.x = guardNewX;
    guard.y = guardNewY;
    if (map?.[guard.y]?.[guard.x]?.value !== undefined) {
      map[guard.y][guard.x].directionKeys.push(guard.directionKey);
      map[guard.y][guard.x].value = "X";
    }
  }

  return { guard, map };
};

export const partOne = (input = "") => {
  let guard = { directionKey: "", x: -1, y: -1 };
  let map = [];
  ({ guard, map } = initializeMap(input, guard));

  while (guardIsInMap(guard, map)) {
    ({ guard, map } = moveGuard(guard, map));
  }

  const numberOfDistinctPositions = map.reduce(
    (total: number, row) =>
      total +
      row.reduce((total, cell) => total + (cell.value === "X" ? 1 : 0), 0),
    0
  );

  return numberOfDistinctPositions;
};

export const partTwo = (input = "") => {
  let initialGuard = { directionKey: "", x: -1, y: -1 };
  let initialMap = [];
  ({ guard: initialGuard, map: initialMap } = initializeMap(
    input,
    initialGuard
  ));

  let numberOfObstructionPositions = 0;

  for (let y = 0; y < initialMap.length; y++) {
    for (let x = 0; x < initialMap[y].length; x++) {
      let guard = JSON.parse(JSON.stringify(initialGuard));
      let map = JSON.parse(JSON.stringify(initialMap));
      map[y][x].value = "#";

      while (guardIsInMap(guard, map)) {
        ({ guard, map } = moveGuard(guard, map));
        if (haveVisitedNextPosition(guard, map)) {
          numberOfObstructionPositions++;
          break;
        }
      }
    }
  }

  return numberOfObstructionPositions;
};
