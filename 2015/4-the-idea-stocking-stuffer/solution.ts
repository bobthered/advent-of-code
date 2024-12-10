// import md5 from "npm:md5";

// export const partOne = (input = "", numberOfLeadingZeros = 5) => {
//   let foundHash = false;
//   let answer = 0;

//   while (!foundHash) {
//     let hash = md5(`${input}${answer}`);
//     if (typeof hash === "object") hash = hash.join("");
//     if (
//       hash.substring(0, numberOfLeadingZeros) ===
//       "0".repeat(numberOfLeadingZeros)
//     ) {
//       foundHash = true;
//       break;
//     }
//     answer++;
//   }

//   return answer;
// };

// export const partTwo = (input = "") => {
//   return partOne(input, 6);
// };
