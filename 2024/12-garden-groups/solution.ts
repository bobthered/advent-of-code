type Garden = Map<string, string>;
type Region = { area: number; perimeter: number };

export const partOne = (input = "") => {
  const directions = [
    { xDelta: 0, yDelta: -1 },
    { xDelta: 1, yDelta: 0 },
    { xDelta: 0, yDelta: 1 },
    { xDelta: -1, yDelta: 0 },
  ];
  const garden: Garden = new Map();
  const regions: Region[] = [];
  const visitedCells: Set<string> = new Set();

  const getRegion = (x: number, y: number) => {
    let area = 0;
    let perimeter = 0;
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
    }
    regions.push({ area, perimeter });
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

  const initializeGarden = (input: string) =>
    input.split("\r\n").forEach((string, y) => {
      string.split("").forEach((plant, x) => {
        const key = `${x}|${y}`;
        garden.set(key, plant);
      });
    });

  initializeGarden(input);
  getRegion(0, 0);

  const regionCosts = regions.map(({ area, perimeter }) => area * perimeter);
  const totalCosts = regionCosts.reduce(
    (total, regionCost) => total + regionCost,
    0
  );
  return totalCosts;
};

export const partTwo = (input = "") => {
  return 0;
};
