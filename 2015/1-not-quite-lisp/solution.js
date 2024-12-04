export const partOne = (input = "") => {
  const down = input.match(/\)/g);
  const up = input.match(/\(/g);
  const floor = up.length - down.length;
  return floor;
};

export const partTwo = (input = "") => {
  let basementPosition = 0;
  let floor = 0;
  for (let i = 0; i < input.length; i++) {
    basementPosition++;
    if (input[i] === "(") floor++;
    if (input[i] === ")") floor--;
    if (floor < 0) break;
  }
  return basementPosition;
};
