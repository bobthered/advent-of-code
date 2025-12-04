export const partOne = (input = "") => {
  // parse input
  const grid = input.split("\n").map((row) => row.split(""));

  let numberOfAccessibleRollsOfPaper = 0;

  grid.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value === ".") return;
      let numberOfAdjacentRolls = 0;
      for (let y2 = y - 1; y2 <= y + 1; y2++) {
        for (let x2 = x - 1; x2 <= x + 1; x2++) {
          if (y2 === y && x2 === x) continue;
          if (grid?.[y2]?.[x2] === undefined) continue;
          if (grid?.[y2]?.[x2] !== ".") {
            numberOfAdjacentRolls++;
          }
        }
      }
      if (numberOfAdjacentRolls < 4) {
        grid[y][x] = "x";
        numberOfAccessibleRollsOfPaper++;
      }
    });
  }, 0);

  return numberOfAccessibleRollsOfPaper;
};

export const partTwo = (input = "") => {
  // parse input
  const grid = input.split("\n").map((row) => row.split(""));

  let numberOfAccessibleRollsOfPaper = 0;

  let gridHasAccessibleRolls = true;

  while (gridHasAccessibleRolls) {
    gridHasAccessibleRolls = false;
    grid.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value === ".") return;
        let numberOfAdjacentRolls = 0;
        for (let y2 = y - 1; y2 <= y + 1; y2++) {
          for (let x2 = x - 1; x2 <= x + 1; x2++) {
            if (y2 === y && x2 === x) continue;
            if (grid?.[y2]?.[x2] === undefined) continue;
            if (grid?.[y2]?.[x2] !== ".") {
              numberOfAdjacentRolls++;
            }
          }
        }
        if (numberOfAdjacentRolls < 4) {
          grid[y][x] = "x";
          gridHasAccessibleRolls = true;
          numberOfAccessibleRollsOfPaper++;
        }
      });
    }, 0);

    grid.forEach((row, y) =>
      row.forEach((value, x) => {
        if (value === "x") grid[y][x] = ".";
      })
    );
  }

  return numberOfAccessibleRollsOfPaper;
};
