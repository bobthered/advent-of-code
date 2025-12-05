const getRangesAndIngredientIds = (input = "") => {
  // parse input
  const [rangesString, ingredientIdsString] = input
    .split("\n\n")
    .map((string) => string.split("\n"));

  const ranges = rangesString
    .map((rangeString) => {
      const [from, to] = rangeString.split("-").map(Number);
      return { from, to };
    })
    .sort((a, b) => a.from - b.from);

  const ingredientIds = ingredientIdsString.map((string) => Number(string));

  return { ingredientIds, ranges };
};

export const partOne = (input = "") => {
  const { ingredientIds, ranges } = getRangesAndIngredientIds(input);

  const freshIngredientIds = [];

  ingredientIds.forEach((ingredientId) => {
    for (const { from, to } of ranges) {
      if (ingredientId >= from && ingredientId <= to) {
        freshIngredientIds.push(ingredientId);
        break;
      }
    }
  });

  return freshIngredientIds.length;
};

export const partTwo = (input = "") => {
  const { ranges } = getRangesAndIngredientIds(input);

  const freshIngredientIdRanges = [];
  let currentRange = { from: -1, to: -1 };
  let totalFreshIngredientIds = 0;

  for (const { from, to } of ranges) {
    if (currentRange.from === -1 && currentRange.to === -1) {
      currentRange = { from, to };
      continue;
    }
    if (from <= currentRange.to) {
      currentRange.to = Math.max(currentRange.to, to);
    } else {
      freshIngredientIdRanges.push(currentRange);
      totalFreshIngredientIds += currentRange.to - currentRange.from + 1;
      currentRange = { from, to };
    }
  }

  freshIngredientIdRanges.push(currentRange);
  totalFreshIngredientIds += currentRange.to - currentRange.from + 1;

  return totalFreshIngredientIds;
};
