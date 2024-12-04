export const partOne = (input = "") => {
  const down = input.match(/\)/g);
  const up = input.match(/\(/g);
  const floor = up.length - down.length;
  return floor;
};

export const partTwo = (input = "") => {};
