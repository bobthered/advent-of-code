export const partOne = (input = "") => {
  let lefts = [];
  let rights = [];

  input.split("\n").forEach((line) => {
    const [leftNumber, rightNumber] = line
      .split(/\s+/g)
      .map((string) => +string);
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
