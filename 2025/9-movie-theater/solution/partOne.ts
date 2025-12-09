import { type Coordinate } from "./types.ts";

export const partOne = (input = "") => {
  const redTiles: Coordinate[] = input.split("\n").map((line) => {
    const [x, y] = line.split(",").map(Number);
    return { x, y };
  });

  let largestArea = 0;

  for (
    let redTile1Index = 0;
    redTile1Index < redTiles.length - 1;
    redTile1Index++
  ) {
    const redTile1 = redTiles[redTile1Index];

    for (
      let redTile2Index = redTile1Index + 1;
      redTile2Index < redTiles.length;
      redTile2Index++
    ) {
      const redTile2 = redTiles[redTile2Index];

      const area =
        (Math.abs(redTile1.x - redTile2.x) + 1) *
        (Math.abs(redTile1.y - redTile2.y) + 1);

      if (area > largestArea) largestArea = area;
    }
  }

  return largestArea;
};
