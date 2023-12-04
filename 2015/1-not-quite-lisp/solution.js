export const partOne = (input = '') => {
  // find all forward braces ( +1 )
  const forwardBraces = input.replace(/[^\(]/g, '');

  // find all backward braces ( -1 )
  const backwardBraces = input.replace(/[^\)]/g, '');

  return forwardBraces.length * 1 + backwardBraces.length * -1;
}

export const partTwo = (input = '') => {
  // initiate character index
  let characterIndex = 0;

  // initiate floor
  let floor = 0;

  // loop through all characters
  for (let i = 0; i < input.length; i++) {
    // increment characterIndex
    characterIndex++;

    // get current character
    const currentCharacter = input[i];

    // move up or down depending on character
    floor += currentCharacter === '(' ? 1 : -1;

    // check if floor is -1;
    if (floor === -1) break
  }
  return characterIndex
}