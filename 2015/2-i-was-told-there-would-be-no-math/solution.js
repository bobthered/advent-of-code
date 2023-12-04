export const partOne = (input = '') => {
  // get all boxes
  const boxes = input.split('\n');

  // get total wrapping paper square feet needed
  const totalWrappingPaper = boxes.reduce((total, dimensions) => {
    // get length, width & height of box
    const [l, w, h] = dimensions.split('x').map(string => +string);

    // get surface square feet
    const surfaceSquareFeet = 2 * l * w + 2 * w * h + 2 * h * l;

    // get two smallest dimensions
    const [smallest, secondSmallest] = [l, w, h].sort((a, b) => a < b ? -1 : a > b ? 1 : 0);

    // get slack square feet
    const slackSquareFeet = smallest * secondSmallest;

    // get total square feet
    const totalSquareFeet = surfaceSquareFeet + slackSquareFeet;

    return total += totalSquareFeet
  }, 0)

  return totalWrappingPaper
}