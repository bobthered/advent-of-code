export const partOne = (input = "") => {
  const frequencyMap = new Map();
  const map = input.split("\r\n").map((string, y) => {
    const row = string.split("").map((char, x) => {
      if (char !== ".") {
        if (!frequencyMap.has(char)) frequencyMap.set(char, []);
        const frequency = frequencyMap.get(char);
        frequency.push({ x, y });
        frequencyMap.set(char, frequency);
      }
      return ".";
    });
    return row;
  });

  [...frequencyMap].forEach(([key, positions]) => {
    for (let index1 = 0; index1 < positions.length; index1++) {
      const { x: x1, y: y1 } = positions[index1];
      for (let index2 = 0; index2 < positions.length; index2++) {
        const { x: x2, y: y2 } = positions[index2];
        if (x1 === x2 && y1 === y2) continue;
        const xDelta = x1 - x2;
        const yDelta = y1 - y2;
        const newX = x1 + xDelta;
        const newY = y1 + yDelta;
        if (map?.[newY]?.[newX] !== undefined) {
          map[newY][newX] = "#";
        }
      }
    }
  });

  return map.reduce(
    (total, row) => total + row.filter((char) => char === "#").length,
    0
  );
};

export const partTwo = (input = "") => {
  const frequencyMap = new Map();
  const map = input.split("\r\n").map((string, y) => {
    const row = string.split("").map((char, x) => {
      if (char !== ".") {
        if (!frequencyMap.has(char)) frequencyMap.set(char, []);
        const frequency = frequencyMap.get(char);
        frequency.push({ x, y });
        frequencyMap.set(char, frequency);
      }
      return char === "." ? "." : "#";
    });
    return row;
  });

  [...frequencyMap].forEach(([key, positions]) => {
    for (let index1 = 0; index1 < positions.length; index1++) {
      const { x: x1, y: y1 } = positions[index1];
      for (let index2 = 0; index2 < positions.length; index2++) {
        const { x: x2, y: y2 } = positions[index2];
        if (x1 === x2 && y1 === y2) continue;
        const xDelta = x1 - x2;
        const yDelta = y1 - y2;
        let newX = x1 + xDelta;
        let newY = y1 + yDelta;
        while (map?.[newY]?.[newX] !== undefined) {
          map[newY][newX] = "#";
          newX += xDelta;
          newY += yDelta;
        }
      }
    }
  });

  return map.reduce(
    (total, row) => total + row.filter((char) => char === "#").length,
    0
  );
};
