export const partOne = (input = '') => {
  // parse input
  const lines = input.split('\n');

  // initialize part numbers
  let partNumbers = [];

  // loop through lines
  lines.map((line, rowIndex) => {
    // find all matches
    const matches = [...line.matchAll(/\d+/g)];

    // loop over possible matches
    matches.map(match => {
      // destructure match data
      const [number] = match;
      const { index } = match;

      // initialize index ranges
      const indexStartRow = rowIndex - 1;
      const indexEndRow = rowIndex + 1;
      const indexStartColumn = index - 1;
      const indexEndColumn = index + number.length + 1;

      // get all text to check
      const text = [
        lines[indexStartRow]?.substring(indexStartColumn, indexEndColumn) || '',
        lines[rowIndex]?.substring(indexStartColumn, indexEndColumn) || '',
        lines[indexEndRow]?.substring(indexStartColumn, indexEndColumn) || '',
      ].join('');


      // test if it has a non-number and period
      const validPart = /([^\d|\.])/g.test(text);

      // add to part numbers if it is a valid Part
      if (validPart) partNumbers.push(number)
    })
  })

  // get sum of part numbers
  const partNumbersSum = partNumbers.reduce((total, current) => total += +current, 0)

  return partNumbersSum;
}