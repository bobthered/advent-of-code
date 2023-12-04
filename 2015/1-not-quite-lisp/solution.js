export const partOne = (input = '') => {
  // find all forward braces ( +1 )
  const forwardBraces = input.replace(/[^\(]/g, '');

  // find all backward braces ( -1 )
  const backwardBraces = input.replace(/[^\)]/g, '');

  return forwardBraces.length * 1 + backwardBraces.length * -1;
}