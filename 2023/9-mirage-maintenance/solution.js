const createHistory = (line) => {
  // initiate array of sequences
  let sequences = [createSequence(line.split(" ").map((string) => +string))];

  // loop until sequence differences are 0
  while (!sequences[sequences.length - 1].getNumbersAreAllZeroes()) {
    sequences.push(
      createSequence(sequences[sequences.length - 1].getDifferences())
    );
  }

  // loop over sequences again
  for (
    let sequenceIndex = sequences.length - 1;
    sequenceIndex > 0;
    sequenceIndex--
  ) {
    // get sequence references
    const currentSequence = sequences[sequenceIndex - 1];
    const previousSequence = sequences[sequenceIndex];
    currentSequence.updateNextNumber(previousSequence.getLastNumber());
  }

  // methods
  const getLastNumber = () => sequences[0].getLastNumber();

  return {
    getLastNumber,
  };
};
const createSequence = (numbers) => {
  // initiate differences
  let differences = [];

  // loop over numbers to calcualte the differences
  for (
    let numbersIndex = 0;
    numbersIndex < numbers.length - 1;
    numbersIndex++
  ) {
    differences.push(numbers[numbersIndex + 1] - numbers[numbersIndex]);
  }

  // methods
  const getDifferences = () => differences;
  const getLastNumber = () => numbers[numbers.length - 1];
  const getNumbers = () => numbers;
  const getNumbersAreAllZeroes = () =>
    [...numbers].filter((number) => number !== 0).length === 0;
  const updateNextNumber = (number) =>
    (numbers = [...numbers, numbers[numbers.length - 1] + number]);

  return {
    getDifferences,
    getNumbersAreAllZeroes,
    getLastNumber,
    getNumbers,
    updateNextNumber,
  };
};
export const partOne = (input = "") => {
  return sumOfExtrapolatedValues(input);
};
const sumOfExtrapolatedValues = (input) => {
  // get histories
  const histories = input.split("\n").map((line) => createHistory(line));

  // return total of last number in histories
  return histories.reduce(
    (total, history) => total + history.getLastNumber(),
    0
  );
};
