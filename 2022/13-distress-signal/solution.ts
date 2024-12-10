import { parseInput } from "./parseInput.ts";

export const solution = (input = "") => {
  // parse input
  const { pairs } = parseInput(input);

  // initiate correct order index array
  let correctOrderIndexes = [];

  // loop over pairs
  pairs.map(([left, right], pairIndex) => {
    // initiate correct order
    let correctOrder = true;

    // loop over items
    for (let leftIndex = 0; leftIndex < left.length; leftIndex++) {
      const leftItem = {
        type: typeof left[leftIndex],
        value: left[leftIndex],
      };
      const rightItem = {
        type: typeof right?.[leftIndex],
        value: right?.[leftIndex],
      };

      // check if both are numbers
      if (leftItem.type === "number" && rightItem.type === "number") {
        // exit if left is not less than right
        if (leftItem.value > rightItem.value) {
          correctOrder = false;
          break;
        }
      }
    }
  });

  return 1;
};
