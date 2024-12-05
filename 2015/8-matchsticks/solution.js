export const partOne = (input = "") => {
  const strings = input.split("\r\n");
  return strings.reduce(
    (total, string) => total + string.length - eval(string).length,
    0
  );
};

export const partTwo = (input = "") => {
  const strings = input.split("\r\n");
  return strings.reduce(
    (total, string) => total + JSON.stringify(string).length - string.length,
    0
  );
};
