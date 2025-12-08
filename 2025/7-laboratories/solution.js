export const partOne = (input = "") => {
  const diagram = input.split("\n").map((row) => row.split(""));

  diagram[1][diagram[0].indexOf("S")] = "|";

  let totalBeamSplits = 0;

  for (let y = 1; y < diagram.length - 1; y++) {
    for (let x = 0; x < diagram[y].length; x++) {
      const char = diagram[y][x];
      if (char === "|") {
        if (diagram[y + 1][x] === "^") {
          diagram[y + 1][x - 1] = "|";
          diagram[y + 1][x + 1] = "|";
          totalBeamSplits++;
        } else {
          diagram[y + 1][x] = "|";
        }
      }
    }
  }

  return totalBeamSplits;
};

export const partTwo = (input = "") => {
  const diagram = input.split("\n").map((row) => row.split(""));

  const positionTimelines = diagram[0].map((_) => 0);

  for (let y = 0; y < diagram.length; y++) {
    for (let x = 0; x < diagram[y].length; x++) {
      const char = diagram[y][x];

      if (char === "S") {
        positionTimelines[x] = 1;
      }

      if (char === "^") {
        positionTimelines[x - 1] += positionTimelines[x];
        positionTimelines[x + 1] += positionTimelines[x];
        positionTimelines[x] = 0;
      }
    }
  }

  const totalTimelines = positionTimelines.reduce(
    (total, positionTimeline) => total + positionTimeline,
    0
  );

  return totalTimelines;
};
