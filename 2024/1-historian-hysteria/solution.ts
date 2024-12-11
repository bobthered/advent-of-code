export const partOne = (input = "") => {
  const lefts: number[] = [];
  const rights: number[] = [];

  input.split("\n").forEach((line) => {
    const [leftNumber, rightNumber] = line.split(/\s+/g).map(Number);
    lefts.push(leftNumber);
    rights.push(rightNumber);
  });

  lefts.sort((a, b) => a - b);
  rights.sort((a, b) => a - b);

  const totalDistance = lefts.reduce((total, left, i) => {
    const right = rights[i];
    const distance = Math.abs(right - left);

    return total + distance;
  }, 0);

  return totalDistance;
};

export const partTwo = (input = "") => {
  const lefts: number[] = [];
  const rights: Map<number, number> = new Map();

  input.split("\n").forEach((line) => {
    const [leftNumber, rightNumber] = line
      .split(/\s+/g)
      .map((string) => +string);
    lefts.push(leftNumber);
    if (!rights.has(rightNumber)) rights.set(rightNumber, 0);
    rights.set(rightNumber, (rights.get(rightNumber) || 0) + 1);
  });

  const totalSimilarity = lefts.reduce((total, left) => {
    const right = rights.get(left) || 0;
    const similiarity = left * right;

    return total + similiarity;
  }, 0);

  return totalSimilarity;
};
