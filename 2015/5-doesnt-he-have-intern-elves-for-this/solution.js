const hasRepeatingLetters = (input = "") => /(.)\1{1,}/g.test(input);
const hasThreeVowels = (input = "") =>
  /[a|e|i|o|u].{0,}[a|e|i|o|u].{0,}[a|e|i|o|u]/g.test(input);
const hasForbiddenCharacters = (input = "") => /ab|cd|pq|xy/g.test(input);

const isANiceString = (input = "") => {
  if (!hasThreeVowels(input)) return false;
  if (!hasRepeatingLetters(input)) return false;
  if (hasForbiddenCharacters(input)) return false;
  return true;
};

export const partOne = (input = "") => {
  const niceStrings = input
    .split("\r\n")
    .filter((string) => isANiceString(string));
  return niceStrings.length;
};

export const partTwo = (input = "") => {};
