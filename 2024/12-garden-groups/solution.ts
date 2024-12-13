type Garden = Map<string, string>;
type Region = { area: number; perimeter: number; sides: number };

const corners: {
  comparison: "different" | "same";
  xDelta: number;
  yDelta: number;
}[][] = [
  [
    { comparison: "different", xDelta: -1, yDelta: 0 },
    { comparison: "different", xDelta: 0, yDelta: -1 },
  ],
  [
    { comparison: "different", xDelta: 1, yDelta: 0 },
    { comparison: "different", xDelta: 0, yDelta: -1 },
  ],
  [
    { comparison: "different", xDelta: -1, yDelta: 0 },
    { comparison: "different", xDelta: 0, yDelta: 1 },
  ],
  [
    { comparison: "different", xDelta: 1, yDelta: 0 },
    { comparison: "different", xDelta: 0, yDelta: 1 },
  ],
  [
    { comparison: "different", xDelta: -1, yDelta: -1 },
    { comparison: "same", xDelta: -1, yDelta: 0 },
    { comparison: "same", xDelta: 0, yDelta: -1 },
  ],
  [
    { comparison: "different", xDelta: 1, yDelta: -1 },
    { comparison: "same", xDelta: 1, yDelta: 0 },
    { comparison: "same", xDelta: 0, yDelta: -1 },
  ],
  [
    { comparison: "different", xDelta: -1, yDelta: 1 },
    { comparison: "same", xDelta: -1, yDelta: 0 },
    { comparison: "same", xDelta: 0, yDelta: 1 },
  ],
  [
    { comparison: "different", xDelta: 1, yDelta: 1 },
    { comparison: "same", xDelta: 1, yDelta: 0 },
    { comparison: "same", xDelta: 0, yDelta: 1 },
  ],
];
/*
OX. .XO ... ...
XX. .XX XX. .XX
... ... OX. .XO
*/

const directions = [
  { xDelta: 0, yDelta: -1 },
  { xDelta: 1, yDelta: 0 },
  { xDelta: 0, yDelta: 1 },
  { xDelta: -1, yDelta: 0 },
];

const initializeGarden = (input: string) => {
  const garden: Garden = new Map();
  input.split("\r\n").forEach((string, y) => {
    string.split("").forEach((plant, x) => {
      const key = `${x}|${y}`;
      garden.set(key, plant);
    });
  });
  return garden;
};

export const partOne = (
  input = "",
  regionCostMap: (region: Region) => number = ({ area, perimeter }) =>
    area * perimeter
) => {
  const regions: Region[] = [];
  const visitedCells: Set<string> = new Set();

  const getRegion = (x: number, y: number) => {
    let area = 0;
    let perimeter = 0;
    let sides = 0;
    const queue = [{ x, y }];
    const nextQueue: { x: number; y: number }[] = [];
    while (queue.length > 0) {
      const { x: currentX, y: currentY } = queue.shift() || { x: -2, y: -2 };
      const currentKey = `${currentX}|${currentY}`;
      if (visitedCells.has(currentKey)) continue;
      const currentPlant = garden.get(currentKey);
      visitedCells.add(currentKey);
      area++;
      for (const { xDelta, yDelta } of directions) {
        const newX = currentX + xDelta;
        const newY = currentY + yDelta;
        const newKey = `${newX}|${newY}`;
        const newPlant = garden.get(newKey);
        if (currentPlant === newPlant && !visitedCells.has(newKey)) {
          queue.push({ x: newX, y: newY });
        }
        if (currentPlant !== newPlant) {
          perimeter++;
          if (newPlant !== undefined && !visitedCells.has(newKey))
            nextQueue.push({ x: newX, y: newY });
        }
      }
      for (const patterns of corners) {
        let matchesCornerPattern = true;
        for (const { comparison, xDelta, yDelta } of patterns) {
          const newX = currentX + xDelta;
          const newY = currentY + yDelta;
          const newKey = `${newX}|${newY}`;
          const newPlant = garden.get(newKey);
          if (comparison === "different" && currentPlant === newPlant)
            matchesCornerPattern = false;
          if (comparison === "same" && currentPlant !== newPlant)
            matchesCornerPattern = false;
          if (!matchesCornerPattern) break;
        }
        if (matchesCornerPattern) {
          sides++;
        }
      }
    }
    regions.push({ area, perimeter, sides });
    while (nextQueue.length > 0) {
      const { x: currentX, y: currentY } = nextQueue.shift() || {
        x: -1,
        y: -2,
      };
      const currentKey = `${currentX}|${currentY}`;
      if (visitedCells.has(currentKey)) continue;
      getRegion(currentX, currentY);
    }
  };

  const garden = initializeGarden(input);
  getRegion(0, 0);

  const regionCosts = regions.map(regionCostMap);
  const totalCosts = regionCosts.reduce(
    (total, regionCost) => total + regionCost,
    0
  );
  return totalCosts;
};

export const partTwo = (input = "") => {
  return partOne(input, ({ area, sides }) => area * sides);
};
