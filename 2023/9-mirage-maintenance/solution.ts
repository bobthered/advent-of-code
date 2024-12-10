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

    // create new numbers
    currentSequence.createNextNumber(previousSequence.getLastNumber());
    currentSequence.createPreviousNumber(previousSequence.getFirstNumber());
  }

  // methods
  const getFirstNumber = () => sequences[0].getFirstNumber();
  const getLastNumber = () => sequences[0].getLastNumber();

  return {
    getFirstNumber,
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
    // get previous and next numbers
    const next = numbers[numbersIndex + 1];
    const previous = numbers[numbersIndex];

    // calculate difference
    const difference = next - previous;

    // add difference
    differences.push(difference);
  }

  // methods
  const createNextNumber = (number) =>
    (numbers = [...numbers, numbers[numbers.length - 1] + number]);
  const createPreviousNumber = (number) =>
    (numbers = [numbers[0] - number, ...numbers]);
  const getDifferences = () => differences;
  const getFirstNumber = () => numbers[0];
  const getLastNumber = () => numbers[numbers.length - 1];
  const getNumbers = () => numbers;
  const getNumbersAreAllZeroes = () =>
    [...numbers].filter((number) => number !== 0).length === 0;

  return {
    createNextNumber,
    createPreviousNumber,
    getDifferences,
    getFirstNumber,
    getNumbersAreAllZeroes,
    getLastNumber,
    getNumbers,
  };
};
export const partOne = (input = "") => {
  return sumOfExtrapolatedValues(input);
};
export const partTwo = (input = "") => {
  return sumOfExtrapolatedValues(input, "getFirstNumber");
};
const sumOfExtrapolatedValues = (input, method = "getLastNumber") => {
  // get histories
  const histories = input.split("\n").map((line) => createHistory(line));

  // return total of last number in histories
  return histories.reduce((total, history) => total + history[method](), 0);
};
