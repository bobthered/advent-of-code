export const partOne = (input = '', startKey = 'AAA', endKey = 'ZZZ') => {
  // parse input
  const [rightLeftPatternInput, nodesInput] = input.split('\n\n');

  // get right/left pattern
  const rightLeftPattern = rightLeftPatternInput
    .split('')
    .map(char => char === 'R' ? 'right' : 'left')

  // get nodes
  const nodes = nodesInput
    .split('\n')
    .reduce((obj, line) => {
      // get key, left & right
      const [key, left, right] = line.replace(/(\(|\))/g, '').split(/\s\=\s|\,\s/g);

      obj[key] = { left, right }

      return obj
    }, {})

  // initiate current key
  let currentKey = startKey;

  // initiate steps taken
  let numberOfStepsTaken = 0;

  // repeat until at endKey
  while (currentKey !== endKey) {
    // get current direction
    const currentDirection = rightLeftPattern[numberOfStepsTaken % rightLeftPattern.length];

    // update currentKey
    currentKey = nodes[currentKey][currentDirection]


    // increment number of steps taken
    numberOfStepsTaken++
  }

  return numberOfStepsTaken;
}