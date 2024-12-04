const directions = [
  { x: 1, y: 0 }, // right
  { x: 0, y: 1 }, // down
  { x: -1, y: 0 }, // left
  { x: 0, y: -1 }, // up
  { x: 1, y: -1 }, // up & right
  { x: 1, y: 1 }, // down & right
  { x: -1, y: 1 }, // down & left
  { x: -1, y: -1 }, // up & left
];

export const partOne = (input = "", searchWord = "XMAS") => {
  const letters = input.split("\r\n").map((row) => row.split(""));
  let numberOfXMASoccurences = 0;
  for (let y = 0; y < letters.length; y++) {
    for (let x = 0; x < letters[y].length; x++) {
      if (letters[y][x] !== searchWord[0]) continue;
      for (let direction of directions) {
        let searchWordFound = true;
        for (
          let characterIndex = 1;
          characterIndex < searchWord.length;
          characterIndex++
        ) {
          const searchY = y + direction.y * characterIndex;
          const searchX = x + direction.x * characterIndex;
          if (letters?.[searchY]?.[searchX] !== searchWord[characterIndex]) {
            searchWordFound = false;
            break;
          }
        }
        if (searchWordFound) {
          numberOfXMASoccurences++;
        }
      }
    }
  }

  return numberOfXMASoccurences;
};

export const partTwo = (input = "") => {};
