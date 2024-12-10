const createNode = (line) => {
  // get key, left & right
  const [key, left, right] = line.replace(/(\(|\))/g, '').split(/\s\=\s|\,\s/g);

  return {
    key,
    left,
    right
  }
}
const createNodes = (nodesInput = '', rightLeftPattern = [], startEndsWith = 'AAA', endEndsWith = 'ZZZ') => {
  // initiate nodes object
  const nodes = nodesInput
    .split('\n')
    .reduce((obj, line) => {
      // get key, left & right
      const node = createNode(line)

      obj[node.key] = node

      return obj
    }, {})

  // initiate current keys
  let currentKeys = Object
    .keys(nodes)
    .filter(currentKey => currentKey.endsWith(startEndsWith))

  // methods
  const getNumberOfStepsTaken = () => {
    // calculate total steps needed for each key
    const currentKeyStepsNeeded = currentKeys.map(currentKey => getStepsNeeded(currentKey));

    return currentKeyStepsNeeded.reduce(lowestCommonMultiple);
  }
  const getStepsNeeded = (currentKey) => {
    // initiate number of steps taken
    let numberOfStepsTaken = 0;

    // repeat until at the end
    while (!currentKey.endsWith(endEndsWith)) {
      // get current direction
      const direction = rightLeftPattern[numberOfStepsTaken % rightLeftPattern.length]

      // update current key
      currentKey = nodes[currentKey][direction];

      // increment number of steps taken
      numberOfStepsTaken++;
    }

    return numberOfStepsTaken;
  }

  return {
    getNumberOfStepsTaken,
  }
}
const greatestCommonDenominator = (a, b) => a ? greatestCommonDenominator(b % a, a) : b;
const lowestCommonMultiple = (a, b) => a * b / greatestCommonDenominator(a, b);
const parseInput = (input, startEndsWith = 'AAA', endEndsWith = 'ZZZ') => {
  // parse input
  const [rightLeftPatternInput, nodesInput] = input.split('\n\n');

  // get right/left pattern
  const rightLeftPattern = rightLeftPatternInput
    .split('')
    .map(char => char === 'R' ? 'right' : 'left')

  // get nodes
  const nodes = createNodes(nodesInput, rightLeftPattern, startEndsWith, endEndsWith)

  return { nodes }
}
export const partOne = (input = '', startEndsWith = 'AAA', endEndsWith = 'ZZZ') => {
  // parse input
  const { nodes } = parseInput(input, startEndsWith, endEndsWith);

  return nodes.getNumberOfStepsTaken();
}

export const partTwo = (input = '') => {
  return partOne(input, 'A', 'Z')
}