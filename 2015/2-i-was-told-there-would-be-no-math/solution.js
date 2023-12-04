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

export const partTwo = (input = '') => {
  // get all boxes
  const boxes = input.split('\n');

  // get total ribbon feet
  const totalRibbonFeet = boxes.reduce((total, dimensions) => {
    // get length, width & height of box
    const [l, w, h] = dimensions.split('x').map(string => +string);

    // get two smallest dimensions
    const [smallest, secondSmallest] = [l, w, h].sort((a, b) => a < b ? -1 : a > b ? 1 : 0);

    // get perimeter feet
    const perimeterFeet = 2 * smallest + 2 * secondSmallest

    // get volume
    const volume = l * w * h;

    // get total linear feet
    const totalLinearFeet = perimeterFeet + volume;

    return total += totalLinearFeet
  }, 0)

  return totalRibbonFeet
}