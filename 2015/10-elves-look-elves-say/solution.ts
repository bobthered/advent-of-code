const convertString = (string, remainingConversions) => {
  if (remainingConversions === 0) return string;
  const matches = string.match(/(\d)(\1){0,}/g);
  const convertedMatches = matches.map((match) => `${match.length}${match[0]}`);
  const convertedString = convertedMatches.join("");
  return convertString(convertedString, remainingConversions - 1);
};

export const partOne = (input = "", totalConversions = 40) => {
  return convertString(input, totalConversions).length;
};

export const partTwo = (input = "", totalConversions = 50) => {
  return convertString(input, totalConversions).length;
};
