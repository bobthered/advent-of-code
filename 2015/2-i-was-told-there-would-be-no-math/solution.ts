export const partOne = (input = "") => {
  const boxes = input.split("\r\n");
  const total = boxes.reduce((total, box) => {
    const [l, w, h] = box.split("x").map((string) => +string);
    const areas = [l * w, w * h, h * l];
    const smallestArea = Math.min(...areas);
    const boxTotal = areas.reduce(
      (total, area) => total + 2 * area,
      smallestArea
    );
    total += boxTotal;
    return total;
  }, 0);
  return total;
};

export const partTwo = (input = "") => {
  const boxes = input.split("\r\n");
  const total = boxes.reduce((total, box) => {
    const dimensions = box
      .split("x")
      .map((string) => +string)
      .sort((a, b) => a - b);
    const shortestDistance = dimensions[0] * 2 + dimensions[1] * 2;
    const cubicVolume = dimensions[0] * dimensions[1] * dimensions[2];
    const feet = shortestDistance + cubicVolume;
    total += feet;
    return total;
  }, 0);
  return total;
};
