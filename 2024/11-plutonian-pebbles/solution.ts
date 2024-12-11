const getStoneCount = (stone: number, numberOfBlinks: number) => {
  if (numberOfBlinks === 0) return 1;

  const cachedStoneCounts = stoneCacheMap.get(stone) || new Map();
  const cachedStoneCount = cachedStoneCounts.get(numberOfBlinks);
  if (cachedStoneCount) return cachedStoneCount;

  let stoneCount: number = 0;

  if (stone === 0) {
    stoneCount = getStoneCount(1, numberOfBlinks - 1);
  } else if (stone.toString().length % 2 === 0) {
    const string = stone.toString();
    stoneCount =
      getStoneCount(+string.slice(0, string.length / 2), numberOfBlinks - 1) +
      getStoneCount(+string.slice(string.length / 2), numberOfBlinks - 1);
  } else {
    stoneCount = getStoneCount(stone * 2024, numberOfBlinks - 1);
  }

  cachedStoneCounts.set(numberOfBlinks, stoneCount);
  stoneCacheMap.set(stone, cachedStoneCounts);

  return stoneCount;
};

export const partOne = (input = "", numberOfBlinks = 25) => {
  const stones = input.split(" ").map(Number);

  const totalStones = stones
    .map((stone) => getStoneCount(stone, numberOfBlinks))
    .reduce((total, count) => total + count, 0);

  return totalStones;
};

export const partTwo = (input = "", numberOfBlinks = 75) => {
  return partOne(input, numberOfBlinks);
};

const stoneCacheMap: Map<number, Map<number, number>> = new Map();
