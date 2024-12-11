export const partOne = (input = "", numberOfBlinks = 25) => {
  let stones = input.split(" ").map((string) => +string);

  for (let blinkCount = 0; blinkCount < numberOfBlinks; blinkCount++) {
    stones = stones
      .map((value) => {
        if (value === 0) return 1;
        if (value.toString().length % 2 === 0) {
          const valueString = value.toString();
          const left = +valueString.substring(0, valueString.length / 2);
          const right = +valueString.substring(valueString.length / 2);
          return [left, right];
        }
        return value * 2024;
      })
      .flat();
  }
  return stones.length;
};

// export const partTwo = (input = "") => {
//   return 0;
// };
