export const partOne = (input = "") => {
  const grid = [...Array(1000)].map((_) => [...Array(1000)].map((_) => 0));
  const instructions = input.split("\r\n");
  instructions.forEach((instruction) => {
    const {
      1: operation,
      2: x1,
      3: y1,
      4: x2,
      5: y2,
    } = instruction.match(
      /(turn\son|turn\soff|toggle)\s(\d+),(\d+)\sthrough\s(\d+),(\d+)/
    );
    for (let y = +y1; y <= +y2; y++) {
      for (let x = +x1; x <= +x2; x++) {
        if (operation === "turn off") grid[y][x] = 0;
        if (operation === "turn on") grid[y][x] = 1;
        if (operation === "toggle") grid[y][x] = grid[y][x] === 0 ? 1 : 0;
      }
    }
  });
  const totalLightsLit = grid
    .flat(1)
    .reduce((total, lightValue) => total + lightValue, 0);
  return totalLightsLit;
};

export const partTwo = (input = "") => {};
