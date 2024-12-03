export const partOne = (input = "") => {
  const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
  const matches = [...input.matchAll(regex)];
  const total = matches.reduce(
    (total, match) => total + +match[1] * +match[2],
    0
  );
  return total;
};

export const partTwo = (input = "", maxTolerance = 1) => {
  return partOne(input, maxTolerance);
};
