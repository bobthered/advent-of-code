export const partOne = (input = "") => {
  const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
  const matches = [...input.matchAll(regex)];
  const total = matches.reduce(
    (total, match) => total + +match[1] * +match[2],
    0
  );
  return total;
};

export const partTwo = (input = "") => {
  const regex = /mul\((\d{1,3}),(\d{1,3})\)|don\'t\(\)|do\(\)/g;
  const matches = [...input.matchAll(regex)];
  let enabled = true;
  const total = matches.reduce((total, match) => {
    const { 0: string, 1: x, 2: y } = match;
    if (string === "don't()") enabled = false;
    if (string === "do()") enabled = true;
    if (x !== undefined && enabled) total += +x * +y;
    return total;
  }, 0);
  return total;
};
