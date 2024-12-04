import md5 from "md5";

export const partOne = (input = "", numberOfLeadingZeros = 5) => {
  let foundHash = false;
  let answer = 0;

  while (!foundHash) {
    const hash = md5(`${input}${answer}`);
    if (
      hash.substring(0, numberOfLeadingZeros) ===
      "0".repeat(numberOfLeadingZeros)
    ) {
      foundHash = true;
      break;
    }
    answer++;
  }

  return answer;
};

export const partTwo = (input = "") => {};
