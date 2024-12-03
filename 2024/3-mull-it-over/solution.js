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
  let characterIndex = 0;
  let instructionsEnabled = true;
  let total = 0;

  while (characterIndex < input.length - 0) {
    let inputSubstring = input.substring(characterIndex + 1);
    const {
      0: match,
      1: x,
      2: y,
      index: matchIndex,
    } = inputSubstring.match(/mul\((\d{1,3}),(\d{1,3})\)|don\'t\(\)|do\(\)/) ||
    {};
    if (match === undefined) break;
    if (x !== undefined && y !== undefined && instructionsEnabled) {
      total += +x * +y;
    }
    if (match === "don't()") {
      instructionsEnabled = false;
    }
    if (match === "do()") {
      instructionsEnabled = true;
    }
    characterIndex += match.length + matchIndex;
  }

  return total;
};
