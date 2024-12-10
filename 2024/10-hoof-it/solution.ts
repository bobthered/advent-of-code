const directions = [
  { xDelta: 0, yDelta: -1 },
  { xDelta: 1, yDelta: 0 },
  { xDelta: 0, yDelta: 1 },
  { xDelta: -1, yDelta: 0 },
];

const getScores = (map: number[][], x: number, y: number) => {
  let score = 0;
  const visitedSet: Set<string> = new Set();

  const checkPath = (startingHeight: number, x: number, y: number) => {
    for (const { xDelta, yDelta } of directions) {
      const newX = x + xDelta;
      const newY = y + yDelta;
      const newHeight = map?.[newY]?.[newX] || -1;
      if (startingHeight + 1 !== newHeight) continue;
      if (newHeight === 9) {
        if (!visitedSet.has(`${newX}|${newY}`)) {
          visitedSet.add(`${newX}|${newY}`);
          score++;
        }
        continue;
      }
      checkPath(newHeight, newX, newY);
    }
  };

  checkPath(0, x, y);

  return score;
};

const parseInput = (input: string) => {
  const trailHeads: { score: number; x: number; y: number }[] = [];
  const map = input.split("\r\n").map((row, y) => {
    const heights = row.split("").map((char, x) => {
      const number = +char;
      if (number === 0) {
        trailHeads.push({ score: 0, x, y });
      }
      return number;
    });
    return heights;
  });
  return { map, trailHeads };
};

export const partOne = (input = "") => {
  const { trailHeads, map } = parseInput(input);
  for (
    let trailHeadIndex = 0;
    trailHeadIndex < trailHeads.length;
    trailHeadIndex++
  ) {
    const { x, y } = trailHeads[trailHeadIndex];
    trailHeads[trailHeadIndex].score = getScores(map, x, y);
  }
  const sum = trailHeads.reduce(
    (total, trailHead) => total + trailHead.score,
    0
  );
  return sum;
};

// export const partTwo = (input = "") => {
//   return 0;
// };
